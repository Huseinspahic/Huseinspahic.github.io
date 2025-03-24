$("#myNavbar a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 400, function () {
            window.location.hash = hash;
        });
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > $(document).height() / 5) {
        $("#to-top").removeClass("button_invisible");
    } else {
        $("#to-top").addClass("button_invisible");
    }
});

$("#to-top").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});