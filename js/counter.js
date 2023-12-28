$(document).ready(() =>{
    $('.countup').each(function() {
        const that = $(this),
        countTo = that.attr('data-end');
        $({countNum: 0}).animate({
            countNum: countTo
        },
        {
            duration:4000,
            easing:'linear',
            step: function(){
                that.text(Math.floor(this.countNum));
            }
        });
    });
});