<template>
  <div class="customers container">
    <h1 class="page-header">Manage Customers</h1>
    <input type="text" class="form-control" placeholder="Enter Last Name" v-model="filterInput">
    <br/>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>no</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in filterBy(customers, filterInput)" :key="customer.id">
          <td>{{customer.id}}</td>
          <td>{{customer.first_name}}</td>
          <td>{{customer.last_name}}</td>
          <td>{{customer.email}}</td>
          <td><button class="btn btn-default" @click="detailCustomer(customer.id)">View</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Customers',
  data () {
    return {
      filterInput:"",
      customers: []
    }
  },
  methods: {
    detailCustomer(id){
      this.$router.push({name: 'CustomerDetails', params:{id:id}});
    },
    filterBy(list,value){
      return list.filter(function(customer){
        return customer.last_name.indexOf(value) > -1;
      });
    }
  },
  created: function(){
    if(this.$route.params.customer){
      this.customers.push(this.$route.params.customer);
    }
    const baseURI = 'http://localhost:8080';
    axios.get(baseURI).then((result) => {
      this.customers=result.data;
    });
  }
}
</script>
