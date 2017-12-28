'use strict';

window.onload = function (params) {
    var shopPage = Vue.component('shopPage', {
        template: '#shopPage', //用什么模板来渲染他
        data: function data() {
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
            };
        }
    });
    var goodsListPage = Vue.component('goodsListPage', {
        template: '#goodsListPage' //用什么模板来渲染他
    });
    var shopHomePage = Vue.component('shopHomePage', {
        template: '#shopHomePage', //用什么模板来渲染他
        data: function data() {
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
                }]
            };
        }
    });
    var categoryList = Vue.component('categoryList', {
        template: '#categoryList' //用什么模板来渲染他
    });

    var routes = [{
        path: '/shopHomePage',
        component: shopHomePage
    }, {
        path: '/goodsListPage',
        component: goodsListPage
    }, {
        path: '/shopPage',
        component: shopPage
    }, { path: '/', redirect: '/shopHomePage' //404
    }];
    var router = new VueRouter({
        // mode: 'history',
        routes: routes, // （缩写）相当于 routes: routes
        linkActiveClass: 'linkActive' //激活后的连接颜色Class

    });
    var app = new Vue({
        el: '#container',
        router: router,
        data: function data() {
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
            };
        }
    });
};