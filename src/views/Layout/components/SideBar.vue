<template>
  <div class="menu-contain">
    <div class="title">
      <p>vue-admin</p>
    </div>
    <el-menu 
      :router="true"
      class="menu"
      background-color="#1f1f34"
      text-color="#fff"
      active-text-color="#05CAFE"
      :default-active="$route.path"
      >
      <section v-for="(item, index) in routerList" :key="index">
        <el-submenu :index="index + ''" v-if="item.children && item.children.length > 0 && !item.meta.hidden">
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span>{{item.meta.title}}</span>
          </template>
          <el-menu-item v-for="(val, idx) in item.children" :key="idx" :index="val.path">
            <i :class="val.meta.icon"></i>
            <span v-show="!val.meta.hidden">{{val.meta.title}}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.path" v-show="!item.meta.hidden">{{item.meta.title}}</el-menu-item>
      </section>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      
    }
  },
  computed:{
    routerList(){
      console.log(this.$store.state.menuList.routerList)
      return this.$store.state.menuList.routerList
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-contain{
  width: 200px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #1f1f34;
  z-index: 100;
  .title{
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 18px;
    color: #FFFFFF;
    font-weight: bold;
    border-bottom: 1px solid #454b61;
  }
  .menu{
    min-height: calc(100% - 2px);
    border: none;
  }
}
</style>
