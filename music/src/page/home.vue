<template>
	<div class="hello">
		<header>
			<div class="icon"></div>
			<h1>Chicken Music</h1>
		</header>
		<div class="tabs">
			<div class="tabs-item">
				<router-link to="/recommend"><span class="tabs-link">推荐</span></router-link>
			</div>
			<div class="tabs-item">
				<router-link to="/singer"><span class="tabs-link">歌手</span></router-link>
			</div>
			<div class="tabs-item">
				<router-link to="/rank"><span class="tabs-link">排行</span></router-link>
			</div>
			<div class="tabs-item">
				<router-link to="/search"><span class="tabs-link">搜索</span></router-link>
			</div>
		</div>
		
		<div class="bscroll" ref="bscroll">
			<div class="bscroll-container">
				<router-view>
					
				</router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			};
		},
		mounted() {
			this.$nextTick(() => {
				let bscrollDom = this.$refs.bscroll;
				this.aBScroll = new BScroll(bscrollDom, {});
			});
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.tabs .tabs-item .router-link-active .tabs-link{
	color: #ffcd32;
	border-bottom: 2px solid #ffcd32;
}
	.tabs {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		height: 44px;
		line-height: 44px;
		font-size: 14px;
		.tabs-item {
			-webkit-box-flex: 1;
			-ms-flex: 1;
			flex: 1;
			text-align: center;
			.tabs-link {
				padding-bottom: 5px;
				color: hsla(0, 0%, 100%, .5);
			}
		}
	}
	
	header {
		position: relative;
		height: 44px;
		text-align: center;
		color: #ffcd32;
		font-size: 0;
		.icon {
			display: inline-block;
			vertical-align: top;
			margin-top: 6px;
			width: 30px;
			height: 32px;
			margin-right: 9px;
			background-image: url(../assets/jiji.png);
			background-size: 30px 32px;
		}
		h1 {
			display: inline-block;
			vertical-align: top;
			line-height: 44px;
			font-size: 18px;
		}
	}
	
	.bscroll {
		width: 100%;
		height: 100%;
		overflow: hidden;
		    position: fixed;
    top: 88px;
    bottom: 0;
    width: 100%;
	}
</style>