var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
var plus2 = document.querySelector(".plus2");
var minus2 = document.querySelector(".minus2");
var plus3 = document.querySelector(".plus3");
var minus3 = document.querySelector(".minus3");
var plus4 = document.querySelector(".plus4");
var minus4 = document.querySelector(".minus4");
var answer = document.querySelector(".wrap");
var answer2 = document.querySelector(".wrap2");
var answer3 = document.querySelector(".wrap3");
var answer4 = document.querySelector(".wrap4");

	plus.onclick = function(){
		answer.style.display = "block";
		plus.style.display = "none";
		minus.style.display = "block";
	}
	minus.onclick = function(){
		answer.style.display = "none";
		plus.style.display = "block";
		minus.style.display = "none";
	}
	plus2.onclick = function(){
		answer2.style.display = "block";
		plus2.style.display = "none";
		minus2.style.display = "block";
	}
	minus2.onclick = function(){
		answer2.style.display = "none";
		plus2.style.display = "block";
		minus2.style.display = "none";
	}
	plus3.onclick = function(){
		answer3.style.display = "block";
		plus3.style.display = "none";
		minus3.style.display = "block";
	}
	minus3.onclick = function(){
		answer3.style.display = "none";
		plus3.style.display = "block";
		minus3.style.display = "none";
	}
	plus4.onclick = function(){
		answer4.style.display = "block";
		plus4.style.display = "none";
		minus4.style.display = "block";
	}
	minus4.onclick = function(){
		answer4.style.display = "none";
		plus4.style.display = "block";
		minus4.style.display = "none";
	}