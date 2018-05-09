<template>
    <div>
        <p class="normal-title">{{origin.title}}</p>
        <ul class="normal-ul" v-if='origin.text'>
            <li v-for="item in origin.text">{{item}}</li>
        </ul>
        <ltTable v-if="origin.table" :tableData="origin.table"></ltTable>
    </div>
</template>

<script>
import ltTable from './table';
export default {
    name: 'normalUl',
    props: ['origin'],
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        ltTable
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.normal-title{
    font-size: 36px;
    color: #666;
    padding: 17px 0 17px 6px;
    font-weight: normal;
}
.normal-ul{
    font-size: 15px;
}
.normal-ul li{
    list-style: none;
    font-size: 16px;
    line-height: 22px;
}
.normal-ul li:before{
    width: 6px;
    height: 6px;
    display: inline-block;
    content: '';
    border-radius: 3px;
    background: #000;
    margin-right: 10px;
    vertical-align: middle;
}
</style>
