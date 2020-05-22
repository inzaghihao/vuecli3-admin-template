<template>
  <div class="layout">
		<m-header></m-header>
		<m-side-bar></m-side-bar>
		<div class="page-main">
			<transition name='fade-page'>
				<router-view></router-view>
			</transition>
		</div>
  </div>
</template>

<script>
import MHeader from './components/Header';
import MSideBar from './components/SideBar';
export default {
  name: 'Home',
  components: { 
		MHeader,
		MSideBar 
	},
  data(){
    return {
    }
	},
	mounted(){
	},
  methods:{
		
  }
}
</script>

<style lang="scss" scoped>
.page-main{
  min-height: 100vh;
  margin-left: 200px;
  box-sizing: border-box;
  background-color: #f0f3f4;
  padding-top: 60px;
	transition: all .2s;
	& > div{
		box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
		background-color: #fff;
		margin: 20px;
		padding: 20px;
		border-radius: 2px;
	}
}
</style>
