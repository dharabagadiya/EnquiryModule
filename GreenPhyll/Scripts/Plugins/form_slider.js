// JavaScript Document$(document).ready(function(){


$(document).ready(function () {

    var slider_width = $('#form_slider').width();
    var total_slides = $('#form_slider .slides').length;
    var total_slides_width = slider_width * total_slides;
    var slide_left = 0;
    var slide_left_minus = -Math.abs(slider_width);
    $('#slides_group').width(total_slides_width);
    $('#form_slider .slides').width(slider_width);

    $('.next_slide').click(function () {
        if (slide_left != -Math.abs(total_slides_width - slider_width)) {
            $('.next_slide.disabled').removeClass('disabled');
            $('#slides_group').animate({ left: slide_left + slide_left_minus + 'px' }, function () {
                slide_left = parseInt($('#slides_group').css('left'));
                if (slide_left == -Math.abs(total_slides_width - slider_width)) {
                    $('.next_slide').addClass('disabled');
                }
            });
        }
        $('.prev_slide.disabled').removeClass('disabled');
    });

    $('.continue_btn').click(function () {
        $('.next_slide').trigger('click');
    });

    $('.prev_slide').click(function () {
        if (slide_left != 0) {
            $('.prev_slide.disabled').removeClass('disabled');
            $('#slides_group').animate({ left: slide_left + slider_width + 'px' }, function () {
                slide_left = parseInt($('#slides_group').css('left'));
                if (slide_left == 0) {
                    $('.prev_slide').addClass('disabled');
                }
            });
        }
        $('.next_slide.disabled').removeClass('disabled');

    });

    $('.radio_options ').each(function () {
        var currentObj = $(this);
        currentObj.find(".option_box").click(function () {
            currentObj.find('.option_box.selected').removeClass('selected');
            $(this).addClass('selected');
        });
    });

    $('.check_options .option_box').toggle(function () {
        $(this).addClass("selected");
    }, function () {
        $(this).removeClass("selected");
    }
	);

})
