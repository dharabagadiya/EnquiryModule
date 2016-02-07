var pin_format = /^\d{6}$/;
var number_only = /[^0-9]/g;
var email_format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var mobile_num_format = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

$(document).ready(function () {
    current_slide = 1;
    slide_left = 0;
    slider_width = $('.form_slider').width();
    total_slides = $('.form_slider .slides').length;
    total_slides_width = slider_width * total_slides;
    $('.prev_slide').addClass('disabled');
    $('.slides_group').width(total_slides_width);
    $('.form_slider .slides').width(slider_width);

    $('.continue_btn').click(function () {
        $('.next_slide').trigger('click');
    });

    $('.radio_options .option_box').click(function () {
        $(this).parents('.radio_options').find('.option_box.selected').removeClass('selected');
        $(this).addClass('selected');
    });

    $('.check_options .option_box').toggle(function () {
        $(this).addClass("selected");
    }, function () {
        $(this).removeClass("selected");
    }
	);

});

function next_slide() {
    slide_left_minus = -Math.abs(slider_width);
    $('.slides_group').animate({ marginLeft: slide_left + slide_left_minus + 'px' }, function () {
        slide_left = parseInt($('.slides_group').css('margin-left'));
        current_slide++;
    });
}

function prev_slide() {
    if (slide_left != 0) {
        $('.slides_group').animate({ marginLeft: slide_left + slider_width + 'px' }, function () {
            slide_left = parseInt($('.slides_group').css('margin-left'));
            current_slide--;
            if (slide_left == 0) {
                $('.prev_slide').addClass('disabled');
            }
        });
    }
    $('.next_slide.disabled').removeClass('disabled');
}
