<template>
  	<div class="Slide-container">
    		<div class="Slide-product-guide">
            <p class="guide-text">产品系列</p> 
            <p class="guide-none"></p> 
        </div>
        <ul class="guide-content">
            <li><a href="#/small">小型热保护器</a></li>
            <li><a href="#/overElectic">过温/过电流保护器</a></li>
            <li><a href="#/temperature">突跳式温控开关</a></li>
            <li><a href="#/open">敞开式温控器</a></li>
            <li><a href="#/car">用车直流保护器</a></li>
        </ul>
        <img class="guide-picture" src="https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=6472c3c816950a7b756046c23ae14ee1/d1160924ab18972bfc7d9834edcd7b899f510a8c.jpg">
        <img class="guide-picture" src="https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=6472c3c816950a7b756046c23ae14ee1/d1160924ab18972bfc7d9834edcd7b899f510a8c.jpg">
  	</div>
</template>

<script>
export default {
    name: 'Slide',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Slide-product-guide{
    display: flex;
    justify-content: space-between;
}
.guide-text{
    color: #CB5920;
    border-bottom: 1px solid #CB5920;
    width: 120px;
    font-size: 22px;
    padding-left: 10px;
}
.guide-none{
    flex: 1;
    border-bottom: 1px solid #ccc;
}
.guide-content{
    padding-left: 10px;
}
.guide-content li{
    font-size: 18px;
    list-style: none;
    margin-top: 10px;
}
.guide-picture{
    width: 90%;
    margin-top: 10px;
}
</style>
