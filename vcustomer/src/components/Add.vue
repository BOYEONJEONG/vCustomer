<template>
  <div class="about container">
    <h1 class="page-header">Add Customer</h1>
    <form v-on:submit="addCustomer">
      <!-- Info -->
      <div class="well">
        <h4>Customer Info</h4>
        <div class="form-group">
          <label>First Name</label>
          <input type="text" class="form-control" placeholder="First Name" v-model="customer.first_name">
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input type="text" class="form-control" placeholder="Last Name" v-model="customer.last_name">
        </div>
      </div>
      <!-- contact -->
      <div class="well">
        <h4>Customer Contact</h4>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" placeholder="customer Email" v-model="customer.email">
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input type="text" class="form-control" placeholder="customer phone" v-model="customer.phone">
        </div>
      </div>
      <!-- location -->
      <div class="well">
        <h4>Customer Location</h4>
        <div class="form-group">
          <label>Address</label>
          <input type="text" class="form-control" placeholder="Address" v-model="customer.address">
        </div>
        <div class="form-group">
          <label>City</label>
          <input type="text" class="form-control" placeholder="City" v-model="customer.city">
        </div>
        <div class="form-group">
          <label>State</label>
          <input type="text" class="form-control" placeholder="State" v-model="customer.state">
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      customer:{}
    }
  },
  methods: {
    addCustomer(e){
      //실제로 제출되는 것을 방지하기 위한 기본값 방지
      e.preventDefault();

      if(!this.customer.first_name || !this.customer.last_name || !this.customer.email){
        console.log('Please fill in all required fields');
      }else{
        
        let newCustomer = {
          id: 4,
          first_name: this.customer.first_name,
          last_name: this.customer.last_name,
          email: this.customer.email,
          phone: this.customer.phone,
          address: this.customer.address,
          city: this.customer.city,
          state: this.customer.state
        }
        
        const baseURI = 'http://localhost:8080';
        axios.post(baseURI+'/add',newCustomer).then((result) => {
          this.$router.push({path:'/'});
        });
      }

    }
  }
}
</script>
