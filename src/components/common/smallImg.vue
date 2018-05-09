<template>
    <div @mouseenter="showTitle = true" @mouseleave="showTitle = false">
        <p class="hide-modal" @click="goRouter" v-show="showTitle"></p>
        <p class="text" @click="goRouter" v-show="showTitle">{{origin.name}}</p>
        <img :src="origin.img">
    </div>
</template>

<script>
export default {
    name: 'smallIimg',
    data () {
            return {
                showTitle: false
            };
        },
    props: ['origin'],
    methods: {
        goRouter () {
            this.$router.push({name: this.origin.router});
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-list div{
    width: 30%;
    display: inline-block;
    padding: 5px;
    position: relative;
}
.product-list div img{
  width: 100%;
}
.product-list div .text{
    position: absolute;
    z-index: 20;
    top: 75%;
    font-size: 20px;
    color: #fff;
    text-align: center;
    width: 97%;
    cursor: pointer;
}
.hide-modal{
    position: absolute;
    color: #fff;
    width: 97%;
    height: 94%;
    background: black;
    opacity: 0.3;
    z-index: 10;
    cursor: pointer;
}

</style>
