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
    name: 'AP5',
    data () {
        return {
            originData: {
                feture: {
                    title: '特性',
                    text: [
                        '5AP（车用 ）电机保护器是一种电流温度型的, 能对汽车直流电机（车窗电机、雨刷、调节器...等） 在处于电流过载、堵转时，提供精确跳闸时间的过载保护元件。是美国德州仪器KLIXON ®专有技术生产的。',
                        '5AP (车用)直流电机保护器中的电阻发热丝与KLIXON ®双金属片匹配在一起 ，具有准确控制过载电流跳脱时间的作用。 当车用电机（车窗电机、雨刷、调节器...等） 发生电流过载、堵转 ，电流超过保护器所设定的跳脱值时，保护器能在4 ~10秒内切断电路，使电机得到保护',
                        '过载电流跳脱值设计范围2A~20A，工作电压 15Vdc'
                    ]
                },
                good: {
                    title: '优点',
                    text: [
                        '美国德州仪器公司成立的森萨塔科技工厂生产的KLIXON ® 品牌传感器与控制器。此著名品牌已有九十多年的历史，生产传感器和控制器品种最齐全、 产量最大、品质顶级 、价廉质优，质量具有信用保障。（产品在亚洲、欧洲和美国有制造工厂和研究开发中心）',
                        '5AP热保护器具有超小体积、和小电流过载控制的特点',
                        '德州仪器开发的 5AP系列能在各种温度和电流情况下运行，具有稳定的工作特性和绝佳的可靠性。',
                        '小尺寸的 5AP系列能安装到绕组内或绕组外，使电机生产商的生产过程更灵活.',
                        '5AP电机保护器 由全自动设备生产，产品可定制的设计能够充分满足当今汽车工业的各种需要。',
                        '我们有动能实验室对客户的电机提供保护器选择和应用的测试服务,并可按要求提供测试报告',
                        '5AP直流电机保护器，我们使用CAD设计技术和6-Sigma生产线控制，以及最好的质量控制体系，使这个产品具有最大的安全性和可靠性。',
                        'KLIXON ® 双金属碟片和电阻发热丝的独特组合可确保非常精准的跳闸时间,以防止马达温度过高',
                        '在堵转、过载、过流情况下保护 15V-DC 直流马达，自动复位'
                    ]
                },
                technique: {
                    title: '技术参数',
                    text: [
                        '动作温度：- 40℃ ~240℃',
                        '动作温度公差：±5℃',
                        '开关状态：常闭，自动复位',
                        '产品尺寸（厚x宽x 长）：2.8 × 9× 16 mm',
                        '动作时间：4~10秒（取决于电流水平）'
                    ],
                    table: {
                        thead: ['触点容量', '寿命'],
                        tbody: [
                            ['15V / 27A --DC', '30,000次 (3万次）']
                        ]
                    }
                },
                range: {
                    title: '应用范围',
                    text: [
                        '车窗马达、天窗马达',
                        '雨刷发动机、滑门发动机',
                        '调节器发动机、天线马达',
                        '门锁触发器',
                        '还有更多'
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
