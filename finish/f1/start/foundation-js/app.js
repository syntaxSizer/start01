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

$(document).foundation()
$('a[href^="#"]').on('click', function (event) {

    var target = $($(this).attr('href'));

    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
