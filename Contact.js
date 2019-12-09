window.onload = function() {
        this.document.getElementById('register').onclick = validate;

}
function validate(event){
    let fname2 = document.querySelector('#name');
    let email2 = document.querySelector('#email');
    let subject2 = document.querySelector('#subject');
    let namepattern = /^[a-zA-Z]{2,30}$/;
    let enamepattern = /^[a-zA-Z0-9@]{2,30}$/;
  
    console.log(namepattern.test(fname2.value))
    console.log(namepattern.test(email2.value))
    console.log(namepattern.test(subject2.value));

if(fname2.value ==''){
    fname2.nextElementSibling.innerHTML= 'Please enter first name';
} else if(!namepattern.test(fname2.value)) {
    fname2.nextElementSibling.innerHTML = 'Please enter first name with letters only';
}else{
    fname2.nextElementSibling.innerHTML = 'valid name';
}
if(email2.value ==''){
    email2.nextElementSibling.innerHTML= 'Please enter email';
} else if(!enamepattern.test(email2.value)) {
    email2.nextElementSibling.innerHTML = 'Please enter email with letters and numbers only';
}else{
    email2.nextElementSibling.innerHTML = 'valid email';
}
if(subject2.value ==''){
    subject2.nextElementSibling.innerHTML= 'Please enter subject';
} else if(!namepattern.test(subject2.value)) {
    subject2.nextElementSibling.innerHTML = 'Please enter subject with letters only';
}else{
    fname2.nextElementSibling.innerHTML = 'valid subject';
}}