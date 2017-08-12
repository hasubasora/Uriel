var keyControl = {
    //手机部分显示错误信息的id
    numKey: function(t) {
        t.value = t.value.replace(/[^\d]/g, '');
    },
    //有小数点
    flostKey: function(t) {
        t.value = t.value.replace(/[^\d\.]/g, '').replace(/^[^\d]/g, '');
    },
    //匹配0开头跟随的数字
    zeroKey: function(t) {
        t.value = t.value.replace(/^0(?=[0-9])/, '');
    },
    //只能存在一个.
    dotId: "",
    dotError: '输入正确规则数字...',
    oneKey: function(t) {
        var one = t.value.search(/[\.]/g),
            two = t.value.lastIndexOf('.');
        if (one != two) id(keyControl.dotId).innerHTML = keyControl.dotError;
    },
    //电话号码
    telId: '',
    telError: '×手机号不正确...',
    telNight: '√手机号正确',
    telKey: function(t) {
        var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
        if (!reg.test(t.value)) {
            console.log('输入正确手机号');
            id(keyControl.telid).innerHTML = keyControl.telError;
            return false;
        } else {
            id(keyControl.telid).innerHTML = keyControl.telNight;
        }
    },
    id: function(obj) {
        return document.getElementById(obj);
    },
    //长度
    maxLength: 10,
    minLength: 2,
    maxStr: '超过最大限制',
    minStr: '最少输入几位数',
    strId: "",
    strLength: function(t) {
        console.log(keyControl.maxStr);
        if (t.value.length >= keyControl.maxLength) { //超过最大限制
            id(keyControl.strId).innerHTML = keyControl.maxStr;
            return false;
        } else if (t.value.length <= keyControl.minLength) { //最小限制
            id(keyControl.strId).innerHTML = keyControl.minStr;
            return false;
        } else {
            id(keyControl.strId).innerHTML = '';
        }
    },
    successColor: function() {},
    errorColor: function() {},
    //倒计时60秒
    setTimeBtn: '',
    setTime: 60,
    timeSix: function() {
        var timer = setInterval(function() {
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
            },
            1000);
    },
    //密码对比
    identicalTwo: '', //第二个密码的ID
    identicalError: '', //显示错误的ID
    identical: function(t) {
        if (t.value != id(keyControl.identicalTwo).value) {
            id(keyControl.identicalError).value = "密码不一致";
        } else {
            id(keyControl.identicalError).value = "";
        }
    },
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
    strLength: function(t) { //长短限制
        if (t.value.length >= this.maxLength) { //超过最大限制
            id(this.erId).innerHTML = this.maxError;
            return false;
        } else if (t.value.length <= this.minLength) { //最小限制
            id(this.erId).innerHTML = this.minError;
            return false;
        } else {
            id(this.erId).innerHTML = '';
            return true;
        }
    },
    ploneKey: function(t) { // 手机号判断
        if (!this.reg.test(t.value)) {
            console.log('输入正确手机号');
            id(this.erId).innerHTML = this.minError; //错
            return false;
        } else {
            id(this.erId).innerHTML = this.maxError; //对
            return true;
        }
    },
    oneKey: function(t) { // 小数点和数字
        var one = t.value.search(/[\.]/g),
            two = t.value.lastIndexOf('.');
        if (one != two) id(this.erId).innerHTML = this.dotError;
    },
    //手机部分显示错误信息的id
    numKey: function(t) {
        t.value = t.value.replace(/[^\d]/g, '');
    },
    flostKey: function(t) { //有小数点
        t.value = t.value.replace(/[^\d\.]/g, '').replace(/^[^\d]/g, '');
    },
    zeroKey: function(t) { //匹配0开头跟随的数字
        t.value = t.value.replace(/^0(?=[0-9])/, '');
    },
    ltrim: function(str) {
        return str.replace(/(^\s*)/g, '');
    },
    rtrim: function(str) {
        return str.replace(/(\s*$)/g, '');
    },
    trim: function(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }

};
var agumon = new Agumon();
function fn(id1, id2) {
    document.addEventListener('click', function(e) {
        if (e.target !== id1) {
            id2.style.display = "none";
        }
    });
    id2.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    id1.addEventListener('click', function(e) {
        var status = id2.style.display;
        if (status === "none") {
            id2.style.display = "block";
        } else {
            id2.style.display = "none";
        }
    });
}
fn(btn, div);


/**
 * last month chenyongh 2016年12月24日14:31:55
 */
var month = {
    filter: {},
    DataTables: "",
    init: function() {
        _this = this;
        $(".addAccount").on('click', function() {

        });
        $("#proSelect").on('change', function() {

        });
        $('[name=tDnum]').on('blur', function() {

        });
        $('[name=tDnum]').on('keyup', function() {

        });
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
            "aaSorting": [
                [1, "desc"]
            ],
            "aLengthMenu": [
                [10, 50, 100],
                [10, 50, 100]
            ],
            // "dom": 'rt<"bottom"iflp<"clear">>',
            "order": [
                [0, "desc"]
            ],
            "ajax": {
                "url": AccountData,
                "type": 'post',
                "data": function(d) {
                    //添加额外的参数传给服务器
                    var filter = {};
                    d.filter = _this.filter;

                }
            },
            "dom": '<"row"<"#id.col-xs-6"r><"col-xs-6">>' + "t" +
                '<"row"<"col-xs-6"i><"col-xs-6"p>>',
            "aoColumns": [
                /**
                * 第1列默认排序
                    第2列默认排序
                    第3列只升序
                    第4列降序排序，其次是升序，然后再升序
                    第5列只降序
                    第6列默认排序
                */
                null,
                null,
                { "orderSequence": ["asc"] },
                { "orderSequence": ["desc", "asc", "asc"] },
                { "orderSequence": ["desc"] },
                null
            ],
            columnDefs: [{
                targets: 0,
                data: "",
                title: "操作",
                render: function(data, type, row, meta) { //结算单Id
                    if (row[11] == "0") { //待申请结算
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
                render: function(data, type, row, meta) {
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
                render: function(data, type, row, meta) {
                    return '<input type="checkbox" name="checkBoxes" data-id="' + row[8] + '">';
                }
            }],
            // 回调函数， 当表格加载完后
            initComplete: function() {
                $("#id").append("input");
            },
            "createdRow": function(row, data, index) { //改變某航顏色
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
            },
        });
        $.fn.dataTable.ext.errMode = function(s, h, m) {};
    },
    //搜索功能
    selsect: function() {
        _this.filter = {
            keywords: $('#keywords').val(),
            projectId: $("#projectId").val(),
            checkStatus: $("#searchDataTable").val()
        };
        DataTables.ajax.reload(null, false);
        // DataTables.draw();
    },
    //打开对账选择商品内容
    openContent: function(oid) {
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
            success: function() { //执行弹出层完成时,获取当前层索引},

            },
            end: function() {
                //关闭后执行父页面的功能
            }
        });
    },
    confirm: function(num) { //确认弹出询问信息
        parent.layer.confirm('确定结算？', {
            icon: 3,
            title: '结算确认',
            yes: function() {
                $.ajax({
                    url: clearing_url,
                    type: 'post',
                    dataType: 'json',
                    data: { payRecordList: num },
                    success: function(data) {
                        if (data.status == 1) {
                            parent.layer.msg('结算已发送，耐心等待审核！');
                            DataTables.ajax.reload();
                            setTimeout(parent.layer.closeAll, 1000);
                        }
                        if (data.url == 1000) {
                            parent.layer.alert(data.info, function(index) {
                                //bankCard 要打开的连接
                                parent.openFrame(bankCard, 'left-bankCard'); //跳转框架
                                parent.layer.close(index);
                            });
                        }
                    },
                    error: function(data) {
                        parent.layer.msg('网站被外星人绑架啦~(≧▽≦)~啦啦啦，请刷新页面！');
                    }
                });
            },
            cancel: function() {
                _this.dataTable.api().ajax.reload();
            }
        });
    },
    each: function() { //数组转换对象
        art = [];
        $.each($("[name=checkBoxes]:checked"), function(i, n) {
            art.push($(n).attr("data-id"));
            //console.log($(n).attr("data-id"));
        });
        var _atr = art.toString(); //转出object
    },

};