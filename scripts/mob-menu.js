var btn = document.querySelector(".header__burger");
var nav = document.querySelector(".header__nav");
var close = document.querySelector(".header__nav-close");

btn.onclick = function(){
	nav.style.display = "block";
	close.style.display = "block";
}
close.onclick = function(){
	nav.style.display = "none";
	close.style.display = "none";
}