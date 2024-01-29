$(document).ready(function() {
    $(".nav-link, .navbar-brand").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            var targetOffset = $(hash).offset().top;

            // Adjust for the height of the fixed navbar
            var navbarHeight = $('nav').outerHeight();
            var adjustedOffset = targetOffset - navbarHeight;

            $('html, body').animate({
                scrollTop: adjustedOffset
            }, 700);
        }
    });
});