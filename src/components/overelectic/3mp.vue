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
    name: 'MP3',
    data () {
        return {
            originData: {
                feture: {
                    title: '特性',
                    text: '3MP 电流温度双重保护器是一款同时具有过流、感温双重保护功能的保护元件。它能够精确控制电机堵转或电流过量对电机的损伤。是美国德州仪器KLIXON ®专有技术生产的。'
                },
                principle: {
                    title: '工作原理',
                    text: [
                        '电流过载保护原理: 3MP热保护器的KLIXON®双金属片与发热丝集成串联在一起，具有精确控制过载电流脱扣时间的作用。当(电机、变压器…等)发生电流过大或堵转电流超过热保护器设定的跳脱值时，保护器能设置在4 ~10秒内切断电路，使电器得到保护。（额定脱扣电流：3A ~30A）',
                        '温度保护原理: 3MP热保护器能够精确控制电器温度。电流通过KLIXON ®双金属簧片，当电器不能正常工作，使周围的温度过高时，热保护器的双金属簧片断开银触点，使电器得到保护。当热保护器冷却到安全温度时，触点自动闭合复位。（跳脱温度选择范围：80℃ ~170℃）',
                    ]
                },
                good: {
                    title: '优点',
                    text: [
                        '美国德州仪器公司成立的森萨塔科技工厂生产的著名品牌KLIXON®传感器和控制器已有九十多年的历史，品种最齐全、 产量最大、品质顶级 、价廉质优，质量具有信用保障。（产品在亚洲、欧洲和美国有制造工厂和研究开发中心）',
                        '工厂拥有先进的动能实验 室，能根据客户的电机…等性能，为客户提供最佳的 3MP热保护器样品选择和应用的测试服务，并可按要求提供测试报告 。',
                        '3MP热保护器适用于125V 和 250V 交流电机或变压器等在过载、堵转、或短路过流情况下的保护。可按客户要求，设定过载跳脱电流值，最高可达40 A（安培）.',
                        '按客户要求定制引出线的规格。',
                        '通过国 际安全认证：UL、CSA、VDE、ENEC（欧盟）、KEMA、CQC …证书 , 及符合欧盟 ROHS环保要求。'
                    ]
                },
                technique: {
                    title: '技术参数',
                    text: [
                        '动作温度范围：80℃ ~170℃（以5℃为单位）',
                        '动作温度公差：±5℃',
                        '开关状态：常闭，自动复位',
                        '外形尺寸 (厚×宽×长)：3. 7 × 9. 3× 23mm'
                    ],
                    table: {
                        thead: ['类型', '项值'],
                        tbody: [
                            ['额定电压', '115 V /240V- AC'],
                            ['额定脱扣电流', '3A ~30A'],
                            ['脱扣时间设置范围', '4 ~ 10s 秒']
                        ]
                    }
                },
                range: {
                    title: '应用范围',
                    text: [
                        '各种电机 、电容起动马达、潜水泵、高压清洗机...',
                        '豆浆机、果汁机、料理机、 ...',
                        '吸尘器、洗衣机、粉碎机、',
                        '电动工具、扫雪机、搅拌机、割草机、园林设备',
                        '分相马达、汽车马达 ....',
                        '洗衣机、吸尘器、镇流器、变压器 ...',
                        '变压器、家用电器、发热元件....应用范围广泛。'
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
