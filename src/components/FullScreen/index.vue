<template>
  <div class="screenfull">
    <i class="el-icon-full-screen iconFont" @click="toggleFull"></i>
  </div>
</template>

<script>
import screenfull from "screenfull";
export default {
  methods: {
    toggleFull() {
      if (!screenfull.isEnabled) {
        this.$message({
          type: "warning",
          message: "you browser can not work"
        });
        return false;
      }
      screenfull.toggle();
    }
  }
};
</script>
<style lang="scss" scoped>
	.screenfull .iconFont{
		font-size: 20px;
	}
</style>