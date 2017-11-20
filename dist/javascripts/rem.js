;
(function() {
    var ft = document.getElementsByTagName("html")[0]; //获取到html标签
    var s = window.screen.width; //获取屏幕的宽度
    window.onresize = function() { //屏幕尺寸改变触发
        var w = document.body.offsetWidth; //获取浏览器内容的宽度
        ft.style.fontSize = w / s * 16 + "px";
    }
})()

// onmousewheel="return false;"
$("[text=number]").addEventListener('DOMMouseScroll', MouseWheel, false);

function MouseWheel(event) {
    event = event || window.event;
    event.preventDefault();
}