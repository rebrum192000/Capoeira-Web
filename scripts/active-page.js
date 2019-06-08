document.addEventListener("DOMContentLoaded", function(event) { 
  
	var menu = document.querySelector(".nav__list");
	var link = document.querySelector(".nav__item-link");

	link.onclick = function(){

	if (document.link.classList.contains('active-page')) {
   		document.link.classList.remove('active-page');
	}
		document.link.classList.add('active-page');
};
})