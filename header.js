// || GET ELEMENTs || ------------------------------------------------------------
const bodyCTN = document.querySelector('.body-ctn');
// hamburger menu
const hamNav = document.querySelector('#hamburger-menu');
const hamToggle = document.querySelector('#hamburger-toggle');
// three dot menu
const dotMenu = document.querySelector('#three-dot-menu');
const dotToggle = document.querySelector('#three-dot-toggle');
// about
const aboutPopup = document.querySelector('#about-popup');
const aboutToggleTrue = document.querySelector('#about-popup-btn');
const aboutToggleFalse = document.querySelector('#close-btn-about-popup');
// contact
const contactPopup = document.querySelector('#contact-popup');
const contactToggleTrue = document.querySelector('#contact-popup-btn');
const contactToggleFalse = document.querySelector('#close-btn-contact-popup');
// || HAMBURGER MENU || ------------------------------------------------------------
hamToggle.addEventListener('click', () => {
	const hamVis = hamNav.getAttribute('data-visible');
	if (hamVis === 'false') {
		hamNav.setAttribute('data-visible', true);
		hamToggle.setAttribute('data-toggle', true)
		console.log(hamVis + ' >' + ' ' + 'toggled attribute to		>	true');
		// if three-dot menu is open
		const dotVis = dotMenu.getAttribute('data-visible');
		if (dotVis === 'true') {
			dotMenu.setAttribute('data-visible', false);
			dotToggle.setAttribute('data-toggle', false)
			console.log(dotVis + ' >' + ' ' + 'toggled attribute to		>	false');
		}
	} else {
		hamNav.setAttribute('data-visible', false);
		hamToggle.setAttribute('data-toggle', false)
		console.log(hamVis + ' >' + 'toggled attribute to	>	false');
	}
});
// || THREE DOT MENU || ------------------------------------------------------------
dotToggle.addEventListener('click', () => {
	const dotVis = dotMenu.getAttribute('data-visible');
	if (dotVis === 'false') {
		dotMenu.setAttribute('data-visible', true);
		dotToggle.setAttribute('data-toggle', true)
		console.log(dotVis + ' >' + ' ' + 'toggled attribute to		>	true');
		// make body out of focus 
		bodyCTN.style.opacity = '0.4'
		bodyCTN.style.transition = 'opacity 500ms'
		// if hamburger menu is open
		const hamVis = hamNav.getAttribute('data-visible');
		if (hamVis === 'true') {
			hamNav.setAttribute('data-visible', false);
			hamToggle.setAttribute('data-toggle', false)
			console.log(hamVis + ' >' + ' ' + 'toggled attribute to		>	false');
		}

	} else {
		bodyCTN.style.opacity = '1.0'
		dotMenu.setAttribute('data-visible', false);
		dotToggle.setAttribute('data-toggle', false)
		console.log(dotVis + ' >' + ':' + 'toggled attribute to		>	false');
	}
});
bodyCTN.addEventListener('click', () => {
	const dotVis = dotMenu.getAttribute('data-visible');
	if (dotVis === 'true') {
		bodyCTN.style.opacity = '1.0'
		dotMenu.setAttribute('data-visible', false);
		dotToggle.setAttribute('data-toggle', false)
		console.log(dotVis + ' >' + ':' + 'toggled attribute to		>	false');
	};
});
// || ABOUT ME POPUP || ------------------------------------------------------------
aboutToggleTrue.addEventListener('click', () => {
	const aboutVis = aboutPopup.getAttribute('data-visible');
	if (aboutVis === 'false') {
		aboutPopup.setAttribute('data-visible', true);
		console.log(aboutVis + ' >' + ' ' + 'toggled attribute to	>	true');
	}
	const contactVis = contactPopup.getAttribute('data-visible');
	if (contactVis === 'true') {
		contactPopup.setAttribute('data-visible', false);
		console.log(contactVis + ' >' + ' ' + 'toggled attribute to	>	false');
	}
});
aboutToggleFalse.addEventListener('click', () => {
	const aboutVis = aboutPopup.getAttribute('data-visible');
	if (aboutVis === 'true') {
		aboutPopup.setAttribute('data-visible', false);
		console.log(aboutVis + ' >' + ' ' + 'toggled attribute to	>	false');
	}
});

// || CONTACT POPUP || ------------------------------------------------------------
contactToggleTrue.addEventListener('click', () => {
	const contactVis = contactPopup.getAttribute('data-visible');
	if (contactVis === 'false') {
		contactPopup.setAttribute('data-visible', true);
		console.log(contactVis + ' >' + ' ' + 'toggled attribute to	>	true');
	}
	const aboutVis = aboutPopup.getAttribute('data-visible');
	if (aboutVis === 'true') {
		aboutPopup.setAttribute('data-visible', false);
		console.log(aboutVis + ' >' + ' ' + 'toggled attribute to	>	false');
	}
});
contactToggleFalse.addEventListener('click', () => {
	const contactVis = contactPopup.getAttribute('data-visible');
	if (contactVis === 'true') {
		contactPopup.setAttribute('data-visible', false);
		console.log(contactVis + ' >' + ' ' + 'toggled attribute to	>	false');
	}
});
