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
    name: 'Open',
    data () {
        return {
            smallData: [
                {name: '5AP', router: '5AP', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '6AP', router: '6AP', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: 'EXT200', router: 'EXT200', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: 'EXT300', router: 'EXT300', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: 'EXT500', router: 'EXT500', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: 'MXA1', router: 'MXA1', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: 'SMB', router: 'SMB', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'}
            ],
            titleData: {name: '汽车直流保护器', tip: '汽车直流保护器是用于处理啊三等奖啊肯定是减肥啊点看风景的离开'}
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
