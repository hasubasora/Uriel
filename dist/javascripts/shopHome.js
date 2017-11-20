window.onload = function(params) {
    const shopPage = Vue.component('shopPage', {
        template: '#shopPage', //用什么模板来渲染他
        data() {
            return {
                leftList: [{
                    title: '店铺',
                    titleLists: [{
                        tit: '店铺管理',
                        url: 'xxx'
                    }]
                }, {
                    title: '商品管理',
                    titleLists: [{
                        tit: '店铺商品列表',
                        url: 'xxx'
                    }, {
                        tit: '商品分类管理',
                        url: 'xxx'
                    }, {
                        tit: '商品标签管理',
                        url: 'xxx'
                    }]
                }]
            }
        }
    });
    const goodsListPage = Vue.component('goodsListPage', {
        template: '#goodsListPage', //用什么模板来渲染他
    });
    const shopHomePage = Vue.component('shopHomePage', {
        template: '#shopHomePage', //用什么模板来渲染他
        data() {
            return {
                shopList: [{
                    logoUrl: '',
                    shopName: '广州市第一人民医院',
                    toShopUrl: '/',
                    ter: [{
                        tit: '订单金额',
                        pic: '22222'
                    }, {
                        tit: '订单数量',
                        pic: '22222'
                    }, {
                        tit: '商品数量',
                        pic: '22222'
                    }]
                }, {
                    logoUrl: '',
                    shopName: '广州市第一人民医院2',
                    toShopUrl: '/',
                    ter: [{
                        tit: '订单金额',
                        pic: '22222'
                    }, {
                        tit: '订单数量',
                        pic: '22222'
                    }, {
                        tit: '商品数量',
                        pic: '22222'
                    }]
                }, {
                    logoUrl: '',
                    shopName: '广州市第一人民医院3',
                    toShopUrl: '/',
                    ter: [{
                        tit: '订单金额',
                        pic: '22222'
                    }, {
                        tit: '订单数量',
                        pic: '22222'
                    }, {
                        tit: '商品数量',
                        pic: '22222'
                    }]
                }, {
                    logoUrl: '',
                    shopName: '广州市第一人民医院',
                    toShopUrl: '/',
                    ter: [{
                        tit: '订单金额',
                        pic: '22222'
                    }, {
                        tit: '订单数量',
                        pic: '22222'
                    }, {
                        tit: '商品数量',
                        pic: '22222'
                    }]
                }, ]
            }
        },
    })
    const categoryList = Vue.component('categoryList', {
        template: '#categoryList', //用什么模板来渲染他
    });

    const routes = [{
            path: '/shopHomePage',
            component: shopHomePage,
        },
        {
            path: '/goodsListPage',
            component: goodsListPage,
        },
        {
            path: '/shopPage',
            component: shopPage,
        },
        { path: '/', redirect: '/shopHomePage' } //404
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
                    name: '首页',
                    url: "/shopHomePage"
                }, {
                    name: '产品管理',
                    url: "/goodsListPage"
                }, {
                    name: '店铺管理',
                    url: "/shopPage"
                }]
            }
        },
    })

}