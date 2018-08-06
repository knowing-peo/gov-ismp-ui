<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="route in routes" :key="route.name" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      // console.log("======="+this.$route.redirectedFrom);
      // console.log("======="+this.$router.currentRoute.path);
      // this.$route.matched.forEach(item=>{
      //   console.log(item.path);
      // })
      // let currentPath = "/" + this.$route.path.split("/")[1];
      let currentPath = this.$route.matched[0].path;
      let routeList = this.$router.options.routes.filter(item=>item.path === currentPath );
      return routeList;
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
