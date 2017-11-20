// 1.手指按下去的时候，记录下手指坐标
// 2.移动的时候，记录手指坐标 
// 3.用移动后的坐标 - 移动前的坐标 = 手指 移动的距离
// 4.手指按下去的时候，记录下元素的位置
// 5.移动之后，用手指移动的距离 + 元素的初始位置 =  元素现在所要在的位置 

window.onload = function() {
    document.addEventListener("touchmove", function(e) {
        e.preventDefault();
    });

    var wrap = document.querySelector(".containers");
    var num = document.body.clientHeight;
    wrap.style.height = `${num}px`;

    var scroll = document.querySelector(".scrollWrap");
    var iX = 0; /*第几个屏幕宽度*/
    var iW = document.documentElement.clientWidth; /*获取屏幕的宽度*/
    var iH = document.documentElement.clientHeight; /*获取屏幕的宽度*/
    var stylesH = styles(scroll, 'height');
    var nums = iH - stylesH;
    console.log(iW + '-' + iH)
    var iStartTouchY = 0; /*存放当前手指位置*/
    var iStartY = 0; /*存放新的手指位置*/

    scroll.addEventListener('touchstart', fnStart)

    function fnStart(ev) {
        _ev = ev.changedTouches[0]; /*手指列表*/
        iStartTouchY = _ev.pageY;
        iStartY = iX; /*当前元素的位置*/
    }

    scroll.addEventListener('touchmove', fnMove)

    function fnMove(ev) {
        _ev = ev.changedTouches[0]; /*手指列表*/
        /*获取差值，就是他移动的距离=当前手指的位置-之前手指移动的位置*/
        var iDis = _ev.pageY - iStartTouchY;
        /*元素=元素+差值，手指移动 多少距离也跟着移动多少距离*/
        iX = iStartY + iDis;
        console.info(stylesH - iH)
        if (iX > 0) {
            iX = 0;
        }
        console.info(nums + '-' + iX)
        if ((nums) > iX) {
            iX = nums;
        }
        scroll.style.transition = ".1s";
        scroll.style.transform = `translate3d(0, ${iX}px, 0)`;
    }
    //获取元素属性
    function styles(obj, art) {
        return obj.currentStyle ? parseInt(obj.currentStyle[art]) : parseInt(getComputedStyle(obj)[art]);
    }


    var saveLove = document.querySelectorAll('.saveLove');
    var btn = document.querySelectorAll('.btn');
    btn.forEach((v, i) => {
        v.addEventListener('touchstart', function() {
            saveLove.forEach((vs, is) => {
                vs.style.display = "none";
            });
            saveLove[i].style.display = "block";
        })
    });

};