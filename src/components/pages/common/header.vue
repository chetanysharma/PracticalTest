<template>
  <div>
     <div class="fixed-header">
        <div class="container">
            <nav>
                <a href="/">Home</a>
                <a v-if="!this.$store.state.authenticated" href="login">Login</a>
                <a v-if="this.$store.state.authenticated" href="/">Logout</a>
            </nav>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  methods: {
      logout() {
          this.$store.commit("setAuthentication", false)
          this.$router.replace({name:'Login'})
      }
  }
};
</script>

<style scoped>
 /* body{        
        padding-top: 60px;
        padding-bottom: 40px;
    } */
    .container{
        width: 100%;
        margin: 0 auto; /* Center the DIV horizontally */
    }
    .fixed-header{
        width: 100%;
        position: fixed;        
        background: #333;
        padding: 10px 0;
        color: #fff;
    }
    .fixed-header{
        top: 0;
    }
    /* Some more styles to beutify this example */
    nav a{
        color: #fff;
        text-decoration: none;
        padding: 7px 25px;
        display: inline-block;
    }
    .container p{
        line-height: 200px; /* Create scrollbar to test positioning */
    }
</style>
