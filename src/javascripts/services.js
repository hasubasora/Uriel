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