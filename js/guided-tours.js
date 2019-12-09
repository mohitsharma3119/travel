//Java Script and jQuery for guided Tours page
window.onload = function() {
    document.getElementById('register').onclick = validate;
};
  
function validate(event) {
    let fname2 = document.querySelector('#fname');
    let namepattern = /^[a-zA-Z]{2,30}$/;
    
    if (fname2.value == '') {
      fname2.nextElementSibling.innerHTML = ' Please enter firstname';
    } else if (!namepattern.test(fname2.value)) {
      fname2.nextElementSibling.innerHTML =
        ' Please enter firstname with letter only';
        $("#fn").css({"color": "red"})
    } else {
      fname2.nextElementSibling.innerHTML = 'valid firstname';
    }
  
    let email = document.querySelector('#email');
    let emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (email.value == '') {
      email.nextElementSibling.innerHTML = ' Please enter email address';
    } else if (!emailpattern.test(email.value)) {
      email.nextElementSibling.innerHTML =
        ' Please enter the valid email address ';
        $("#em").css({"color": "red"})
    } else {
      email.nextElementSibling.innerHTML = 'valid email address';
    }

    let lname2 = document.querySelector('#lname');
    let namepattern1 = /^[a-zA-Z]{2,30}$/;
    
    if (lname2.value == '') {
      lname2.nextElementSibling.innerHTML = ' Please enter last name';
    } else if (!namepattern1.test(lname2.value)) {
      lname2.nextElementSibling.innerHTML =
        ' Please enter last name with letter only';
        $("#ln").css({"color": "red"})
    } else {
      lname2.nextElementSibling.innerHTML = 'valid last name';
    }
}

$(document).ready(function() {
	var nextSlide = $("#slides img:first-child");
	var nextSlideSource;

    setInterval( function () {   
       	$("#slide").fadeOut(1000,
       		function () {
       	     	if (nextSlide.next().length == 0) {
					nextSlide = $("#slides img:first-child");
				}
				else {
					nextSlide = nextSlide.next();
				}
				nextSlideSource = nextSlide.attr("src");
				$("#slide").attr("src", nextSlideSource).fadeIn(1000);					
			}
		);    
	},
	3000);
});