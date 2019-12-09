<<<<<<< HEAD
/*Hotels page*/
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

/*quided tours page*/
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

//validate form for guided tours
window.onload = function() {
    document.getElementById('register').onclick = validate;
};
  
function validate(event) {
    let fname2 = document.querySelector('#fname');
    let namepattern = /^[a-zA-Z]{2,30}$/;
    console.log(namepattern.test(fname2.value));
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
    console.log(emailpattern.test(email.value));
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
    console.log(namepattern1.test(lname2.value));
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
//FAQ page
let questions=["How do I ask a question about a specific destination?",
"If we had not satisfaction of the hotel,do you return our money?","Why Has My Username Been Changed?"];
listQuestion();
function listQuestion()
{
    let result="<ol>";
    for(let i=0; i<questions.length;i++)
    {
            result+='<li>' + questions[i] + '</li>';
    }
    result+='</ol>';
    document.getElementById('displaylist').innerHTML = result;
    
    result="<select id='drpquestion'>";
    for(let i=0;i<questions.length;i++)
    {
            result+='<option value="'+ i +'" >'+questions[i]+'</option>';
    }
    result +='</select>';
    document.getElementById('selectlist').innerHTML = result;
}
function addQuestion(question)
{
    let newquestion= document.getElementById('question').value;
    questions.push(newquestion);
    listQuestion();
}
function deleteQuestion()
{
        let selectedQuestion=document.getElementById('drpquestion').value;
        questions.splice(selectedQuestion, 1);
        listQuestion();
}
=======
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


>>>>>>> 316301478eb75713b3406d8ebce5848e53d2b28c
