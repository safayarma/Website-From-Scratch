$(document).ready(function () {
    function activeSetup() {
        var urlPath = window.location.pathname
        $('nav a').each(function () {
            var href = $(this).attr('href');
            if (urlPath.endsWith(href)) {
                $(this).closest('li').addClass('active');
            }

        })
    }

    activeSetup();

    $('.myicon').click(function (e) {
        $('#navbar ul').toggleClass('sm-screen');
    })

})
