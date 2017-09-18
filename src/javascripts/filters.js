const filter = {
    /** 将text中的html字符转义， 仅转义  ', ", <, > 四个字符
     * @param  { String } str 需要转义的字符串
     * @returns { String }     转义后的字符串 
     */
    unhtml(str) {
        return str ? str.replace(/[<">']/g, (a) => {
            return {
                '<': '&lt;',
                '"': '&quot;',
                '>': '&gt;',
                "'": '&#39;'
            }[a]
        }) : '';
    },
    /**
     * 匹配电话号码的正则
     * @param {String} tel 传入的电话号码
     * @param {String} reg 正则
     * @returns {bool} true false
     */
    verificationPhone(tel, reg) {
        return tel ? reg || /^0?1[3|4|5|7|8][0-9]\d{8}$/.test(tel) : '';
        // console.log(reg.test(tel))
    },
    /**
     * 去除多余空格
     * @param { String } str 需要去空格的字符串 
     */
    unBlank(str) {
        return str ? str.replace(/\s/ig, '') : '';
    },
    /**
     * 检查输入字符
     * @param char
     * @param reg
     */
    character(char, reg) {
        return char ? reg || /[\{\}\[\]|、\\:;：；‘’\'\"“”\<\>?《》？，。、$*￥#~`!！@\%\^\…\&\*\(\)\_\+\-\=【】]/g.test(char) : '';

    },
    /**
     * 是否为表情包
     * @param {*} substring 
     */
    isEmoji(substring) {
        for (var i = 0; i < substring.length; i++) {
            var hs = substring.charCodeAt(i);
            if (0xd800 <= hs && hs <= 0xdbff) {
                if (substring.length > 1) {
                    var ls = substring.charCodeAt(i + 1);
                    var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
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
                } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030 ||
                    hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b ||
                    hs == 0x2b50) {
                    return true;
                }
            }
        }
    },
    /**
     * 倒计时
     * @param {*} codebtn 
     */
    countDown(codebtn) {
        let a = 60;
        timer = setInterval(function() {
            if (a > 0) {
                codebtn.attr("disabled", true).val("(" + a + ")倒计时").css("background", "#ccc");
                a--;
            } else {
                clearInterval(timer);
                codebtn.attr("disabled", false).val("获取验证码").css("background", "#eeeeee");
                a = 60;
            }
        }, 1000);

    }
}