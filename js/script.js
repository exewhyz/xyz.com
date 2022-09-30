const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

//form

let url = 'https://script.google.com/macros/s/AKfycbxJTJlGIC8zl8rzs-sB0E9cCWAbK2K3d8GumE2I8_DSTSxXA57KUt2195LjiTq2hcxg/exec'
let form = document.querySelector('#form');
let submit = document.querySelector('#submit');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let subject = document.querySelector('#subject');
let query = document.querySelector('#query');
form.addEventListener('submit',(e)=>{e.preventDefault();
	fetch(url,{method : 'POST',body : new FormData(form)})
	.then(
		subject.value='',
		name.value='',
		email.value='',
		query.value='',
		alert('Form Sent Seccessfully')
	);
});

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})