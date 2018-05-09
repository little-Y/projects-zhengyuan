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
    name: 'TH10',
    data () {
        return {
            originData: {
                feture: {
                    title: '特性',
                    text: 'TH10温度开关的开放式结构实现了最佳热反应。由两个与陶瓷柱相连的镀镍钢支撑组成。其中一个支撑与高性能双金属碟片相连，当与精密的接触系统配合工作时，可实现优异的循环性能。是美国德州仪器KLIXON ®专有技术生产的。'
                },
                principle: {
                    title: '工作原理',
                    text: [
                        'TH10温度开关的核心是KLIXON ®突跳式双金属碟片。',
                        '当发生故障时,升高的环境温度会使KLIXON ®双金属碟片快速断开触点。',
                        '当装置冷却到安全工作温度时，触点又能自动闭合，恢复通电。'
                    ]
                },
                good: {
                    title: '优点',
                    text: [
                        '美国德州仪器公司成立的森萨塔科技工厂生产的著名品牌KLIXON ®传感器和控制器已有九十多年的历史，品种最齐全、 产量最大、品质顶级 、价廉质优，质量具有信用保障。（产品在亚洲、欧洲和美国有制造工厂和研究开发中心）',
                        'TH10温度开关作为敏感的电源断路器非常适用于：吹风机、暖风机、对流式取暖器、变压器、干手机，以及各种其它应用',
                        '大电流容量 18A / 125 V-- AC , 3万次寿命。',
                        '安装灵活:可提供 3种连接端子配置',
                        '全自动运转: 设置值稳定、 快速热反应',
                        '稳固设计：金属支撑对双金属碟片提供保护',
                        'KLIXON ®双金属碟片100% 具有快速跳脱性；',
                        '最高环境温度：200℃以上',
                        '裸露式双金属碟片，体积小型化的设计；',
                        '通过各国安全认证：UL、CSA、VDE、ENEC（欧盟）、KEMA、CQC …证书 ；严格执行欧洲的ROHS环保标准。 …证书 ；严格执行欧洲的ROHS环保标准。'
                    ]
                },
                technique: {
                    title: '技术参数',
                    text: [
                        '动作温度：60℃ ~170℃（每 5℃一个规格）',
                        '动作温度公差：±5℃',
                        '开关状态：常闭，自动复位',
                        '外形尺寸（高× 宽 ×长）：6. 8× 5. 9 ×31.5 mm'
                    ],
                    table: {
                        thead: ['电气容量', '动作寿命'],
                        tbody: [
                            ['13 A / 250 V ac', '30,000次 (3万次）'],
                            ['18 A / 120 V ac', '30,000次 (3万次）']
                        ]
                    }
                },
                range: {
                    title: '应用范围',
                    text: [
                        '取暖器...',
                        '电吹风...',
                        '烘干器',
                        '变压器、电缆转轴机...',
                        '发热电器、仪器、仪表、用家电器...'
                    ]
                },
                temperature: {
                    title: 'TH10 编号与工作温度对照表',
                    table: {
                        thead: ['编号', '跳脱温度'],
                        tbody: [
                            ['TH10-AA-056', '60℃'],
                            ['TH10-AA-056', '60℃'],
                            ['TH10-AA-056', '60℃']
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
