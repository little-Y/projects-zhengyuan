<template>
    <div class="lt-container">
        <div class="self-box">
            <normalUl :origin="originData.feture"></normalUl>
            <normal :origin="originData.principle"></normal>
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
    name: 'NT1',
    data () {
        return {
            originData: {
                feture: {
                    title: '特性',
                    text: [
                        '1NT系列突跳式温控开关是美国德州仪器KLIXON ®专有技术设计，是非常先进的以至于它使其他所有同类产品成为过时的产品 ，为了现代化的技术性能你需要这种高可靠性的温度开关',
                        '1NT系列突跳式温控开关是一种对温度敏感的电器保护元件，核心是KLIXON ®突跳式双金属碟片。',
                        '当装置冷却到安全工作温度时，触点又能自动闭合，恢复通电。'
                    ]
                },
                principle: {
                    title: '工作原理',
                    text: '采用一体式传动单闸双接触点的100%导通结构，当外界温度过高时，传递到经校正过的 双金属片便迅速动作，这样切断了电器通路，当温度下降到复位温度时，双金属片又迅速闭合，使品质长期稳定。'
                },
                good: {
                    title: '优点',
                    text: [
                        '1NT系列突跳式温控开关工作温度性能固定，耐高温、产品精度高、稳定性好、同步性好',
                        '动作可靠干脆，不拉弧，无线电干涉少',
                        '自动、手动复位',
                        '最大触点容量：自动复位17A / 250 V- AC. 手动复位 25A / 250V- AC',
                        '小体积：（直径Φ）15 mm（选择温度跳脱范围：-40℃ ~ 240℃ ±3. 5℃）',
                        '可依客户的需求配有各种连接端子和安装结构，使得产品的设计不受任何限制',
                        '广泛用于各种电器的控温装置',
                        'KLIXON ®双金属片具有100%快速跳脱',
                        '通过各国安全认证：UL、CSA、VDE、ENEC（欧盟）、KEMA、CQC …证书 ；严格执行欧洲的ROHS环保标准。'
                    ]
                },
                technique: {
                    title: '技术参数',
                    text: [
                        '动作温度范围：- 40℃ ~240℃',
                        '动作温度公差：±3℃',
                        '开关状态：常闭或常开，自动复位或手动复位'
                    ],
                    table: {
                        thead: ['电气容量', '动作寿命'],
                        tbody: [
                            ['10A / 250 V-- AC', '10,000次 (1万次）'],
                            ['17A / 250 V--AC (根据需要）', '310,000次 (1万次）'],
                            ['25A / 250 V-- AC ( 手动复位', '10,000次 (1万次）']
                        ]
                    }
                },
                range: {
                    title: '应用范围',
                    text: [
                        '咖啡 、饮水、煮茶机、蒸汽机',
                        '仪器、仪表散热设备',
                        '电器设备的过热保护',
                        '暖风机、吸尘器',
                        '微波炉、电饭煲、燃气炉'
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
