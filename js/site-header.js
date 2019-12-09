
// var script = document.createElement('script');
// script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

function overLay(e){
    
    if (e==1){
        document.getElementById('frameOverlay').src ='login.html';
    }
    else if(e==2) {
        document.getElementById('frameOverlay').src ='signUp.html';
    }
    else if(e==3) {
        document.getElementById('frameOverlay').src ='enquiry.html';
    }
    else if(e==4) {
       $("#frameOverlay",parent.document).attr('src', 'signUp.html');
    }
    
    document.getElementById('div-overlay').style.width = '100%';
}
function closeOverlay() {
    $('document').ready(function(){
        $("#div-overlay",parent.document).width('0');
    });
    
}



function validate(e){
    var user = $('#txt_user').val();
    var email = $('#txt_email').val();
    var psswd = $('#txt_psswd').val();
    var confPsswd = $('#txt_conf_psswd').val();
    let namepattern = '/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/';

    $('label').text('');
    if (user == '') {
        document.querySelector('#lbl_user').innerHTML = 'Please enter first name';
        return false;
    } 
    if (email == '') {
        document.querySelector('#lbl_email').innerHTML = 'Please enter email';
        return false;
    }
    if (psswd == '') {
        document.querySelector('#lbl_psswd').innerHTML = 'Please enter password';
        return false;
    }
    
    if (e == 2){
        if (psswd != confPsswd){
            document.querySelector('#lbl_psswd').innerHTML = "Passwords don't match";
            e.preventDefault();
        }

        localStorage.setItem('user', user);
        localStorage.setItem('email', email);
        localStorage.setItem('psswd', psswd);
        document.querySelector('#lbl_psswd').innerHTML = 'User Registered, please login';
        e.preventDefault();
    }
    else {
        if (user == localStorage.user && email == localStorage.email && psswd == localStorage.psswd){
            $("#lbl_home",parent.document).text('Welcome ' + localStorage.user);
            closeOverlay();
        }
        else {
            readFile(user);
        }
    }
}

function readFile(user) {    
    $.getJSON("login.txt", function(json) {       
        for (var i = 0, len = json.length; i < len; i++) {
            console.log(json[i]);

            if (json[i].user == user){
                localStorage.setItem('user', json[i].user);
                localStorage.setItem('email', json[i].email);
                localStorage.setItem('psswd', json[i].psswd);
                $("#lbl_home",parent.document).text('Welcome ' + localStorage.user);
                console.log(localStorage.user);
                $("#div-overlay",parent.document).width('0');
            }
        }

    });

}

let slideIndex = 0;
showSlides();
        
function showSlides() 
{
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length)
    {
        slideIndex = 1;
    }       
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000);
}

