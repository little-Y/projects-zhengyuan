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
                    text: 'TH11自持式温度开关， 其开放式结构实现了最佳热反应。当过热跳脱后，只有切断电源后才能复位接通。具有断电保护、延时保护功能 。是美国德州仪器KLIXON ® 专有技术生产的。'
                },
                principle: {
                    title: '工作原理',
                    text: [
                        'TH11温度开关与其内的R电阻器形成并联电路，然后与负载串联，负载正常运行时R电阻不会产生高温。',
                        '当负载异常时产生的高温会使TH11温度开关断路，此时R电阻器会产生高温及高阻值（ R电阻器的高温会使TH11温度开关一直保持于断路状态），负载停止运行。',
                        '当电源被手动断开后，R电阻器开始降温，经过一定时间降温后TH11温度开关自动复位，再次接通电源，负载运行。'
                    ]
                },
                good: {
                    title: '优点',
                    text: [
                        '美国德州仪器公司成立的森萨塔科技工厂生产的著名品牌KLIXON ®传感器和控制器已有九十多年的历史，品种最齐全、 产量最大、品质顶级 、价廉质优，质量具有信用保障。（产品在亚洲、欧洲和美国有制造工厂和研究开发中心）',
                        'TH11温度开关自持式热断路器是一种可为大电流应用提供保护的非自动复位型装置，能够充分满足客户对更高安全等级日益增长的需求。',
                        'TH11和TH21温度开关，适合以下应用: 暖风机、对流式取暖器、吹风机。此外，TH11和TH21还适合各种需要非自动复位保护器的应用，如变压器、电缆转轴机等',
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
                        '动作温度范围：TH11系列60℃ ~150℃ （每 5℃一个规格）TH21系列60℃ ~130℃ （每 5℃一个规格）',
                        '动作温度公差：±5℃',
                        '开关状态：常闭，自动复位',
                        '产品尺寸（高× 宽 ×长）：6. 8× 5. 9 ×31.5 mm'
                    ],
                    table: {
                        thead: ['系列', '电气容量', '动作寿命'],
                        tbody: [
                            ['TH 11系列', '13 A / 250 V ac', '30,000次 (3万次）'],
                            ['TH 21系列', '18 A / 120 V ac', '30,000次 (3万次）']
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
                    title: '编号与工作温度对照表',
                    table: {
                        thead: ['编号', '跳脱温度'],
                        tbody: [
                            ['TH11/TH21-CA-031', '60℃'],
                            ['TH11/TH21-CA-031', '60℃'],
                            ['TH11/TH21-CA-031', '60℃']
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
