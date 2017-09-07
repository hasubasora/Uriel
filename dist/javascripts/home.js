window.onload = function(params) {
    // const applys = Vue.component('applys', {
    //     template: '#applys', //用什么模板来渲染他
    //     data() {
    //         return {
    //             appList: [{
    //                 name: '进销存'
    //             }, {
    //                 name: 'ERP'
    //             }, {
    //                 name: '建站'
    //             }, {
    //                 name: '渠道交易'
    //             }]
    //         }
    //     },
    // })
    const UserHome = Vue.component('UserHome', {
        template: '#UserHome', //用什么模板来渲染他
    });
    const UserProfile = Vue.component('UserProfile', {
        template: '#UserProfile', //用什么模板来渲染他
        data() {
            return {
                appList: [{
                    name: '进销存',
                    urls: '/'
                }, {
                    name: 'ERP'
                }, {
                    name: '建站'
                }, {
                    name: '渠道交易'
                }]
            }
        },
    })
    const routes = [{
            path: '/UserProfile',
            component: UserProfile,
        },
        {
            path: '/UserHome',
            component: UserHome,
        }, { path: '/', redirect: '/UserProfile' } //404
    ]
    const router = new VueRouter({
        // mode: 'history',
        routes, // （缩写）相当于 routes: routes
        linkActiveClass: 'linkActive', //激活后的连接颜色Class

    })
    const app = new Vue({
        el: '#container',
        router,
        data() {
            return {
                apply: [{
                    name: '应用',
                    url: "/UserProfile"
                }, {
                    name: '其他',
                    url: "/UserHome"
                }],
                compName: [{
                    companyName: '好长好长的公司名啊',
                    accountSn: '111111'
                }, {
                    companyName: '好长好长的公司名啊1',
                    accountSn: '111111'
                }]
            }
        },
        mounted() {
            this.switchComp();
        },
        methods: {
            switchComp() {
                alert('监听路由变化')
            }
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            "$route": "switchComp"
        }
    })

}