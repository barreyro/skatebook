$(document).ready(function() {
    //carousel
    var listItems = $("#items").children('li'),
        activeImageItems = $('#selector').children('li'),
        listLength = listItems.length,
        current,
        changeTimeout;

    function move(newIndex) {
        var i = newIndex;
        if (newIndex == 'next') {
            i = (current < listLength - 1) ? (current + 1) : 0;
        }
        activeImageItems.removeClass('active').eq(i).addClass('active');
        listItems.fadeOut(400).eq(i).fadeIn(400);

        current = i;

        clearTimeout(changeTimeout);
        changeTimeout = setTimeout(function() {
            move('next');
        }, 4000);
    };

    // clickable circle
    $("#selector li").click(function() {
        var i = $('#selector li').index(this);
        move(i);
    });

    // start carousel
    move('next');

    $("#home_link").click(function() {
        $("#center_view").children().hide();
        $("#home_view").fadeIn(1000);
    });

    $("#video_link").click(function() {
        $("#center_view").children().hide();
        $("#video_view").fadeIn(1000);
    });

    $(".pictures_link").click(function() {
        $("#center_view").children().hide();
        $("#carousel").fadeIn(1000);
    });

    $("#music_link").click(function() {
        $("#center_view").children().hide();
        $("#music_view").fadeIn(1000);
    });
});