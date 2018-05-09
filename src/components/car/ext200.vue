<template>
    <div class="lt-container">
        <div class="self-box">
            <normalUl :origin="originData.feture"></normalUl>
            <normalUl :origin="originData.good"></normalUl>
            <normalUl :origin="originData.technique"></normalUl>
            <normalUl :origin="originData.range"></normalUl>
        </div>
        <div class="slide-box">
            <Slide></Slide>
        </div>  
    </div>
</template>

<script>
import Slide from '../slideBar.vue';
import normal from '../common/normal.vue';
import normalUl from '../common/normalUl.vue';
export default {
    name: 'EXT200',
    data () {
        return {
            originData: {
                feture: {
                    title: '特性',
                    text: [
                        'EXT200 系列 电流过载保护器是美国德州仪器KLIXON ®专有技术生产的，用于12Vdc的电路过载保护应用。',
                        '美国德州仪器推出的EXT200型小系列远程复位断路器通常用于为12V 直流线束提供保护。对于可能出现瞬间过载的电路保护，该系列产品堪称理想选择 。EXT200系列通常用来代替不便于更换的熔丝 ',
                        'SAE II 型（非循环 ）装置',
                        '多种双佥属碟片电阻率',
                        '多种端子连接配置 ，',
                        '佥属外壳构造'
                    ]
                },
                good: {
                    title: '优点',
                    text: [
                        '双金属包裹的电阻发热丝始终使保护器处于断开状态，直到电路被切断为止',
                        '具有手动复位的功能 ；',
                        '防止误用和触点表面受污',
                        '低而稳定的串联电阻',
                        '满足超长寿命周期应用的需求'
                    ]
                },
                technique: {
                    title: '技术参数',
                    text: [
                        '工作电压: 12 Vdc',
                        '额定电流: 5A ~ 35 A （每档 5A ）',
                        '开关状态: 跳脱后，断电才能复位（具有手动复位功能）',
                        '跳脱时间：4 ~ 10s 秒',
                        '外形结构：金属外壳、密封 、具有多种端子配置',
                        '典型环境温度范围：- 40°C 至 85°C'
                    ]
                },
                range: {
                    title: '应用范围',
                    text: [
                        '直流电机',
                        '可安装在保险丝盒内或线束上的其他位置',
                        '电路过载保护',
                        '发热电器、家用电器、仪器、设备、....应用范围广泛。'
                    ]
                }
            }
        }
    },
    components: {
        Slide,
        normal,
        normalUl
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/css/common.css';

</style>
