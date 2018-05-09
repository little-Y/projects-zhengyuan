<template>
	<div class="lt-container">
		<div class="self-box">
			<p class="p-title">公司介绍</p>
			<p class="p-text">
				上海正源实业有限公司是美国德州仪器（现美国森萨塔科技）授权的一级专业代理商 (有授权书），已有20多年的时间。1992年美国德州仪器进入中国，我们便开始推广和销售KLIXON ®品牌的控制器和传感器产品，并于1994年正式成立上海正源实业有限公司，专注于美国KLIXON ®产品的销售。
			</p>
			<p class="p-text lt-top-middle">
				森萨塔KLIXON ®的产品已经被广泛应用在电子、电气、暖通行业中（如：电机、变压器、电源、照明电器、电动工具、发热电器、家用电器、仪器设备、制冷、车辆，液压自动化机械…等 ）与电器安全保护及传感和控制有关的领域。 我们的用户遍布中国和全世界。为了更好、更广泛地应用KLIXON ®产品，更有效地保护您的产品，我们上海正源实业有限公司作为KLIXON ®品牌的一级专业代理销售商将与工厂参与您的产品应用、开发，希望各厂家来电,来函联系洽谈，我们将抱着热忱、友好、积极的态度竭诚为大家服务 ！
			</p>

			<img class="lt-top-middle" src="http://demo.klixon.com.cn/wp-content/uploads/2018/04/2017供应商大会-1024x693.jpg">

			<p class="p-title">品牌介绍</p>

			<p class="p-text lt-top-middle">美国德州仪器公司（Texas Instruments）是世界500强中非常著名的国际品牌企业，其发明的电子元件、传感器和控制器在全球的电器领域 享有很高的荣誉。</p>

			<p class="p-text lt-top-middle">美国德州仪器的传感器和控制器事业部（现美国森萨塔科技）生产的 KLIXON ® 品牌的热保护器、温度开关、电流过载保护器、压力传感器和控制开关等品种齐全，全世界产量巨大的国际著名品牌。</p>
			<p class="p-text lt-top-middle">著名品牌 KLIXON ® 已有一百多年的历史，其制造的产品技术先进，品质精良、稳定；售后有很好的技术服务作保障，被广大客户所认可，市场占有率很高，产品质量具有信用保障。产品在亚洲、北美、欧洲、（如：美国、德国、意大利、中国、日本、韩国… 等）有几十家产品制造工厂和研究开发中心。</p>
			<p class="p-text lt-top-middle">产品主要分三大类：热保护器、电流过载保护器、压力传感器</p>

			<div class="text-list">
				<span class="p-list-header">热保护器、温度开关</span>
				<p class="p-text lt-top-middle">品种（如：热保护器、温度开关、恒温器、温控开关…</p>
				<p class="p-text lt-top-middle">型号（如：6AM、7AM、17AM、17AMC、9700K、YS11、YS7、MA10、TH10、TH11、YS10、2MM、1NT、3NT、M、C、B …</p>
			</div>

			<div class="text-list">
				<span class="p-list-header">过热与电流过载保护元件</span>
				<p class="p-text lt-top-middle">品种（如：电流过载保护、直流电机保护器…</p>
				<p class="p-text lt-top-middle">型号（如：5AP、6AP、2MP、3MP、2AM、8AM、14HM、34HM …</p>
			</div>

			<div class="text-list">
				<span class="p-list-header">压力传感与控制元件 压力开关  （型号如：PS80、20PS 、….）等系列。</span>
				<p class="p-text lt-top-middle">压力传感器  （型号如：2CP5、3PP8、80HP、60CP……）等系列。</p>
			</div>

		</div>
		<div class="slide-box">
			<Slide></Slide>
		</div> 	
	</div>
</template>

<script>
import Slide from './slideBar.vue';
export default {
	name: 'Self',
 	data () {
    	return {
      		msg: 'Welcome to Your Vue.js App'
    	}
  	},
  	components: {
  		Slide
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/common.css';

.p-title{
    font-size: 40px;
    padding: 40px 0;
}
.p-text{
    font-size: 18px;
    line-height: 36px;
}
.self-box img{
	width: 100%;
}
.p-list-header{
	font-size: 18px;
	margin-top: 10px;
	display: inline-block;
}
.p-list-header:before{
	display: inline-block;
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: #000;
    vertical-align: middle;
    margin: 0 10px 0 20px;
}

</style>
