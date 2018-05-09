<template>
    <div>
        <p class="normal-title">{{origin.title}}</p>
        <p class="normal-text">{{origin.text}}</p>
    </div>
</template>

<script>
export default {
    name: 'normal',
    props: ['origin'],
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
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
.normal-text{
    font-size: 16px;
    line-height: 22px;
}

</style>
