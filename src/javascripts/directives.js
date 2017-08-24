// 1.手指按下去的时候，记录下手指坐标
// 2.移动的时候，记录手指坐标 
// 3.用移动后的坐标 - 移动前的坐标 = 手指 移动的距离
// 4.手指按下去的时候，记录下元素的位置
// 5.移动之后，用手指移动的距离 + 元素的初始位置 =  元素现在所要在的位置 

window.onload = function() {
    var wrap = document.querySelector(".containers");
    var scroll = document.querySelector(".scrollWrap");
    var num = document.body.clientHeight;
    wrap.style.height = `${num}px`;
    var startPoint = 0;
    var startEl = 0;
    wrap.addEventListener(
        "touchstart",
        function(e) {
            var touch = e.changedTouches[0];
            startPoint = touch.pageY;
            startEl = scroll.offsetTop;
            console.log(startEl)
        }
    );
    wrap.addEventListener(
        "touchmove",
        function(e) {
            var touch = e.changedTouches[0];
            var nowPoint = touch.pageY;
            var dis = nowPoint - startPoint;
            var _top = startEl + dis;
            console.log(_top)
            scroll.style.transform = `translate3d(0, ${_top}px, 0)`;
            // if (_top > 0) {
            //     _top = 0;
            // }


        }
    );
};