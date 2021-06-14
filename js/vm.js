$(document).ready(function() {
    $('.header-ucluga').click(function() {
        if ($('.container-uslug').hasClass('one')) {
            $('.header-ucluga').not($(this)).removeClass('active');
            $('.usluga-body').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
