;
(function() {
    var ft = document.getElementsByTagName("html")[0]; //获取到html标签
    var s = window.screen.width; //获取屏幕的宽度
    window.onresize = function() { //屏幕尺寸改变触发
        var w = document.body.offsetWidth; //获取浏览器内容的宽度
        ft.style.fontSize = w / s * 16 + "px";
    }
})()

// onmousewheel="return false;" //number 不给滚动
$("[text=number]").on('DOMMouseScroll', MouseWheel);

function MouseWheel(event) {
    event = event || window.event;
    event.preventDefault();
}


(function ($) {
    $.fn.flowtype = function (options) {
        // Establish default settings/variables
        // ====================================
        var settings = $.extend({
                maximum: 9999,
                minimum: 1,
                maxFont: 9999,
                minFont: 1,
                fontRatio: 10
            }, options),

            // Do the magic math
            // =================
            changes = function (el) {
                var $el = $(el),
                    elw = $el.width(),
                    width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
                    fontBase = width / settings.fontRatio,
                    fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
                $el.css('font-size', fontSize + 'px');
            };

        // Make the magic visible
        // ======================
        return this.each(function () {
            // Context for resize callback
            var that = this;
            // Make changes upon resize
            $(window).resize(function () {
                changes(that);
            });
            // Set changes on load
            changes(this);
        });
    };
}(jQuery));

$('html').flowtype({
    // fontRatio: 20
});