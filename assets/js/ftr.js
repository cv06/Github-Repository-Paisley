// ---------------------------------------------------------------------------------
// Footer button 
document.querySelector("#footer-btn").addEventListener("click", showFooter);
document.querySelector("#footer-btn").addEventListener("click", clickedShowFooter);

function showFooter() {
	console.log("footer shown")
	document.getElementById("footer").classList.toggle("showFooter");
}

function clickedShowFooter() {
	document.getElementById("show-ftr-btn").classList.toggle("clickedShowFooter");
	document.getElementById("hide-ftr-btn").classList.toggle("clickedShowFooter");
}
// ---------------------------------------------------------------------------------
