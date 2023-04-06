$(document).ready(function () {
    $(".wish")
        .mouseenter(function () {
            $(this.firstChild).removeClass("bx bx-heart");
            $(this.firstChild).addClass("bx bxs-heart");
        })
        .mouseleave(function () {
            $(this.firstChild).removeClass("bx bxs-heart");
            $(this.firstChild).addClass("bx bx-heart");
        });

        $(".p-img")
        .mouseenter(function () {
            $(this.childNodes[1]).fadeIn();
            $(this.childNodes[2]).fadeIn();
        })
        .mouseleave(function () {
            $(this.childNodes[1]).fadeOut();
            $(this.childNodes[2]).fadeOut();
        });

        $(".filter-btn")
        .mouseenter(function () {
            $(this.childNodes[1]).show()
        })
        .mouseleave(function () {
            $(this.childNodes[1]).hide()
        });
});
