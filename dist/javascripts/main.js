'use strict';

var keyControl = {
    //手机部分显示错误信息的id
    numKey: function numKey(t) {
        t.value = t.value.replace(/[^\d]/g, '');
    },
    //有小数点
    flostKey: function flostKey(t) {
        t.value = t.value.replace(/[^\d\.]/g, '').replace(/^[^\d]/g, '');
    },
    //匹配0开头跟随的数字
    zeroKey: function zeroKey(t) {
        t.value = t.value.replace(/^0(?=[0-9])/, '');
    },
    //只能存在一个.
    dotId: "",
    dotError: '输入正确规则数字...',
    oneKey: function oneKey(t) {
        var one = t.value.search(/[\.]/g),
            two = t.value.lastIndexOf('.');
        if (one != two) id(keyControl.dotId).innerHTML = keyControl.dotError;
    },
    //电话号码
    telId: '',
    telError: '×手机号不正确...',
    telNight: '√手机号正确',
    telKey: function telKey(t) {
        var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
        if (!reg.test(t.value)) {
            console.log('输入正确手机号');
            id(keyControl.telid).innerHTML = keyControl.telError;
            return false;
        } else {
            id(keyControl.telid).innerHTML = keyControl.telNight;
        }
    },
    id: function id(obj) {
        return document.getElementById(obj);
    },
    //长度
    maxLength: 10,
    minLength: 2,
    maxStr: '超过最大限制',
    minStr: '最少输入几位数',
    strId: "",
    strLength: function strLength(t) {
        console.log(keyControl.maxStr);
        if (t.value.length >= keyControl.maxLength) {
            //超过最大限制
            id(keyControl.strId).innerHTML = keyControl.maxStr;
            return false;
        } else if (t.value.length <= keyControl.minLength) {
            //最小限制
            id(keyControl.strId).innerHTML = keyControl.minStr;
            return false;
        } else {
            id(keyControl.strId).innerHTML = '';
        }
    },
    successColor: function successColor() {},
    errorColor: function errorColor() {},
    //倒计时60秒
    setTimeBtn: '',
    setTime: 60,
    timeSix: function timeSix() {
        var timer = setInterval(function () {
            if (keyControl.setTime > 0) {
                id(keyControl.setTimeBtn).setAttribute("disabled", "disabled");
                id(keyControl.setTimeBtn).value = "(" + keyControl.setTime + ")重新获取";
                keyControl.setTime--;
            } else {
                clearInterval(timer);
                id(keyControl.setTimeBtn).removeAttribute("disabled");
                id(keyControl.setTimeBtn).value = "获取验证码";
                keyControl.setTime = 60;
            }
        }, 1000);
    },
    //密码对比
    identicalTwo: '', //第二个密码的ID
    identicalError: '', //显示错误的ID
    identical: function identical(t) {
        if (t.value != id(keyControl.identicalTwo).value) {
            id(keyControl.identicalError).value = "密码不一致";
        } else {
            id(keyControl.identicalError).value = "";
        }
    }
};

function Agumon() {
    this.erId = ''; //输出的错误ID
    this.minLength = 2; //最长限制
    this.maxLength = 10; //最少限制
    this.minError = '最少限制是' + this.minLength; //最少限制错误
    this.maxError = '最大限制是' + this.maxLength; //最大限制错误
    this.setTime = 60; // 倒数时间
    this.reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
    this.dotError = '输入正确规则数字...';
}
Agumon.prototype = {
    strLength: function strLength(t) {
        //长短限制
        if (t.value.length >= this.maxLength) {
            //超过最大限制
            id(this.erId).innerHTML = this.maxError;
            return false;
        } else if (t.value.length <= this.minLength) {
            //最小限制
            id(this.erId).innerHTML = this.minError;
            return false;
        } else {
            id(this.erId).innerHTML = '';
            return true;
        }
    },
    ploneKey: function ploneKey(t) {
        // 手机号判断
        if (!this.reg.test(t.value)) {
            console.log('输入正确手机号');
            id(this.erId).innerHTML = this.minError; //错
            return false;
        } else {
            id(this.erId).innerHTML = this.maxError; //对
            return true;
        }
    },
    oneKey: function oneKey(t) {
        // 小数点和数字
        var one = t.value.search(/[\.]/g),
            two = t.value.lastIndexOf('.');
        if (one != two) id(this.erId).innerHTML = this.dotError;
    },
    //手机部分显示错误信息的id
    numKey: function numKey(t) {
        t.value = t.value.replace(/[^\d]/g, '');
    },
    flostKey: function flostKey(t) {
        //有小数点
        t.value = t.value.replace(/[^\d\.]/g, '').replace(/^[^\d]/g, '');
    },
    zeroKey: function zeroKey(t) {
        //匹配0开头跟随的数字
        t.value = t.value.replace(/^0(?=[0-9])/, '');
    },
    ltrim: function ltrim(str) {
        return str.replace(/(^\s*)/g, '');
    },
    rtrim: function rtrim(str) {
        return str.replace(/(\s*$)/g, '');
    },
    trim: function trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }

};
var agumon = new Agumon();
'use strict';

function fn(id1, id2) {
    document.addEventListener('click', function (e) {
        if (e.target !== id1) {
            id2.style.display = "none";
        }
    });
    id2.addEventListener('click', function (e) {
        e.stopPropagation();
    });
    id1.addEventListener('click', function (e) {
        var status = id2.style.display;
        if (status === "none") {
            id2.style.display = "block";
        } else {
            id2.style.display = "none";
        }
    });
}
fn(btn, div);
"use strict";

// 1.手指按下去的时候，记录下手指坐标
// 2.移动的时候，记录手指坐标 
// 3.用移动后的坐标 - 移动前的坐标 = 手指 移动的距离
// 4.手指按下去的时候，记录下元素的位置
// 5.移动之后，用手指移动的距离 + 元素的初始位置 =  元素现在所要在的位置 

window.onload = function () {
    document.addEventListener("touchmove", function (e) {
        e.preventDefault();
    });

    var wrap = document.querySelector(".containers");
    var num = document.body.clientHeight;
    wrap.style.height = num + "px";

    var scroll = document.querySelector(".scrollWrap");
    var iX = 0; /*第几个屏幕宽度*/
    var iW = document.documentElement.clientWidth; /*获取屏幕的宽度*/
    var iH = document.documentElement.clientHeight; /*获取屏幕的宽度*/
    var stylesH = styles(scroll, 'height');
    var nums = iH - stylesH;
    console.log(iW + '-' + iH);
    var iStartTouchY = 0; /*存放当前手指位置*/
    var iStartY = 0; /*存放新的手指位置*/

    scroll.addEventListener('touchstart', fnStart);

    function fnStart(ev) {
        _ev = ev.changedTouches[0]; /*手指列表*/
        iStartTouchY = _ev.pageY;
        iStartY = iX; /*当前元素的位置*/
    }

    scroll.addEventListener('touchmove', fnMove);

    function fnMove(ev) {
        _ev = ev.changedTouches[0]; /*手指列表*/
        /*获取差值，就是他移动的距离=当前手指的位置-之前手指移动的位置*/
        var iDis = _ev.pageY - iStartTouchY;
        /*元素=元素+差值，手指移动 多少距离也跟着移动多少距离*/
        iX = iStartY + iDis;
        console.info(stylesH - iH);
        if (iX > 0) {
            iX = 0;
        }
        console.info(nums + '-' + iX);
        if (nums > iX) {
            iX = nums;
        }
        scroll.style.transition = ".1s";
        scroll.style.transform = "translate3d(0, " + iX + "px, 0)";
    }
    //获取元素属性
    function styles(obj, art) {
        return obj.currentStyle ? parseInt(obj.currentStyle[art]) : parseInt(getComputedStyle(obj)[art]);
    }

    var saveLove = document.querySelectorAll('.saveLove');
    var btn = document.querySelectorAll('.btn');
    btn.forEach(function (v, i) {
        v.addEventListener('touchstart', function () {
            saveLove.forEach(function (vs, is) {
                vs.style.display = "none";
            });
            saveLove[i].style.display = "block";
        });
    });
};
'use strict';

var filter = {
    /** 将text中的html字符转义， 仅转义  ', ", <, > 四个字符
     * @param  { String } str 需要转义的字符串
     * @returns { String }     转义后的字符串 
     */
    unhtml: function unhtml(str) {
        return str ? str.replace(/[<">']/g, function (a) {
            return {
                '<': '&lt;',
                '"': '&quot;',
                '>': '&gt;',
                "'": '&#39;'
            }[a];
        }) : '';
    },

    /**
     * 匹配电话号码的正则
     * @param {String} tel 传入的电话号码
     * @param {String} reg 正则
     * @returns {bool} true false
     */
    verificationPhone: function verificationPhone(tel, reg) {
        return tel ? reg || /^0?1[3|4|5|7|8][0-9]\d{8}$/.test(tel) : '';
        // console.log(reg.test(tel))
    },

    /**
     * 去除多余空格
     * @param { String } str 需要去空格的字符串 
     */
    unBlank: function unBlank(str) {
        return str ? str.replace(/\s/ig, '') : '';
    },

    /**
     * 检查输入字符
     * @param char
     * @param reg
     */
    character: function character(char, reg) {
        return char ? reg || /[$￥#~`!！@%^…&*()_+-=【】\{\}\[\]|、\\:;：；‘’\'\"“”\<\>?《》？，。、]/g.test(char) : '';
        // console.log(reg.test(tel))
    },

    /**
     * 是否为表情包
     */
    isEmoji: function isEmoji(substring) {
        for (var i = 0; i < substring.length; i++) {
            var hs = substring.charCodeAt(i);
            if (0xd800 <= hs && hs <= 0xdbff) {
                if (substring.length > 1) {
                    var ls = substring.charCodeAt(i + 1);
                    var uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000;
                    if (0x1d000 <= uc && uc <= 0x1f77f) {
                        return true;
                    }
                }
            } else if (substring.length > 1) {
                var ls = substring.charCodeAt(i + 1);
                if (ls == 0x20e3) {
                    return true;
                }
            } else {
                if (0x2100 <= hs && hs <= 0x27ff) {
                    return true;
                } else if (0x2B05 <= hs && hs <= 0x2b07) {
                    return true;
                } else if (0x2934 <= hs && hs <= 0x2935) {
                    return true;
                } else if (0x3297 <= hs && hs <= 0x3299) {
                    return true;
                } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030 || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b || hs == 0x2b50) {
                    return true;
                }
            }
        }
    },
    countDown: function countDown(codebtn) {
        var a = 60;
        timer = setInterval(function () {
            if (a > 0) {
                codebtn.attr("disabled", true).val("(" + a + ")重新获取").css("background", "#ccc");
                a--;
            } else {
                clearInterval(timer);
                codebtn.attr("disabled", false).val("获取验证码").css("background", "#eeeeee");
                a = 60;
            }
        }, 1000);
    }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// src/foo.js
exports.default = 'hello world!';
'use strict';

window.onload = function (params) {
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
    var UserHome = Vue.component('UserHome', {
        template: '#UserHome' //用什么模板来渲染他
    });
    var UserProfile = Vue.component('UserProfile', {
        template: '#UserProfile', //用什么模板来渲染他
        data: function data() {
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
            };
        }
    });
    var routes = [{
        path: '/UserProfile',
        component: UserProfile
    }, {
        path: '/UserHome',
        component: UserHome
    }, { path: '/', redirect: '/UserProfile' //404
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
                    name: '应用',
                    url: "/UserProfile"
                }, {
                    name: '其他',
                    url: "/UserHome"
                }]
            };
        }
    });
};
'use strict';

$(function () {
    var logins = {
        init: function init() {
            el = this;
            var pkg = 1;
            $('#compNum,#phone,#pwd,#codeNum').on("keydown", function (e) {
                if (e.keyCode == 13) {
                    el.loginSend(pkg);
                }
            });
            $('#compNum,#phone,#pwd,#codeNum').on("input", function (e) {
                $('.warning').text('');
            });
            $('.loginBtn').on('click', function (e) {
                el.loginSend(pkg);
            });
            $('#codeBtn').on('click', function () {
                el.verNum(pkg);
            });
            $('.sl').on('click', function () {
                pkg = 1;
                $(this).addClass('act');
                $('.sr').removeClass('act');
                $('.pwds').addClass('hide');
                $('.codes').removeClass('hide');
                $('.codes').addClass('bounceInLeft animated');
            });
            $('.sr').on('click', function () {
                pkg = 2;
                $(this).addClass('act');
                $('.sl').removeClass('act');
                $('.pwds').removeClass('hide');
                $('.pwds').addClass('bounceInLeft animated');
                $('.codes').addClass('hide');
            });
            // 账号密码或企业号不匹配
        },
        loginSend: function loginSend(pkg) {
            if (!$('#compNum').val()) {
                $('.warning').text('请输入企业');
            } else {
                el.phone(pkg);
            }
        },
        phone: function phone(pkg) {
            if (!$('#phone').val()) {
                $('.warning').text('请输入账号');
            } else {
                el.verNum(pkg);
            }
        },
        verNum: function verNum(d) {
            if (filter.verificationPhone($('#phone').val()) == false) {
                $('.warning').text('请输入正确账号');
            } else {
                if (d == 1) {
                    el.codeNum();
                    filter.countDown($('#codeBtn'));
                }
                if (d == 2) {
                    el.pwd();
                }
            }
        },
        pwd: function pwd() {
            if (!$('#pwd').val()) {
                $('.warning').text('请输入密码');
            } else {
                el.ajaxSend();
            }
        },
        codeNum: function codeNum() {
            if (!$('#codeNum').val()) {
                $('.warning').text('请输入验证码');
            } else {
                el.ajaxSend();
            }
        },
        ajaxSend: function ajaxSend() {
            $.ajax({
                // url: purchaseSend_url,
                type: 'post',
                dataType: 'json',
                data: {},
                success: function success(result) {},
                error: function error(result) {}
            });
        }
    };
    logins.init();
});
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    console.log(_foo2.default);
};

var _foo = require('./foo.js');

var _foo2 = _interopRequireDefault(_foo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
"use strict";

;
(function () {
    var ft = document.getElementsByTagName("html")[0]; //获取到html标签
    var s = window.screen.width; //获取屏幕的宽度
    window.onresize = function () {
        //屏幕尺寸改变触发
        var w = document.body.offsetWidth; //获取浏览器内容的宽度
        ft.style.fontSize = w / s * 16 + "px";
    };
})();

// onmousewheel="return false;"
$("[text=number]").addEventListener('DOMMouseScroll', MouseWheel, false);

function MouseWheel(event) {
    event = event || window.event;
    event.preventDefault();
}
"use strict";

/**
 * last month chenyongh 2016年12月24日14:31:55
 */
var month = {
    filter: {},
    DataTables: "",
    init: function init() {
        _this = this;
        $(".addAccount").on('click', function () {});
        $("#proSelect").on('change', function () {});
        $('[name=tDnum]').on('blur', function () {});
        $('[name=tDnum]').on('keyup', function () {});
        DataTables = $('#table_id').DataTable({
            "processing": true,
            "serverSide": true, //服务器分页
            "sEmptyTable": true,
            "sLoadingRecords": true,
            "scrollX": false,
            "searching": false,
            "ordering": false,
            "paging": true,
            "bAutoWidth": true, //是否自适应宽度
            "bLengthChange": true, //隐藏下拉
            // data: [
            //         ['1', '2', '3', '4', '5', '6']
            //     ]，
            // info: false, //隐藏 Showing 1 to 2 of 2 entries //有多少页
            // retrieve: true, //检索实例，
            // destroy: true， //销毁当前表格，对象
            // ajax: {
            //     url: "",//替换新链接
            //     dataSrc: function(data) { //dataSrc=success 成功返回数据
            //         return data.data;
            //     }
            // },
            //制定第几列 显示什么属性 columns.data
            //columns.render 渲染函数
            "aaSorting": [[1, "desc"]],
            "aLengthMenu": [[10, 50, 100], [10, 50, 100]],
            // "dom": 'rt<"bottom"iflp<"clear">>',
            "order": [[0, "desc"]],
            "ajax": {
                "url": AccountData,
                "type": 'post',
                "data": function data(d) {
                    //添加额外的参数传给服务器
                    var filter = {};
                    d.filter = _this.filter;
                }
            },
            "dom": '<"row"<"#id.col-xs-6"r><"col-xs-6">>' + "t" + '<"row"<"col-xs-6"i><"col-xs-6"p>>',
            "aoColumns": [
            /**
            * 第1列默认排序
                第2列默认排序
                第3列只升序
                第4列降序排序，其次是升序，然后再升序
                第5列只降序
                第6列默认排序
            */
            null, null, { "orderSequence": ["asc"] }, { "orderSequence": ["desc", "asc", "asc"] }, { "orderSequence": ["desc"] }, null],
            columnDefs: [{
                targets: 0,
                data: "",
                title: "操作",
                render: function render(data, type, row, meta) {
                    //结算单Id
                    if (row[11] == "0") {
                        //待申请结算
                        return '<input type="checkbox"  name="checkBoxes" data-id="' + row[2] + '">';
                    } else {
                        return '<input type="checkbox" disabled name="checkBoxes" data-id="' + row[2] + '">';
                    }
                }
            }, {
                targets: 9,
                "visible": false //隐藏掉那一列
            }, {
                targets: 11, //判断td内容改td中的内容
                render: function render(data, type, row, meta) {
                    if (data == "1") {
                        return "审核中";
                    } else if (data == "0") {
                        return "待申请结算";
                    } else if (data == "2") {
                        return "审核通过";
                    } else if (data == '3') {
                        return "审核不通过";
                    }
                    return data;
                }
            }, {
                targets: 8,
                data: "",
                title: "操作",
                render: function render(data, type, row, meta) {
                    return '<input type="checkbox" name="checkBoxes" data-id="' + row[8] + '">';
                }
            }],
            // 回调函数， 当表格加载完后
            initComplete: function initComplete() {
                $("#id").append("input");
            },
            "createdRow": function createdRow(row, data, index) {
                //改變某航顏色
                if (data[2].replace(/[\$,]/g, '') * 1 > 4000) {
                    $('td', row).eq(2).html('<div style="border:1px solid red;width:300px">' + data[2] + '</div>');
                }
            },
            language: {
                "sProcessing": "拼命加载中...",
                "sLengthMenu": "显示 _MENU_ 项结果",
                "sZeroRecords": "没有匹配结果",
                "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
                "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
                "sInfoPostFix": "",
                "sSearch": "搜索:",
                "sUrl": "",
                "sEmptyTable": "表中数据为空",
                "sLoadingRecords": "玩命加载中...",
                "sInfoThousands": ",",
                "oPaginate": {
                    "sFirst": "首页",
                    "sPrevious": "上页",
                    "sNext": "下页",
                    "sLast": "末页"
                },
                "oAria": {
                    "sSortAscending": ": 以升序排列此列",
                    "sSortDescending": ": 以降序排列此列"
                }
            }
        });
        $.fn.dataTable.ext.errMode = function (s, h, m) {};
    },
    //搜索功能
    selsect: function selsect() {
        _this.filter = {
            keywords: $('#keywords').val(),
            projectId: $("#projectId").val(),
            checkStatus: $("#searchDataTable").val()
        };
        DataTables.ajax.reload(null, false);
        // DataTables.draw();
    },
    //打开对账选择商品内容
    openContent: function openContent(oid) {
        var url = clearing_url;
        url += '/oid/' + oid; // 需要附带参数 /
        layer.open({
            type: 1, //1 是 HTML 2是frame
            title: '标题',
            shadeClose: true,
            shade: [0.8, '#393D49'],
            scrollbar: false,
            maxmin: true, //开启最大化最小化按钮
            area: ['99%', '99%'], //窗口宽度
            content: ID, // 类型是1的用ID 2的用链接
            success: function success() {//执行弹出层完成时,获取当前层索引},

            },
            end: function end() {
                //关闭后执行父页面的功能
            }
        });
    },
    confirm: function confirm(num) {
        //确认弹出询问信息
        parent.layer.confirm('确定结算？', {
            icon: 3,
            title: '结算确认',
            yes: function yes() {
                $.ajax({
                    url: clearing_url,
                    type: 'post',
                    dataType: 'json',
                    data: { payRecordList: num },
                    success: function success(data) {
                        if (data.status == 1) {
                            parent.layer.msg('结算已发送，耐心等待审核！');
                            DataTables.ajax.reload();
                            setTimeout(parent.layer.closeAll, 1000);
                        }
                        if (data.url == 1000) {
                            parent.layer.alert(data.info, function (index) {
                                //bankCard 要打开的连接
                                parent.openFrame(bankCard, 'left-bankCard'); //跳转框架
                                parent.layer.close(index);
                            });
                        }
                    },
                    error: function error(data) {
                        parent.layer.msg('网站被外星人绑架啦~(≧▽≦)~啦啦啦，请刷新页面！');
                    }
                });
            },
            cancel: function cancel() {
                _this.dataTable.api().ajax.reload();
            }
        });
    },
    each: function each() {
        //数组转换对象
        art = [];
        $.each($("[name=checkBoxes]:checked"), function (i, n) {
            art.push($(n).attr("data-id"));
            //console.log($(n).attr("data-id"));
        });
        var _atr = art.toString(); //转出object
    }

};
'use strict';

window.onload = function (params) {
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
    var routes = [{
        path: '/shopHomePage',
        component: shopHomePage
    }, {
        path: '/goodsListPage',
        component: goodsListPage
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