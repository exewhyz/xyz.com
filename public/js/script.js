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

// let form = document.getElementById('form');
// // let submit = document.querySelector('.send');
// form.addEventListener('onsubmit',(event)=>{
// 	event.preventDefault(); //prevents the form from Auto Submitting
// 	let name = get.getElementById('name').value;
// 	let email = get.getElementById('email').value;
// 	let subject = get.getElementById('subject').value;
// 	let query = get.getElementById('query').value;
// 	console.log(name);
// 	console.log(email);
// 	console.log(subject);
// 	console.log(query);
// });



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