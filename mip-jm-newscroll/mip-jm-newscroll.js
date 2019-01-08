/**
 * @file mip-jm-newscroll 组件
 * @author
 */

define(function (require) {
    var customElement = require('customElement').create();
    customElement.prototype.firstInviewCallback = function () {
        var ele = this.element;
        var area = ele.children[0];
        var iliHeight = area.offsetHeight;
        var speed = ele.getAttribute('data-speed');
        var time;
        var delay = ele.getAttribute('data-delay');
        area.scrollTop = 0;
        area.innerHTML += area.innerHTML;
        function scrollUp() {
            if (area.scrollTop % (iliHeight) === 0) {
                clearInterval(time);
                setTimeout(startScroll, delay);
            }
            else {
                area.scrollTop++;
                if (area.scrollTop >= area.scrollHeight / 2) {
                    area.scrollTop = 0;
                }
            }
        }
        function startScroll() {
            time = setInterval(scrollUp, speed);
            area.scrollTop++;
        }
        setTimeout(startScroll, delay);
        // TODO
    };
    return customElement;
});
