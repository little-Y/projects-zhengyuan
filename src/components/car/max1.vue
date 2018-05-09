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
    name: 'MAX1',
    data () {
        return {
            originData: {
                feture: {
                    title: '特性',
                    text: [
                        'Maxi Breaker 系列 电流过载保护器是美国德州仪器KLIXON ®专有技术生产的，用于为 14 V-dc 的直流电机应用和提供线束保护。',
                        '世界一流的性能Maxi Breaker适合用于环境温度可能达到125℃ 的发动机罩内的保险丝盒或车内其他使用Maxi Breaker保险丝的位置，可针对瞬时过载提供有效防护，而且无需更换。 该专利可作为优点包括SAE 1类(循环式)和2类(非循环式)类型',
                        'Sensata 已通过ISO和TS认证，提供世界一流品质的产品。',
                        '可提供SAE1类（循环式）和2类（非循环 式）器件 ；',
                        '多种双金属电阻率特性 ；',
                        '缠绕在双金属外部的加热丝可保持保护器的分断状态；除非出现断电情况（仅限2类）'
                    ]
                },
                good: {
                    title: '优点',
                    text: [
                        '对瞬时过载的耐受性极佳',
                        '自动复位特性有助于提高关键保护区域的安全 ；',
                        '达到更长久的使用寿命要求 ；',
                        '采用环境补偿设计，能够承受可能高达 125℃的恶劣环境'
                    ]
                },
                technique: {
                    title: '技术参数',
                    text: [
                        '工作电压: 14 Vdc',
                        '额定电流: 10A ~ 50 A （每档 5A ）',
                        '开关状态: 两种选择（自动复位、被动复位）',
                        '跳脱时间：4 ~ 10s 秒',
                        '外形结构：金属外壳、密封 、具有多种端子配置',
                        '典型环境温度范围：- 40°C 至 125°C'
                    ]
                },
                range: {
                    title: '应用范围',
                    text: [
                        '可安装在保险丝盒内或线束上的其他位置',
                        '电路过载保护',
                        '14V-dc直流汽车电路线束保护',
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
