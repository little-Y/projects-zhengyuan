<template>
  <div class="home">
      <Carousel autoplay v-model="value" autoplay-speed="3000">
        <CarouselItem>
            <div class="demo-carousel" >
                <div class="img-box">
                    <img src="http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg">
                </div>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <div class="img-box">
                    <img src="http://demo.klixon.com.cn/wp-content/uploads/2018/04/BA996AF51595754E13132DA03F720454.jpg">
                </div>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <div class="img-box">
                    <img src="http://demo.klixon.com.cn/wp-content/uploads/2018/04/2017供应商大会.jpg">
                </div>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <div class="img-box">
                    <img src="http://www.icfly.net/wp-content/uploads/2017/12/hjkjJK6.jpg">
                </div>
            </div>
        </CarouselItem>
      </Carousel>

      <div class="card1">
          <p class="p-title">上海正源实业有限公司</p>
          <p class="p-text">
              上海正源实业有限公司是美国德州仪器（现美国森萨塔科技）授权的一级专业代理商 (有授权书），已有20多年的时间。1992年美国德州仪器进入中国，我们便开始推广和销售KLIXON ®品牌的控制器和传感器产品，并于1994年正式成立上海正源实业有限公司，专注于美国KLIXON ®产品的销售。 森萨塔KLIXON ®的产品已经被广泛应用在电子、电气、暖通行业中（如：电机、变压器、电源、照明电器、电动工具、发热电器、家用电器、仪器设备、制冷、车辆，液压自动化机械…等 ）与电器安全保护及传感和控制有关的领域。 我们的用户遍布中国和全世界。为了更好、更广泛地应用KLIXON ®产品，更有效地保护您的产品，我们上海正源实业有限公司作为KLIXON ®品牌的一级专业代理销售商将与工厂参与您的产品应用、开发，希望各厂家来电,来函联系洽谈，我们将抱着热忱、友好、积极的态度竭诚为大家服务 ！
          </p>
      </div>

      <div class="">
          <p class="p-title">产品系列</p>
          <div class="product-list">
              <smallIimg :origin="item" v-for='item in imgData'></smallIimg>
          </div>
      </div>
      
  </div>
</template>

<script>
import smallIimg from './common/smallImg';
export default {
    name: 'Home',
    data () {
        return {
            value: 1,
            imgData: [
                {img: 'https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=6472c3c816950a7b756046c23ae14ee1/d1160924ab18972bfc7d9834edcd7b899f510a8c.jpg', name: '小型热保护器', router: 'small'},
                {img: 'https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=6472c3c816950a7b756046c23ae14ee1/d1160924ab18972bfc7d9834edcd7b899f510a8c.jpg', name: '过温过电流保护器', router: 'overElectic'},
                {img: 'https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=6472c3c816950a7b756046c23ae14ee1/d1160924ab18972bfc7d9834edcd7b899f510a8c.jpg', name: '突跳式温控开关', router: 'temperature'},
                {img: 'https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=6472c3c816950a7b756046c23ae14ee1/d1160924ab18972bfc7d9834edcd7b899f510a8c.jpg', name: '开放式温控器', router: 'open'},
                {img: 'https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=6472c3c816950a7b756046c23ae14ee1/d1160924ab18972bfc7d9834edcd7b899f510a8c.jpg', name: '汽车直流保护器', router: 'car'},
            ]
        }
    },
    components: {
        smallIimg
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-carousel{
    height: 500px;
}
.demo-carousel .img-box{
    width: 100%;
    height: 500px;
    text-align: center;
    overflow: hidden;
}
.img-box img{
    width: 100%;
    margin: 0 auto;
    display: block;
}
.card1{
    background: #F7F7F7;
}
.p-title{
    font-size: 40px;
    padding: 40px 0;
}
.p-text{
    font-size: 18px;
    line-height: 36px;
}
.product-list div{
    width: 30%;
    display: inline-block;
    padding: 5px;
    position: relative;
}
</style>
