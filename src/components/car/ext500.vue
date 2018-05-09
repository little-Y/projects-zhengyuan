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
    name: 'EXT500',
    data () {
        return {
            originData: {
                feture: {
                    title: '特性',
                    text: [
                        'EXT500 系列 电流过载保护器是美国德州仪器KLIXON ®专有技术生产的，用于为 12 Vdc 的直流汽车应用提供电机和线束保护。',
                        '美国德州仪器公司推出的EXT300型封装系列断路器可用于12V流直汽车应用领域的线束保护。EXT300是瞬间过载的理想保护装置。该装置的特殊设计可用于替代保险丝。可将 EXT300安装在小型保险丝所在的位置。该系列双金属碟片断路器对于过流及过温产生的故障均非常敏感。',
                        'SAE II 型（非循环 ）装置',
                        '多种双佥属碟片电阻率',
                        '电流范围为5~30A（每档5A）',
                        '佥属外壳构造',
                        '多种端子连接配置',
                        '环境温度补偿'
                    ]
                },
                good: {
                    title: '优点',
                    text: [
                        '具有自动复位的功能',
                        '防止误用和触点表面受污 ；',
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
                        '12Vdc直流汽车电路线束保护',
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
