<template>
  <div>
    <el-dropdown class="userDd">
      <div class="userDrop">
        <span class="userDrop-text">
          {{ userName }}
          <i class="el-icon-caret-bottom"></i>
        </span>
        <img src="./user.png" alt="user" />
      </div>
      <el-dropdown-menu solt="dropdown">
        <el-dropdown-item>
          <router-link to="/">
            <i class="el-icon-s-home"></i>Home
          </router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <router-link to="/personal">
            <i class="el-icon-s-custom"></i>personal
          </router-link>
        </el-dropdown-item>
        <el-dropdown-item divided>
					<i class="el-icon-switch-button"></i>logOut
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "admin"
    };
  }
};
</script>
<style lang="scss" scoped>
.userDrop {
  .userDrop-text {
		color: #fff;
    margin-right: 8px;
    i {
      margin-left: 2px;
    }
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
  }
}
</style>