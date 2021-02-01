<template>
  <div class="customers container">
    <h1 class="page-header">Manage Customers</h1>
    <input type="text" class="form-control" placeholder="Enter Last Name" v-model="filterInput">
    <br/>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in filterBy(customers, filterInput)" :key="customer.id">
          <td>{{customer.first_name}}</td>
          <td>{{customer.last_name}}</td>
          <td>{{customer.email}}</td>
          <td><button class="btn btn-default" @click="detailCustomer(index)">View</button></td>
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
      customers: [
        {
          id:1,
          first_name:"boyeon",
          last_name:"jeong",
          email:"boyeon.jeong@bes.com",
          phone:"010-1234-1234",
          city:"Seoul",
          address:"Gwanak-gu",
          state:"Seoul"
        },
        {
          id:2,
          first_name:"surim",
          last_name:"lee",
          email:"surim.lee@bes.com",
          phone:"010-1234-1234",
          city:"Seoul",
          address:"Gwanak-gu",
          state:"Seoul"
        },
        {
          id:3,
          first_name:"bomi",
          last_name:"jeong",
          email:"bomi.jeong@bes.com",
          phone:"010-1234-1234",
          city:"Seoul",
          address:"Gwanak-gu",
          state:"Seoul"
        },
      ]
    }
  },
  methods: {
    fetchCustomers(){
      this.$http.get('http://slimapp/api.customers').then(function(response){console.log(response.body)});
    },
    detailCustomer(index){
      this.$router.push({name: 'CustomerDetails', params:{customer:this.customers[index]}});
    },
    filterBy(list,value){
      return list.filter(function(customer){
        return customer.last_name.indexOf(value) > -1;
      });
    }
  },
  created: function(){
    // this.fetchCustomers();
    if(this.$route.params.customer){
      this.customers.push(this.$route.params.customer);
    }else{
      console.log("null");
    }
  }
}
</script>
