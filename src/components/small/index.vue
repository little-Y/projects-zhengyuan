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
    name: 'Small',
    data () {
        return {
            smallData: [
                {name: '2MM', router: '2MM', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '6AM', router: '6AM', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '15AM', router: '15AM', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '7AM', router: '7AM', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '7AMSH', router: '7AMSH', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '17AM', router: '17AM', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '17AM-2', router: '17AM2', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: 'YS7', router: 'YS7', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '9700K', router: '9700K', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: 'YS11', router: 'YS11', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '8CM', router: '8CM', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'}
            ],
            titleData: {name: '小型热保护器', tip: '小型热保护器是用于处理啊三等奖啊肯定是减肥啊点看风景的离开'}
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
