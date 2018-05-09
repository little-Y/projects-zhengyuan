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
    name: 'OverElectic',
    data () {
        return {
            smallData: [
                {name: '14HM', router: 'HM14', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '15HM', router: 'HM15', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '2AM', router: 'AM2', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '2MP', router: 'MP2', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '34HM', router: 'HM34', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '35HM', router: 'HM35', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '37HM', router: 'HM37', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '3HM', router: 'HM3', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '3MP', router: 'MP3', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '8AM', router: 'AM8', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '3MP+PTC', router: 'PTC', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'},
                {name: '单相/三相外置式', router: 'SINGLE', img: 'http://www.icfly.net/wp-content/uploads/2017/12/KLK-6amabgUIO.jpg'}
            ],
            titleData: {name: '过温过电流保护器', tip: '过温过电流保护器是用于处理啊三等奖啊肯定是减肥啊点看风景的离开'}
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
