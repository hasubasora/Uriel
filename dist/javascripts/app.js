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