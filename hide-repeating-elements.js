$(document).ready(function() {
    //ensure the viewport width is only for tablet and mobile devices
    if ($(window).width() < 981) {
        //jQuery's .addClass() function can accept a callback function as an argument, in which case that callback will be called once per element in the jQuery object.
        //The callback receives the index of the current element as an argument, and the string value returned from the callback should be the name of the class to add to that element.
        $('.menu-cart-info').addClass(function(i) { return "mobile-cart-menu-custom" + (i + 1)})
        //then using css we can display none on the new numbered class divs that we do not need
    }
});