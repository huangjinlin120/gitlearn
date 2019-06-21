<template>
	<div class="recommend">
		<div class="swiper">
			<Swiper :swipe="swipe"></Swiper>
		</div>
		<div class="songList">
			
		</div>
	</div>
</template>

<script>
	import Swiper from '@/components/swiper'	

export default{
	data(){
		return {
			swipe:[],
			songList:[]
		}
	},
	components:{
		Swiper,
	},
	created(){
		var url = "../../static/swipe.json"
		this.$axios.get(url).then((res)=>{
//			console.log(res.data.data.slider)
			this.swipe = res.data.data.slider
		})
		var songUrl = "../../static/songList.json"

		this.$axios.get(songUrl).then((res)=>{
			console.log(res.data.songlist)
			this.songList = res.data.songlist
		})
	}
}
</script>

<style lang="less" scoped>

</style>