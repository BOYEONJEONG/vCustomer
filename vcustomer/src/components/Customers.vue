<template>
  <div class="customers container">
    <h1 class="page-header">
      Manage Customers
      <span class="pull-right">
        <button @click="downloadExcel" class="btn btn-default">Download</button>
        <button @click="movePage" class="btn btn-default">Go</button>
        <button @click="clickReset" class="btn btn-default">Reset</button>
        <button @click="clickStore" class="btn btn-default">{{this.$store.state.click}}</button>
        <button @click="deleteCustomers" class="btn btn-danger">Delete</button>
      </span>
    </h1>
    <input type="text" class="form-control" placeholder="Enter Last Name" v-model="filterInput">
    <br/>
    <table class="table table-striped">
      <thead>
        <tr>
          <th><input type="checkbox" v-model="allSelected" @click="selectAll($event)"></th>
          <th>no</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in filterBy(customers, filterInput)" :key="customer.id">
          <td><input type="checkbox" v-model="selectedIds" :value="customer.id"></td>
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
import XLSX from 'xlsx'

export default {
  name: 'Customers',
  data () {
    return {
      filterInput:"",
      customers: [],
      selectedIds: [],
      allSelected: false
    }
  },
  watch: {
    selectedIds(val){
      this.allSelected = false;
      if(val.length==this.customers.length){
        this.allSelected=true;
      }
    }
  },
  computed: {
  },
  methods: {
    detailCustomer(id){
      this.$router.push({name: 'CustomerDetails', params:{id:id}});
    },
    filterBy(list,value){
      return list.filter(function(customer){
        return customer.last_name.indexOf(value) > -1;
      });
    },
    selectAll(e) {
      this.selectedIds = [];
      if (e.target.checked) {
        for (var index in this.customers) {
          this.selectedIds.push(this.customers[index].id.toString());
        }
      }
    },
    deleteCustomers(){
      var params={};
      params.ids=this.selectedIds;
      console.log(params);

      const baseURI = 'http://localhost:8080';
      axios.put(baseURI+'/delete',params).then(() => {
        this.$router.go(this.$router.currentRoute);
      });
    },
    downloadExcel(){
      // 엑셀 워크시트로 json 내보내기
      // 배열만 가능
      var dataWS = XLSX.utils.json_to_sheet(this.customers);
      // 엑셀의 workbook을 만든다
      // workbook은 엑셀파일에 지정된 이름이다.
      var wb = XLSX.utils.book_new();
      // workbook에 워크시트 추가
      // 시트명은 'nameData'
      XLSX.utils.book_append_sheet(wb, dataWS, 'nameData');
      // 엑셀 파일을 내보낸다.
      XLSX.writeFile(wb, 'example.xlsx');
    },
    clickStore(){
      this.$store.commit('count');
    },
    clickReset(){
      this.$store.commit('resetCount');
    },
    movePage(){
      this.$router.push({name: 'StoreTest'});
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
