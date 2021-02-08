<template>
  <div class="details container">
    <!-- <router-link to="/">Back</router-link> -->
    <h1 class="page-header">
      {{customer.first_name}} {{customer.last_name}}
      <span class="pull-right">
        <button class="btn btn-default" @click="updateCustomer()">Update</button>
        <button class="btn btn-danger" @click="deleteCustomer()">Delete</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-phone" aria-hidden="true"> {{customer.phone}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"> {{customer.email}}</span></li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">{{customer.address}}</li>
      <li class="list-group-item">{{customer.city}}</li>
      <li class="list-group-item">{{customer.state}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'customersDetails',
  data () {
    return {
      customer: {}
    }
  },
  methods: {
    updateCustomer(){
      this.$router.push({name:"CustomerUpdate",params:{customer: this.customer}});
    },
    deleteCustomer(){
      var params={};
      params.ids=[this.customer.id];

      const baseURI = 'http://localhost:8080';
      axios.put(baseURI+'/delete',params).then(() => {
        this.$router.push({path:'/'});
      });

      // put, post, patch는 두번째 인자가 reponseBody
      // * delete, put 방식도 reponseBody로 보내고 싶다면 {data:{id:this.cutomer.id}} 추가

      // axios.delete(baseURI+'/delete',{
      //   data:{
      //     id:this.customer.id,
      //     name:this.customer.name
      //   }
      // }).then(() => {
      //   this.$router.push({path:'/'});
      // });
    }
  },
  created: function(){
    const baseURI = 'http://localhost:8080';
    axios.get(baseURI+'/detail?id='+this.$route.params.id).then((result) => {
      this.customer=result.data;
    });
  }
}
</script>
