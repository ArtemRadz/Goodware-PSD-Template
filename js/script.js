window.onload = function() {
	var hamburgerBtnOpen = document.querySelector(".hamburger-icon");
	var hamburgerBtnClose = document.querySelector(".hamburger-menu__close-btn");
	var hamburgerMenu = document.querySelector(".hamburger-menu");
	hamburgerBtnOpen.onclick = function() {
		hamburgerMenu.style.marginRight = "0px";
	};
	hamburgerBtnClose.onclick = function() {
		hamburgerMenu.style.marginRight = "-200px";
	};
	$(".header__carousel").slick({
		arrows: false
	});
}