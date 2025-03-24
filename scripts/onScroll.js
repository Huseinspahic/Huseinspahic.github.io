$(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
        $("#Introduction").addClass("dim"),
            $("#Introduction").removeClass("undim");
        $("#Introduction").addClass("lax"),
            $("#Introduction").removeClass("unlax");
    } else if ($(window).scrollTop() == 0) {
        $("#Introduction").removeClass("dim"),
            $("#Introduction").addClass("undim");
        $("#Introduction").removeClass("lax"),
            $("#Introduction").addClass("unlax");
    }
});

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
        $("#Container").addClass("lax"),
            $("#Container").removeClass("unlax");
    } else if ($(window).scrollTop() == 0) {
        $("#Container").removeClass("lax"),
            $("#Container").addClass("unlax");
    }
});
