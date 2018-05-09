<template>
    <div class="lt-container">
        <div class="self-box">
            <normalUl :origin="originData.feture"></normalUl>
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
    name: 'SINGLE',
    data () {
        return {
            originData: {
                feture: {
                    title: '特性',
                    text: [
                        '单相/三相外置式电流过载保护器（ 有断电复位功能）',
                        '单相/三相外置式电流过载保护器自持功能：当过载跳脱后，切断电源后才能 自动接通。',
                        '具有延时保护功能。是美国德州仪器KLIXON ® 专有技术生产的。'
                    ]
                },
                principle: {
                    title: '工作原理',
                    text: [
                        '单相/三相外置式电流过载保护器与PTC形成并联电路，然后与负载（马达）串联，负载正常运行时PTC不会产生高温。',
                        '大电流过载保护原理:8AM热保护器中的辅助发热 丝与双金属片匹配在一起。具有精确控制过载电流跳脱时间的作用。当（电机、变压器...）处于电流过大或堵转电流超过热保护器设定的跳脱值时，保护器能瞬间切断电路，使电器得到保护。 （电流过载跳脱值设计范围：3A ~80A）',
                        '当电源被手动断开后，PTC开始降温，经过一定时间降温后单相/三相外置式电流过载保护器 触点复位，再次接通电源，负载运转。'
                    ]
                },
                good: {
                    title: '优点',
                    text: [
                        '美国德州仪器公司成立的森萨塔科技工厂生产的KLIXON ® 品牌传感器与控制器。此著名品牌已有九十多年的历史，生产传感器和控制器品种最齐全、 产量最大、品质顶级 、价廉质优，质量具有信用保障。（产品在亚洲、欧洲和美国有制造工厂和研究开发中心）',
                        '工厂拥有先进的动能实验室，能根据客户的电机…等性能，为客户提供最佳的 单相/三相外置式电流过载保护器样品选择和应用的测试服务，并可按要求提供测试报告 。',
                        '单相/三相外置式电流过载保护器适用于125V 和 250V 交流电机或变压器等在过载、堵转、或短路过流情况下的保护。可按客户要求，设定过载跳脱电流值，最高可达30 A（安培）.',
                        '具有断电保护、延时保护功能',
                        '为有转动件的设备提供更高级别的保护；',
                        '更适合于电机的异常保护。',
                        '通过各国安全认证：UL、CSA、VDE、ENEC（欧盟）、KEMA、CQC …证书 , 及符合欧盟 ROHS环保要求。'
                    ]
                },
                technique: {
                    title: '技术参数',
                    text: [
                        '动作温度范围：80℃ ~170℃（以5℃为单位）',
                        '开关状态：常闭，动作后切断电源后才能复位',
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
                        '吸尘器、搅拌机、粉碎机、割草机 ...',
                        '电动工具、扫雪机、泵 ...',
                        '洗衣机、家用电器、发热元件、..应用范围广泛。'
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
