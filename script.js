var contactForm = document.querySelector('#contact-form')
contactForm.addEventListener("submit", function(event) {
  console.log('form-submitted');

event.preventDefault();

var formName = document.querySelector('#form-name');
var formEmail = document.querySelector('#form-email');
var formMessage = document.querySelector('#form-message');

console.log(formName.value);

});

console.log('selesai');


