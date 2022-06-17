const titleHero = document.querySelector('#webpage-title-hero');
const socialLinkContainer = document.querySelector('#sm-link-ctn');
const aboutIndexContainer = document.querySelector('#about-ctn-index');
const serviceCTA = document.querySelector('#services-cta');
const mapEmbed = document.querySelector('.map-embed')
const header = document.querySelector('#header');
const headerData = header.getAttribute('data-scroll')
const headerBgData = header.getAttribute('data-bg')
titleHero.style.marginTop = 'calc' + '(' + '150' + 'px' + ')';
socialLinkContainer.style.marginTop = 'calc' + '(' + '640' + 'px' + ')';
aboutIndexContainer.style.marginTop = 'calc' + '(' + '1000' + 'px' + ')';
aboutIndexContainer.style.marginTop = 'calc' + '(' + '880' + 'px' + ')';

window.addEventListener('scroll', function () {
	var indexScroll = window.scrollY;
	// ---- facebook ctn & about & cta scroll
	titleHero.style.marginTop = 'calc' + '(' + '150' + 'px' + ' ' + '+' + ' ' + '-' + indexScroll * 1.2 + 'px'
	')' + ' ' + '!important';
	socialLinkContainer.style.marginTop = 'calc' + '(' + '640' + 'px' + ' ' + '+' + ' ' + '-' + indexScroll * 0.5 + 'px'
	')' + ' ' + '!important';
	serviceCTA.style.marginTop = 'calc' + '(' + '2' + 'rem' + ' ' + '+' + ' ' + '+' + indexScroll * 0.24 + 'px'
	mapEmbed.style.marginTop = 'calc' + '(' + '100' + 'px' + ' ' + '+' + ' ' + '-' + indexScroll * .1 + 'px'
	')' + ' ' + '!important';
	mapEmbed.style.marginBottom = 'calc' + '(' + '2' + 'vw' + ' ' + '+' + ' ' + '+' + indexScroll * .1 + 'px'
	')' + ' ' + '!important';
	// ---- header scroll
	if (headerBgData === 'false') {
		if (indexScroll >= 50) {
			header.setAttribute('data-bg', true);
		} else {
			header.setAttribute('data-bg', false);
		};
	};
	if (headerData === 'false') {
		if (indexScroll >= 150) {
			header.setAttribute('data-scroll', true);
			// ---- anything else that may be open will close as you scroll
			hamNav.setAttribute('data-visible', false);
			hamToggle.setAttribute('data-toggle', false)
			dotMenu.setAttribute('data-visible', false);
			dotToggle.setAttribute('data-toggle', false);
			contactPopup.setAttribute('data-visible', false);
			aboutPopup.setAttribute('data-visible', false);
			bodyCTN.style.opacity = '1.0'
			bodyCTN.style.transition = 'opacity 500ms'
		} else {
			header.setAttribute('data-scroll', false)
		};
	};
	const aboutIndexText = document.querySelector('.about-text-index');
	if (indexScroll >= 450) {
		aboutIndexText.setAttribute('data-background', true);
	} else {
		aboutIndexText.setAttribute('data-background', false);
	};

	const aboutTextBgData = aboutIndexText.getAttribute('data-background');
	if (aboutTextBgData === 'false') {
		socialLinkContainer.setAttribute('data-background', true);
		titleHero.style.opacity = '1';
		titleHero.style.transition = 'opacity 1000ms';
	} else {
		socialLinkContainer.setAttribute('data-background', false);
		titleHero.style.opacity = '0.1';
		titleHero.style.transition = 'opacity 1000ms';
	};
});
titleHero.style.opacity = '1';
titleHero.style.transition = 'opacity 100ms';
socialLinkContainer.addEventListener('mouseover', function () {
	titleHero.style.opacity = '0.1';
	titleHero.style.transition = 'opacity 1000ms';
});
socialLinkContainer.addEventListener('mouseleave', function () {
	titleHero.style.opacity = '1';
});
serviceCTA.addEventListener('mouseenter', function () {
	header.style.opacity = '0.4';
	header.style.transition = 'opacity 500ms';
	socialLinkContainer.style.opacity = '0.4';
	socialLinkContainer.style.transition = 'opacity 500ms';
	aboutIndexContainer.style.opacity = '0.4';
	aboutIndexContainer.style.transition = 'opacity 500ms';
});
serviceCTA.addEventListener('mouseleave', function () {
	header.style.opacity = '1';
	socialLinkContainer.style.opacity = '1';
	aboutIndexContainer.style.opacity = '1';
});
