$(document).foundation()
    //form animation
    (function () {

        function init() {
            var speed = 250,
                easing = mina.easeinout;

		[].slice.call(document.querySelectorAll('#grid > a')).forEach(function (el) {
                var s = Snap(el.querySelector('svg')),
                    path = s.select('path'),
                    pathConfig = {
                        from: path.attr('d'),
                        to: el.getAttribute('data-path-hover')
                    };

                el.addEventListener('mouseenter', function () {
                    path.animate({
                        'path': pathConfig.to
                    }, speed, easing);
                });

                el.addEventListener('mouseleave', function () {
                    path.animate({
                        'path': pathConfig.from
                    }, speed, easing);
                });
            });
        }

        init();

    })();

// //scroll effect on navigating to other pages

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});




(function () {
            [].slice.call(document.querySelectorAll('.menu')).forEach(function (menu) {
        var menuItems = menu.querySelectorAll('.menu__link'),
            setCurrent = function (ev) {
                //                        ev.preventDefault();

                var item = ev.target.parentNode; // li

                // return if already current
                if (classie.has(item, 'menu__item--current')) {
                    return false;
                }
                // remove current
                classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
                // set current
                classie.add(item, 'menu__item--current');
            };

                [].slice.call(menuItems).forEach(function (el) {
            el.addEventListener('click', setCurrent);
        });
    });

            [].slice.call(document.querySelectorAll('.link-copy')).forEach(function (link) {
        link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
        new Clipboard(link);
        link.addEventListener('click', function () {
            classie.add(link, 'link-copy--animate');
            setTimeout(function () {
                classie.remove(link, 'link-copy--animate');
            }, 300);
        });
    });
})(window);

< /script> < script src = "form-js/classie.js " > < /script> < script > (function () {
    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if (!String.prototype.trim) {
        (function () {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function () {
                return this.replace(rtrim, '');
            };
        })();
    }

            [].slice.call(document.querySelectorAll('input.input__field')).forEach(function (inputEl) {
        // in case the input is already filled..
        if (inputEl.value.trim() !== '') {
            classie.add(inputEl.parentNode, 'input--filled');
        }

        // events:
        inputEl.addEventListener('focus', onInputFocus);
        inputEl.addEventListener('blur', onInputBlur);
    });

    function onInputFocus(ev) {
        classie.add(ev.target.parentNode, 'input--filled');
    }

    function onInputBlur(ev) {
        if (ev.target.value.trim() === '') {
            classie.remove(ev.target.parentNode, 'input--filled');
        }
    }
})();

< /script> < script > (function () {
    var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    if (isSafari) {
        document.getElementById('support-note').style.display = 'block';
    }
})();

< /script>
