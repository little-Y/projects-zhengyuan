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
    name: 'SMB',
    data () {
        return {
            originData: {
                feture: {
                    title: '特性',
                    text: [
                        'SMB系列是一种 高电流直流电机保护器，这种结构稳健的集成封装器件具有堵转保护与过载保护等多方面的优点。是美国德州仪器KLIXON ®专有技术生产的。',
                        '大电流过载保护原理: SMB直流电机保护器中的辅助发热片与双金属片匹配在一起。具有精确控制过载电流跳脱时间的作用。当直流电机处于电流过大或堵转电流超过保护器设定的跳脱值时，保护器能瞬间切断电路，使电器得到保护。 （电流过载跳脱值设计范围：3A ~100A）',
                        '可提供SAE1类（循环式）和2类（非循环 式）器件',
                        '包铜钢基材与触片 ；',
                        '设计完全符合脱扣时间与温度规格要求 ；',
                        '多种双金属电阻率特性'
                    ]
                },
                good: {
                    title: '优点',
                    text: [
                        'SMB系列突跳式电机保护器可应用于直流鼓风机、引擎冷却风扇电机、泵电机或者其他要求采取过电流或过热保护措施的应用场合（最大电压可达42V）。', 
                        'SMB的配置足以承受极端的温度环境',
                        '该器件提供丰富的设计与安装选项，可根据您的需求度身定制。 Sensata 已通过ISO和TS认证，提供世界一流品质的产品 ；',
                        '可采用锡焊、铆接或电阻焊等电气连接方式；',
                        '突跳式器件具有更长久的使用寿命 ；',
                        '可安装在电机内的电刷卡或端盖上 ；',
                        '提供多种接线柱与电刷/支架选项'
                    ]
                },
                technique: {
                    title: '技术参数',
                    text: [
                        '标定工作电压: 0~42V DC',
                        '最大额定工作电流: 35 A',
                        '最大过载电流跳脱值: >100A',
                        '跳脱时间：4 ~ 10s 秒',
                        '典型环境温度范围 : - 40℃ 至 110℃',
                        '开关状态： 常闭，自动复位',
                        '外形尺寸 ( 厚×宽×长)：6. 7× 9. 5 × 26 mm'
                    ]
                },
                range: {
                    title: '应用范围',
                    text: [
                        '发动机冷却风扇电机...',
                        '直流鼓风机 ....',
                        '泵电机 ...',
                        '应用范围广泛。'
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
