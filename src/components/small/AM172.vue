<template>
    <div class="lt-container">
        <div class="self-box">
            <normal :origin="originData.feture"></normal>
            <normalUl :origin="originData.principle"></normalUl>
            <normalUl :origin="originData.good"></normalUl>
            <normalUl :origin="originData.technique"></normalUl>
            <normalUl :origin="originData.range"></normalUl>
            <normalUl :origin="originData.temperature"></normalUl>
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
    name: 'twoMM',
    data () {
        return {
            originData: {
                feture: {
                    title: '特性',
                    text: '2MM热保护器是美国德州仪器KLIXON ®专有技术生产的，是一种过温、过电流之保护器。其体积小，触点容量大，跳脱动作快速，特别适用于空间有限制的小型马达、变压器等的过热保护。'
                },
                principle: {
                    title: '工作原理',
                    text: [
                        '2MM 热保护器的核心是KLIXON ®突跳式双金属碟片。',
                        '电流通过双金属元件，当电流增大或周围温度升高至设定温度值时，双金属元件迅速动作，打开触点，切断电路。',
                        '当装置冷却到安全工作温度时，KLIXON®双金属簧片又迅速复位，触点自动闭合，恢复通电。'
                    ]
                },
                good: {
                    title: '优点',
                    text: [
                        '美国德州仪器公司成立的森萨塔科技工厂生产的著名品牌KLIXON®传感器和控制器已有九十多年的历史，品种最齐全、 产量最大、品质顶级 、价廉质优，质量具有信用保障。（产品在亚洲、欧洲和美国有制造工厂和研究开发中心）',
                        '2MM热保护器是一个微型、速动、热动装置，使用特制的KLIXON ®双金属碟片。适用于对电机、变压器、灯具、电器、仪器设备…等电热电器进行直接或间接的过热保护。在热保护科技领域内，它是一个被广泛应用的保护元件。',
                        '小型 化设计，结构紧凑，稳定可靠的寿命。',
                        '2MM热保护器 的外壳由环氧树脂 材料密封，具有绝缘、耐磨、防潮、防止渗漏、体积小等特点。',
                        'KLIXON ®双金属碟片100% 具有快速跳脱性；',
                        '具备有感应温度及电流而动作之双重性能；',
                        '可依客户的需求铆接各种規格与长度的线材；',
                        '通过各国安全认证：UL、CSA、VDE、ENEC（欧盟）、KEMA、CQC …证书 ；',
                        '每款零件均严格执行欧洲的ROHS环保标准。'
                    ]
                },
                technique: {
                    title: '技术参数',
                    text: [
                        '动作温度范围：70℃ ~160℃ （每 5℃一个规格）',
                        '动作温度公差：±5℃',
                        '开关状态：常闭，自动复位',
                        '外形尺寸：4.0 × 8.9 × 20 mm'
                    ],
                    table: {
                        thead: ['电器容量', '动作寿命'],
                        tbody: [
                            ['9 A / 250 V– AC', ''],
                            ['22 A / 115 V– AC', '3,000次'],
                            ['20 A / 16 V– DC', '']
                        ]
                    }
                },
                range: {
                    title: '应用范围',
                    text: [
                        '各类电机、马达…',
                        '电磁阀',
                        '变压器、绕组、继电器…',
                        '电池组、充电器',
                        '家用电器、发热电器…应用范围广泛。'
                    ]
                },
                temperature: {
                    title: '2MM 编号与工作温度对照表',
                    table: {
                        thead: ['编号', '跳脱温度'],
                        tbody: [
                            ['2MM T70', '70℃'],
                            ['2MM T75', '70℃'],
                            ['2MM T80', '70℃'],
                            ['2MM T85', '70℃'],
                            ['2MM T90', '70℃'],
                            ['2MM T95', '70℃'],
                            ['2MM T100', '70℃'],
                            ['2MM T105', '70℃']
                        ]
                    }
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
