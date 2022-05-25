// ---------------------------------------------------------------------------------
// three dot dropdown menu 
document.querySelector(".dd-menu").addEventListener("click", openThreeDotMenu);
document.querySelector(".dd-menu").addEventListener("click", addScaleAnimToDotMenu);

function openThreeDotMenu() {
	console.log("added activeDropdown class")
	document.getElementById("three-dot-dropdown").classList.toggle("activeThreeDotDropdown");
};

function addScaleAnimToDotMenu() {
	console.log("added scale animation class")
	document.getElementById("three-dot-dropdown-container").classList.toggle("scale-dd-anim");
};
// ---------------------------------------------------------------------------------
// about me popup
document.querySelector(".about-popup-btn").addEventListener("click", openAboutPopup);
document.querySelector(".about-popup-close-btn").addEventListener("click", closeAboutPopup);

function openAboutPopup() {
	console.log("added about active popup class")
	document.getElementById("about-popup-ctn").classList.toggle("activeAboutPopup");
};

function closeAboutPopup() {
	console.log("removed about active popup class")
	document.getElementById("about-popup-ctn").classList.remove("activeAboutPopup");
};
// ---------------------------------------------------------------------------------
// contact popup
document.querySelector(".contact-popup-btn").addEventListener("click", openContactPopup);
document.querySelector(".contact-popup-close-btn").addEventListener("click", closeContactPopup);

function openContactPopup() {
	console.log("added contact active popup class")
	document.getElementById("contact-popup-ctn").classList.toggle("activeContactPopup");
};

function closeContactPopup() {
	console.log("removed contact active popup class")
	document.getElementById("contact-popup-ctn").classList.toggle("activeContactPopup");
};
// ---------------------------------------------------------------------------------
// services popup
document.querySelector(".services-popup-btn").addEventListener("click", openServicesPopup);
document.querySelector(".services-popup-close-btn").addEventListener("click", closeServicesPopup);

function openServicesPopup() {
	console.log("added services active popup class")
	document.getElementById("services-popup-ctn").classList.toggle("activeServicesPopup");
};

function closeServicesPopup() {
	console.log("removed services active popup class")
	document.getElementById("services-popup-ctn").classList.toggle("activeServicesPopup");
};
// ---------------------------------------------------------------------------------

