<template>
	<div class="swiper-container">	
		<swiper :options="swiperOption" ref="mySwiper">
		    <!-- slides -->
		    <swiper-slide v-for="(data,index) in swipe" :key="index"><img :src="data.picUrl" class="swiper-img"/></swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>
	</div>
</template>

<script>
export default{
	data(){
		return {
			swiperOption: {
		        loop:true,
		        notNextTick: true,
		        mousewheelControl: true,
		        autoplayDisableOnInteraction:false,
		        paginationClickable: true,
		        autoplay : {
		          delay:3000
		        },
		        observer:true,
		        speed:300,
		        pagination: {
		          el: '.swiper-pagination',
		          clickable: true
		        }
		    }    
		}
	},
	props:{
		swipe:''
	},
	computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
//    console.log('this is current swiper instance object', this.swiper)
    },
    created(){
    	
    },
    methods:{
    	
    }
}
</script>

<style lang="less" scoped>
.swiper-img{
	width: 100%;
}
</style>