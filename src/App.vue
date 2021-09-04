<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../src/components/pages/common/header.vue'
import Footer from '../src/components/pages/common/footer.vue'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

