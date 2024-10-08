document.addEventListener('DOMContentLoaded', function() {
    (function($) {
        "use strict";

        // Mobile Nav toggle
        $('.menu-toggle > a').on('click', function (e) {
            e.preventDefault();
            $('#responsive-nav').toggleClass('active');
        });

        // Fix cart dropdown from closing
        $('.cart-dropdown').on('click', function (e) {
            e.stopPropagation();
        });

        // Products Slick
        $('.products-slick').each(function() {
            var $this = $(this),
                $nav = $this.attr('data-nav');

            $this.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                infinite: true,
                speed: 300,
                dots: false,
                arrows: true,
                appendArrows: $nav ? $nav : false,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]
            });
        });

        // Product Main img Slick
        $('#product-main-img').slick({
            infinite: true,
            speed: 300,
            dots: false,
            arrows: true,
            fade: true,
            asNavFor: '#product-imgs',
        });

        // Product imgs Slick
        $('#product-imgs').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: 0,
            vertical: true,
            asNavFor: '#product-main-img',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        vertical: false,
                        arrows: false,
                        dots: true,
                    }
                },
            ]
        });

        // Input number handling
        $('.input-number').each(function() {
            var $this = $(this),
                $input = $this.find('input[type="number"]'),
                up = $this.find('.qty-up'),
                down = $this.find('.qty-down');

            down.on('click', function () {
                var value = parseInt($input.val()) - 1;
                value = value < 1 ? 1 : value;
                $input.val(value);
                $input.change();
            });

            up.on('click', function () {
                var value = parseInt($input.val()) + 1;
                $input.val(value);
                $input.change();
            });
        });

    })(jQuery);
});
