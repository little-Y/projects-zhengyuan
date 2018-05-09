<template>
    <div class="lt-container">
        <div class="self-box">
            <normal :origin="originData.feture"></normal>
            <normalUl :origin="originData.principle"></normalUl>
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
    name: 'HM14',
    data () {
        return {
            originData: {
                feture: {
                    title: '特性',
                    text: '14HM 密闭式热保护器，玻璃封口头部与钢制外壳焊接，确保密封。可用于高压腐蚀性环境中工作的商用电机，是美国德州仪器KLIXON ® 技术生产，适用于，如：各种电机、潜水泵 、制冷压缩机...等。'
                },
                principle: {
                    title: '工作原理',
                    text: [
                        '温度保护原理:14HM热保护器 能够精确控制电器温度。电流通过KLIXON ®双金属簧片，当电器不能正常工作，使周围的温度过高时，热保护器的双金属簧片断开银触点，使电器得到保护。当热保护器冷却到安全温度时，触点自动闭合复位。（跳脱温度选择范围：90℃ ~175℃）',
                        '大电流过载保护原理:14HM 热保护器 中的辅助加热片与双金属片匹配在一起。具有精确控制过载电流跳脱时间的作用。当电机处于电流过大或堵转电流超过热保护器设定的跳脱值时，保护器能瞬间切断电路，使电器得到保护。 （电流过载跳脱值设计范围：3A ~50A）',
                    ]
                },
                good: {
                    title: '优点',
                    text: [
                        '美国德州仪器公司成立的森萨塔科技工厂生产的著名品牌KLIXON ®传感器和控制器已有九十多年的历史，品种最齐全、 产量最大、品质顶级 、价廉质优，质量具有信用保障。（产品在亚洲、欧洲和美国有制造工厂和研究开发中心）',
                        '工厂拥有先进的动能实验室，能根据客户的电机…等性能，为客户提供最佳的8AM热保护器样品选择和应用的测试服务，并可按要求提供测试报告 。',
                        '14HM热保护器适用于125V 和 250V 交流电机或变压器等在过载、堵转、或短路过流情况下的保护。可按客户要求，设定过载跳脱电流值，最高可达60 A（安培）',
                        '14HM热保护器的密闭式结构 ，适用 如：潜水泵电机、潜油泵 、制冷压缩机.....等。( 可真空浸漆）',
                        '具备有同时感应电流及温度而动作之双重保护性能；',
                        '通过各国安全认证：UL、CSA、VDE、ENEC（欧盟）、KEMA、CQC …证书 , 及符合欧盟 ROHS环保要求'
                    ]
                },
                technique: {
                    title: '技术参数',
                    text: [
                        '动作温度系列：90℃ ~175℃ （每 5℃一个规格）',
                        '动作温度公差：±5℃',
                        '开关状态：常闭，自动复位',
                        '外形尺寸（高×宽×长 ）：7. 0 ×10× 20 mm',
                        '外形结构：密闭式(可真空浸漆）'
                    ],
                    table: {
                        thead: ['类别', '项值'],
                        tbody: [
                            ['额定电压', '  125 V /240V- AC'],
                            ['电流跳脱值设计范围（按用户要求设计）', '3A ~50A'],
                            ['跳脱时间', '4 ~ 10s 秒']
                        ]
                    }
                },
                range: {
                    title: '应用范围',
                    text: [
                        '电动工具、搅拌机、潜水泵、高压清洗机 ...',
                        '分相马达、电容起动马达、汽车马达 ....',
                        '洗衣机、吸尘器、镇流器、变压器 ...',
                        '还有更多广泛.应用。'
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
