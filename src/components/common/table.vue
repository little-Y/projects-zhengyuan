<template>
    <div class="table-box">
        <table>
            <thead>
                <tr>
                    <th :class="tablewidth" v-for="item in tableData.thead">{{item}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tableData.tbody">
                    <td v-for="val in item">{{val}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ltTable',
    props: ['tableData'],
    data () {
        return {
            tablewidth: ''
        }
    },
    mounted () {
        this.tablewidth = 'th' + this.tableData.thead.length;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-box{
    padding: 10px 30px;
}
thead{
    font-size: 18px;
}
.th2{
    width: 50%;
}
.th3{
    width: 30%;
}
td{
    font-size: 15px;
    line-height: 20px;
    text-align: center;
}
</style>
