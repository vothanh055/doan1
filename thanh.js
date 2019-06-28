$(document).ready(function () {
    $('.show-modal').click(function (e) { 
        e.preventDefault();
        $('.modal').fadeIn(1000);
    $('.from-zui').remove('fadetoTop').addClass('fadeFromTop')


    });
    $('.modal').click(function (e) { 
        e.preventDefault();
        $('.modal').fadeOut();
        $('.from-zui').addClass('fadetoTop').remove('fadeFromTop')

    });
    $('.form-zui').click(function (e) { 
        e.preventDefault();
        e.stopPropagation();
    });
});