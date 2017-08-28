$(function() {
    $('.sl').on('click', function() {
        $(this).addClass('act');
        $('.sr').removeClass('act');
        $('.pwds').addClass('hide');
        $('.codes').removeClass('hide');
        $('.codes').addClass('bounceInLeft animated');
    })
    $('.sr').on('click', function() {
        $(this).addClass('act');
        $('.sl').removeClass('act');
        $('.pwds').removeClass('hide');
        $('.pwds').addClass('bounceInLeft animated')
        $('.codes').addClass('hide');
    })
})