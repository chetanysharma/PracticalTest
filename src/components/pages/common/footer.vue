<template>
  <div>
    <div class="fixed-footer">
      <div class="container">Copyright &copy; 2016 Your Company</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto; /* Center the DIV horizontally */
}
.fixed-footer {
  width: 100%;
  position: fixed;
  background: #333;
  padding: 10px 0;
  color: #fff;
}
.fixed-footer {
  bottom: 0;
}
</style>
