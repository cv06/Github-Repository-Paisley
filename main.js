/**=======================================================================================================================
 *                                                    ANCHOR INJECT HTML COMPONENTS
 *=======================================================================================================================**/
fetch('header.html')
	.then(response => response.text())
	.then(text => document.getElementById('header-ctn').innerHTML = text);
fetch('footer.html')
	.then(response => response.text())
	.then(text => document.getElementById('footer').innerHTML = text);
