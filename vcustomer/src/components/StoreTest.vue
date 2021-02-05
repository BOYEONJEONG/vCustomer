<template>
  <div class="customers container">
    <h1 class="page-header">
      Click Count: {{this.$store.state.click}}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'StoreTest',
  data () {
    return {
    }
  }
}
</script>
