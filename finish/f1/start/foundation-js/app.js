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
