<template>
  <div class="header-contain">
    <div class="header">
			<div class="screen-full">
				<full-screen></full-screen>
			</div>
			<div class="user">
				<user-dropdown />
			</div>
    </div>
  </div>
</template>

<script>
import UserDropdown from '@/components/UserDropdown';
import FullScreen from '@/components/FullScreen';
export default {
  name: 'Header',
  data () {
    return {
      
    }
	},
	components: {
		UserDropdown,
		FullScreen
	},
  methods: {
   
  }
}
</script>

<style lang="scss" scoped>
.header-contain{
  position: fixed;
  width: 100%;
  height: 60px;
	// box-shadow: 0 2px 2px rgba(255,255,255,.05), 0 1px 0 rgba(255,255,255,.05);
	box-shadow: 0 2px 2px rgba(0,0,0,.05),0 1px 0 rgba(0,0,0,.05);
  background-color: #06061E;
  left: 0;
	top:0;
  .header{
    position: absolute;
    top: 0;
    right: 0;
    height: 60px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #FFFFFF;
		z-index: 100;
		padding-right: 20px;
		div{
			cursor: pointer;
			margin: 0 5px;
		}
    .screenfull i{
      font-size: 16px;
    }
  }
}
</style>
