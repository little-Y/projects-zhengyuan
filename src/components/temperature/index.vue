<template>
    <div class="lt-container">
        <div class="self-box">
            <listTitle :origin="titleData"></listTitle>

            <div class="product-list lt-top-middle">
                <card :origin="item" v-for="item in smallData"></card>
            </div>
        </div>
        <div class="slide-box">
            <Slide></Slide>
        </div>  
    </div>
</template>

<script>
import Slide from '../slideBar.vue';
import card from '../common/card.vue';
import listTitle from '../common/title.vue';
export default {
    name: 'Temperature',
    data () {
        return {
            smallData: [
                {name: '1NT', router: '1NT', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'}
            ],
            titleData: {name: '突跳式温控开关', tip: '突跳式温控开关是用于处理啊三等奖啊肯定是减肥啊点看风景的离开'}
        }
    },
    components: {
        Slide,
        card,
        listTitle
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/css/common.css';

</style>
