<template>
    <div class="lt-card" @click="showDetail">
        <img :src="origin.img">
        <p>{{origin.name}}</p>
    </div>
</template>

<script>
export default {
    name: 'card',
    data () {
            return {};
        },
    props: ['origin'],
    methods: {
        showDetail () {
            this.$router.push({name: this.origin.router});
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import '../../assets/css/common.css';
.lt-card{
    width: 33.3333%;
    padding: 5px;
    float: left;
    cursor: pointer;
}
.lt-card img{
    width: 100%;
}
.lt-card p{
    text-align: center;
    font-size: 15px;
    color: #333;
    font-weight: bold;
}

</style>
