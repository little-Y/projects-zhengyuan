<template>
    <div>
        <p class="title">{{origin.name}}</p>
        <p class="lt-center subtitle lt-top-middle">{{origin.tip}}</p>
    </div>
</template>

<script>
export default {
    name: 'listTitle',
    data () {
            return {};
        },
    props: ['origin'],
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/css/common.css';
.title{
    text-align: center;
    font-size: 20px;
    color: #5DD28F;
}

</style>
