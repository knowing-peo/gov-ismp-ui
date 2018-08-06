<template>
  <section class="app-main" id="app-main">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>
<script>
export default {
  name: 'AppMain',
  computed: {
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
  }, 
  watch:{
    $route(to,from){
      console.log("watch $route to:  " + to.path + "  from: " + from.path);
    }
  },
  mounted:function(){
    var height = document.body.clientHeight;
    var headerHeight = parseInt(getComputedStyle(document.getElementById("header")).height);
    document.getElementById("app-main").style.height = (height - headerHeight-45) + 'px';
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  /*min-height: calc(100vh - 150px);*/
  position: relative;
  overflow-x: hidden;
}
</style>
