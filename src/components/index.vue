
<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" :theme="theme1" active-name="home" @on-select="goMenu">
                  <MenuItem name="home">
                      <Icon type="ios-paper"></Icon>
                      首页
                  </MenuItem>
                  <MenuItem name="self">
                      <Icon type="ios-people"></Icon>
                      关于我们
                  </MenuItem>
                  <MenuItem name="product">
                      <div class="lt-sub-menue-box" @mouseenter="showMenu = true" @mouseleave="showMenu = false; showThirdMenu = false">相关产品
                          <div class="lt-sub-menue" v-if="showMenu">
                              <ul>
                                  <li v-for='item in menuData' @click="goMenu(item.router)" @mouseenter="choosefir(item.type)">{{item.name}}</li>
                              </ul>
                              <ul v-show="showThirdMenu && showMenu && subMenu.length">
                                  <li v-for="item in subMenu" @click="goMenu(item.router)">{{item.name}}</li>
                              </ul>
                          </div>
                      </div>
                  </MenuItem>
                  <MenuItem name="home">
                      <Icon type="settings"></Icon>
                      联系我们
                  </MenuItem>
              </Menu>
            </Header>
            <Content :style="{margin: '88px auto 0', background: '#fff', minHeight: '500px'}">
                <router-view/>
            </Content>

            <Footer class="layout-footer-center">
                友情链接</br>
                淘宝：shzysygs.taobao.com</br>
                阿里巴巴： shzysygs.1688.com
            </Footer>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data () {
            return {
                theme1: 'dark',
                showMenu: false,
                showThirdMenu: false,
                // 自定义数据
                menuData: [
                    {'name': '小型热保护器', 'router': 'small', type: 'small'},
                    {'name': '过温过电流保护器', 'router': 'overElectic', type: 'overElectic'},
                    {'name': '突跳式温控开关', 'router': 'temperature', type: 'temperature'},
                    {'name': '开放式保护器', 'router': 'open', type: 'open'},
                    {'name': '汽车直流保护器', 'router': 'car', type: 'car'}
                ],
                allList: {
                    small: [
                        {'router': '2MM', name: '2MM'},
                        {'router': '9700K', name: '9700K'},
                        {'router': '17AM', name: '17AM'},
                        {'router': '17AM2', name: '17AM-2'},
                        {'router': '7AMSH', name: '7AMSH'},
                        {'router': '8CM', name: '8CM'},
                        {'router': '15AM', name: '15AM'},
                        {'router': '6AM', name: '6AM'},
                        {'router': '7AM', name: '7AM'},
                        {'router': 'YS11', name: 'YS11'},
                        {'router': 'YS7', name: 'YS7'}
                    ],
                    overElectic: [
                        {'router': 'HM14', name: '14HM'},
                        {'router': 'HM15', name: '15HM'},
                        {'router': 'AM2', name: '2AM'},
                        {'router': 'MP2', name: '2MP'},
                        {'router': 'HM34', name: '34HM'},
                        {'router': 'HM35', name: '35HM'},
                        {'router': 'HM37', name: '37HM'},
                        {'router': 'HM3', name: '3HM'},
                        {'router': 'MP3', name: '3MP'},
                        {'router': 'AM8', name: '8AM'},
                        {'router': 'PTC', name: '3MP+PTC'},
                        {'router': 'SINGLE', name: '单相/三相外置式'},
                    ],
                    temperature: [
                        {'router': '1NT', name: '1NT'}
                    ],
                    open: [
                        {'router': 'MA10', name: 'MA10'},
                        {'router': 'YS10', name: 'YS10'},
                        {'router': 'TH10', name: 'TH10'},
                        {'router': 'TH11', name: 'TH11/TH21'}
                    ],
                    car: [
                        {'router': '5AP', name: '5AP'},
                        {'router': '6AP', name: '6AP'},
                        {'router': 'EXT200', name: 'EXT200'},
                        {'router': 'EXT300', name: 'EXT300'},
                        {'router': 'EXT500', name: 'EXT500'},
                        {'router': 'MXA1', name: 'MXA1'},
                        {'router': 'SMB', name: 'SMB'}
                    ]
                },
                subMenu: []
            }
        },
        mounted () {},
        methods: {
            choosefir (type) {
                this.subMenu = this.allList[type];
                this.showThirdMenu = true;
            },
            goMenu (subpath) {
                if (subpath == 'product') {
                    console.log(subpath);
                } else {
                    this.$router.push({name: subpath})
                }
            }
        }
    }
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
    /* 重置的样式 */
    .ivu-layout-header{
        z-index: 1000;
    }
    .ivu-layout{
        background: #fff;
    }
    .ivu-layout-content{
        width: 85%
    }
    /* 二级联动菜单 */
    .lt-sub-menue-box{
        position: relative;
    }
    .lt-sub-menue{
        position: absolute;
        z-index: 500;
        /*background: #48D1CC;*/
        display: flex;
        /*padding: 10px;*/
    }
    .lt-sub-menue ul{
        min-width: 180px;
    }
    .lt-sub-menue ul li{
        background: #48D1CC;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        list-style: none;
    }
    .lt-sub-menue ul li:hover{
        background: #40E0D0;
    }
</style>
