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
    name: 'HM34',
    data () {
        return {
            originData: {
                feture: {
                    title: '特性',
                    text: '34HM系列 三相电机热保护器 是美国德州仪器KLIXON ®专有技术生产，具有同时精确控制温度和电流过载的保护元件，可以保护三相电动机不受过热造成的损坏，(这些状态包括: 缺相，转子锁住，插头功率，失速或起动失败，大功率过载，环境温度高和无法通风。）具备非常精确的跳闸时间，性能可靠，自动复位。'
                },
                principle: {
                    title: '工作原理',
                    text: [
                        '温度保护原理: 34HM系列三相电机热保护器 能紧密直接安装在电机绕组上，当电机不正常工作，使周围（线圈绕组）温度过高时，热保护器的KLIXON ®双金属簧片断开3个银触点，使电机得到保护。当热保护器冷却到安全温度时，触点自动闭合复位，电动机重新起动。（跳脱温度选择范围：100℃~180℃',
                        '准确的电流过载保护原理: 34HM系列 三相电机热保护器 三个电阻发热丝与双金属片匹配在一起 ，具有精确控制过载电流跳脱时间的作用。当三相电机发生（缺相，转子锁住，插头功率，失速或起动失败...等），使电流过大或堵转电流超过热保护器设定的跳脱值时，保护器能在4 ~10秒内切断电路，使电器得到保护。（过载电流跳脱值选择范围：3 A 至105A）',
                    ]
                },
                good: {
                    title: '优点',
                    text: [
                        'KLIXON ® 是全球生产传感器和控制器品种最齐全、产量最大的国际著名品牌，对产品质量具有信用保障。',
                        '34HM系列 三相热保护器 可同时对（电流和温度）变化均非常敏感,具有高度的设计灵活性',
                        '34HM系列的设计可以保护电动机不受过热造成的损坏，这些状态包括:缺相，转子锁住，插头功率，失速或起动失败，大功率过载，环境温度高和无法通风。具备非常精确的跳闸时间',
                        '34HM系列内藏式密闭设计，包括电阻发热丝和KLIXON ®双金属片，3个银触点。精确控制过载电流 和温度，最高可达 105 A（安培），保护 Y型连接线圈的任何三相电动机，如：压缩机电机、潜水泵....',
                        '可以用于保护 1-6HP星型绕组的通用电动机，商用和工业电动机。',
                        '34HM系列设计通过简单紧凑经济的外形有效的降低安装成本 。',
                        '通过国 际安全认证：UL、CSA、VDE、ENEC（欧盟）、KEMA、CQC …证书 , 及符合欧盟 ROHS环保要求。'
                    ]
                },
                technique: {
                    title: '技术参数',
                    text: [
                        '动作温度范围：95℃ ~175℃（以5℃为单位）',
                        '动作温度公差：±5℃',
                        '额定压力：1600PSIG 110bar',
                        '动作时间：4 ~ 10s 秒',
                        '动作寿命：5,000次',
                        '开关状态：常闭，自动复位',
                        '外形结构：密闭设计'
                    ],
                    table: {
                        thead: ['额定电压AC', '过载电流跳脱值选择范围'],
                        tbody: [
                            ['230V / 460V / 575V', '3 ~ 105A']
                        ]
                    }
                },
                range: {
                    title: '应用范围',
                    text: [
                        '适用于1-6HP星型绕组的三相电机。',
                        '潜水泵、潜油泵',
                        '制冷压缩机、'
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
