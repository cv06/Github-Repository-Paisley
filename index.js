/**=======================================================================================================================
 *                                                    ANCHOR INDEX ELEMENTS
 *=======================================================================================================================**/

function dropdownToggle() {
	const dropdownMenu = document.querySelector('#dropdown-menu')
	const dropdownToggle = document.querySelector('#dropdown-toggle')
	var dropdownMenuData = dropdownMenu.getAttribute('data-visible')
	if (dropdownMenuData === 'false') {
		dropdownMenu.setAttribute('data-visible', true)
	} else {
		dropdownMenu.setAttribute('data-visible', false)
	}
	var dropdownToggleData = dropdownToggle.getAttribute('data-toggle')
	if (dropdownToggleData === 'false') {
		dropdownToggle.setAttribute('data-toggle', true)
	} else {
		dropdownToggle.setAttribute('data-toggle', false)
	}
}
	function getOffset(el) {
		var _x = 0;
		var _y = 0;
		while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
			_x += el.offsetLeft - el.scrollLeft;
			_y += el.offsetTop - el.scrollTop;
			el = el.offsetParent;
		}
		return {
			top: _y,
			left: _x
		};
	};
window.addEventListener('scroll', function () {
	const header = document.querySelector('#header');
	var scrollPosY = window.scrollY;


	//**------------------ ANCHOR HEADER SCROLL
	var ctaPosY = getOffset(document.getElementById('title-hero__cta')).top;
	ctaPosY += 20;
	var indexHeaderY = getOffset(document.getElementById('title-hero__header')).top;
	indexHeaderY -= 40;
	const headerDataBG = header.getAttribute('data-background');
	const headerDataScroll = header.getAttribute('data-scroll');
	const dropdownMenu = document.querySelector('#dropdown-menu')
	if (scrollPosY >= ctaPosY) {
		if (headerDataScroll === 'false') {
			const dropdownMenu = document.querySelector('#dropdown-menu')
			const dropdownToggle = document.querySelector('#dropdown-toggle')
			header.setAttribute('data-scroll', true);
			dropdownMenu.setAttribute('data-visible', false)
			dropdownToggle.setAttribute('data-toggle', false)
		}
	} else {
		if (headerDataScroll === 'true') {
			header.setAttribute('data-scroll', false);
			dropdownMenu.setAttribute('data-scroll', false)
		}
	}
	if (scrollPosY >= indexHeaderY) {
		if (headerDataBG === 'false') {
			header.setAttribute('data-background', true);
		}
	} else {
		if (headerDataBG === 'true') {
			header.setAttribute('data-background', false);
		}
	}

	//**------------------ ANCHOR OTHER ELEMENTS

})

