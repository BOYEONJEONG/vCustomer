<template>
  <div class="details container">
    <router-link to="/">Back</router-link>
    <h1 class="page-header">
      {{customer.first_name}} {{customer.last_name}}
      <button class="btn btn-danger pull-right" @click="deleteCustomer()">Delete</button>
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
  },
  created: function(){
    const baseURI = 'http://localhost:8080';
    axios.get(baseURI+'/detail?id='+this.$route.params.id).then((result) => {
      this.customer=result.data;
    });
  }
}
</script>
