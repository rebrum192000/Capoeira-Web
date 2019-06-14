var marino = document.querySelector(".schedule__moskow__bg");
var vodnyi = document.querySelector(".schedule__moskow__bg2");
var marinoMap = document.querySelector(".schedule__moskow-img");
var vodnyiMap = document.querySelector(".schedule__moskow-img2");
var activeMap = document.querySelector(".schedule__moskow-maps-img");
var activeMap2 = document.querySelector(".schedule__moskow-maps-img2");
var contacts1 = document.querySelector(".schedule__moskow__bg");
var contacts2 = document.querySelector(".schedule__moskow__bg2");

activeMap.onclick = function(){
	activeMap2.classList.remove('schedule-active');
	activeMap.classList.remove('schedule-inactive');
	activeMap.classList.add('schedule-active');
	activeMap2.classList.add('schedule-inactive');
	marino.style.display = "block";
	contacts1.style.display = "block";
	vodnyi.style.display = "none";
	contacts2.style.display = "none";
	marinoMap.style.display = "block";
	vodnyiMap.style.display = "none";
}
activeMap2.onclick = function(){
	activeMap2.classList.remove('schedule-inactive');
	activeMap.classList.add('schedule-inactive');
	activeMap.classList.remove('schedule-active');
	activeMap2.classList.add('schedule-active');
	vodnyi.style.display = "block";
	contacts2.style.display = "block";
	marino.style.display = "none";
	contacts1.style.display = "none";
	marinoMap.style.display = "none";
	vodnyiMap.style.display = "block";
}