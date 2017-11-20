$(function() {
    var logins = {
        init() {
            el = this;
            let pkg = 1;
            $('#compNum,#phone,#pwd,#codeNum').on("keydown", function(e) {
                if (e.keyCode == 13) {
                    el.loginSend(pkg)
                }
            });
            $('#compNum,#phone,#pwd,#codeNum').on("input", function(e) {
                $('.warning').text('');
            });
            $('.loginBtn').on('click', function(e) {
                el.loginSend(pkg);
            });
            $('#codeBtn').on('click', function() {
                el.verNum(pkg);
            })
            $('.sl').on('click', function() {
                pkg = 1;
                $(this).addClass('act');
                $('.sr').removeClass('act');
                $('.pwds').addClass('hide');
                $('.codes').removeClass('hide');
                $('.codes').addClass('bounceInLeft animated');
            });
            $('.sr').on('click', function() {
                pkg = 2;
                $(this).addClass('act');
                $('.sl').removeClass('act');
                $('.pwds').removeClass('hide');
                $('.pwds').addClass('bounceInLeft animated')
                $('.codes').addClass('hide');
            });
            // 账号密码或企业号不匹配
        },
        loginSend(pkg) {
            if (!$('#compNum').val()) {
                $('.warning').text('请输入企业');
            } else {
                el.phone(pkg);
            }
        },
        phone(pkg) {
            if (!$('#phone').val()) {
                $('.warning').text('请输入账号');
            } else {
                el.verNum(pkg);
            }
        },
        verNum(d) {
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
        pwd() {
            if (!$('#pwd').val()) {
                $('.warning').text('请输入密码');
            } else {
                el.ajaxSend()
            }
        },
        codeNum() {
            if (!$('#codeNum').val()) {
                $('.warning').text('请输入验证码');
            } else {
                el.ajaxSend()
            }
        },
        ajaxSend() {
            $.ajax({
                // url: purchaseSend_url,
                type: 'post',
                dataType: 'json',
                data: {},
                success: function(result) {

                },
                error(result) {

                }
            })
        }
    }
    logins.init();
})