$(function (params) {
    var _h = window.screen.height;
    $('.complain_div_4').height(_h)
    $('.withdrawDeposit li').on('click', function () {
        let _index = $(this).index();
        if (_index == 0) {
            $('.complain_div_1').hide();
            $('.complain_div_2').show();
        } else {
            log($(this).text())
            $('.complain_div_1').hide();
            $('.complain_div_3').show();
            $('.complain_input').val($(this).text());
        }
    })
    $('.complain_div_2 ul li').on('click', function () {
        log($(this).text())
        $('.complain_div_2').hide();
        $('.complain_div_3').show();
        $('.complain_input').val($(this).text());
    })
    $('.next').on('click', function () {
      //提交
     var txt= filter.unhtml($('.complain_text').val())
      _submit(txt)
    })
})

function _submit(t) {
    $.ajax({
        type: "post",
        url:'',
        data: {

        },
        dataType: 'json'
    }).done(function (data, status) {
        //成功后跳页面
        if (data.Status == 1 && status == 200) {
            $('.complain_div_3').hide();
            $('.complain_div_4').show();
        }
    }).fail(function (data) {
        alert('提交失败,请刷新页面')
    })
}

function log(t) {
    return console.log(t)
}