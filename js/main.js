//Java Script and jQuery for Hotels page

$(document).ready(function() {
$("#faqs h3").click(function(e) {
    $(this).toggleClass("minus");
    if ($(this).attr("class") == "minus") {
        $(this).next().slideDown();
    }
    else {
        $(this).next().slideUp();
    }
    e.preventDefault();
    return;
}); 
}); 


