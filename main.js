const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');

iconToggle.addEventListener('click', () => {
	navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
	navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
	menuLink.addEventListener('click', () => {
		navbarMenu.classList.remove('active');
	})
})

/*Change background header */
function scrollHeader() {
	const header = document.getElementById('header');
	this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);

/*Hero Type Effects*/
const typed = document.querySelector('.typed');

if (typed) {
	let typed_strings = typed.getAttribute('data-typed-items');
	typed_strings = typed_strings.split(',');
	new Typed('.typed', {
		strings: typed_strings,
		loop:true,
		typeSpeed:100,
		backSpeed:50,
		backDelay:2000
	});
}

/*scroll sections active link*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach(section => {
		const sectionHeight = section.offsetHeight;
		const sectionTop = section.offsetTop - 50;

		let sectionId = section.getAttribute('id');

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link');
		} else {
			document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active-link');
		}

	})
}

window.addEventListener('scroll', scrollActive);

//Resume scroll
const pages = document.querySelectorAll('.page');
const resume = document.querySelector('.resume');

function resumeActive() {
	const scrollY = window.pageYOffset;

	pages.forEach(page => {
		const sectionHeight = page.offsetHeight;
		const sectionTop = page.offsetTop - 120;

		let sectionId = page.getAttribute('id');

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.add('current');
		} else {
			document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.remove('current');
		}
	})
}

window.addEventListener('scroll', resumeActive);

let slideIndex = 1;
let autoSlideInterval;

// Initialize the slideshow
showSlides(slideIndex);

// Start automatic slideshow
startAutoSlide();

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
  // Stop automatic slideshow when user interacts
  stopAutoSlide();
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
  // Stop automatic slideshow when user interacts
  stopAutoSlide();
}

// Function to display slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Function to start automatic slideshow
function startAutoSlide() {
  autoSlideInterval = setInterval(function () {
    plusSlides(1);
  }, 3000); // Change image every 2 seconds
}

// Function to stop automatic slideshow
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Start automatic slideshow initially
startAutoSlide();

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}


/* ++++++++++++ Services Section +++++++++++ */
let modalBtns = document.querySelectorAll('.services_button'),
	modalViews = document.querySelectorAll('.services_modal'),
	modalClose = document.querySelectorAll('.modal_close-icon');

let modal = function(modalClick) {
	modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
	modalBtn.addEventListener('click', () => {
		modal(i)
	})
})

modalClose.forEach(el => {
	el.addEventListener('click', () => {
		modalViews.forEach(modalView => {
			modalView.classList.remove('active-modal')
		})
	})
})