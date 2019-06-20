if(window.innerWidth > 1299){
    var width5 = 1258.5; // ширина блока
    var countVW5 = 1; // количество видимых блоков
    var count5 = 1; // количество сдвигаемых блоков

    var carousel5 = document.querySelector('.index__main-slider');
    var list5 = carousel5.querySelector('.index__main-slider__wrap');
    var listElems5 = carousel5.querySelectorAll('.index__main-slide');
    var position5 = 0; // текущий сдвиг влево

    var slIndex5 = 1;
    showSlide5(slIndex5);

    function plusSlide5() {
    showSlide5(slIndex5 += 1);
    }
    setInterval(function() { 
        plusSlide5();
        },3000);

    function currentSlide5(t5) {
        showSlide5(slIndex5 = t5);
    }
    function showSlide5(t5) {

      if (t5 > listElems5.length - countVW5 + 1) {
        slIndex5 = 1;
    }

      var dots5 = document.getElementsByClassName("index__main-slider-button");
      for (j = 0; j < dots5.length; j++) {
        dots5[j].className = dots5[j].className.replace("index__active", "");
      }
      dots5[slIndex5 - 1].className += " index__active";
      position5 = width5 * (slIndex5 - 1);
      list5.style.marginLeft = - position5 + 'px';

      console.log(slIndex5);
    }
} else if(window.innerWidth > 767){
  
    var width5 = 723.5; // ширина блока
    var countVW5 = 1; // количество видимых блоков
    var count5 = 1; // количество сдвигаемых блоков

    var carousel5 = document.querySelector('.index__main-slider');
    var list5 = carousel5.querySelector('.index__main-slider__wrap');
    var listElems5 = carousel5.querySelectorAll('.index__main-slide');
    var position5 = 0; // текущий сдвиг влево

    var slIndex5 = 1;
    showSlide5(slIndex5);

    function plusSlide5() {
    showSlide5(slIndex5 += 1);
    }
    setInterval(function() { 
        plusSlide5();
        },3000);

    function currentSlide5(t5) {
        showSlide5(slIndex5 = t5);
    }
    function showSlide5(t5) {

      if (t5 > listElems5.length - countVW5 + 1) {
        slIndex5 = 1;
    }

      var dots5 = document.getElementsByClassName("index__main-slider-button");
      for (j = 0; j < dots5.length; j++) {
        dots5[j].className = dots5[j].className.replace("index__active", "");
      }
      dots5[slIndex5 - 1].className += " index__active";
      position5 = width5 * (slIndex5 - 1);
      list5.style.marginLeft = - position5 + 'px';

      console.log(slIndex5);
    }
} else {

    var width5 = 363; // ширина блока
    var countVW5 = 1; // количество видимых блоков
    var count5 = 1; // количество сдвигаемых блоков

    var carousel5 = document.querySelector('.index__main-slider');
    var list5 = carousel5.querySelector('.index__main-slider__wrap');
    var listElems5 = carousel5.querySelectorAll('.index__main-slide');
    var position5 = 0; // текущий сдвиг влево

    var slIndex5 = 1;
    showSlide5(slIndex5);

    function plusSlide5() {
    showSlide5(slIndex5 += 1);
    }
    setInterval(function() { 
        plusSlide5();
        },3000);

    function currentSlide5(t5) {
        showSlide5(slIndex5 = t5);
    }
    function showSlide5(t5) {
      if (t5 > listElems5.length - countVW5 + 1) {
        slIndex5 = 1;
    }
      
      var dots5 = document.getElementsByClassName("index__main-slider-button");
      for (j = 0; j < dots5.length; j++) {
        dots5[j].className = dots5[j].className.replace("index__active", "");
      }
      dots5[slIndex5 - 1].className += " index__active";
      position5 = width5 * (slIndex5 - 1);
      list5.style.marginLeft = - position5 + 'px';

      console.log(slIndex5);
    }
}























// var slideIndex = 1;
//     showSlides(slideIndex);

//     /* Устанавливает текущий слайд */
//     function currentSlide(n) {
//         showSlides(slideIndex = n);
//     }

//     /* Основная функция слайдера */
//     function showSlides(n) {
//         var i;
//         var slides = document.getElementsByClassName("index__main-slide");
//         var dots = document.getElementsByClassName("index__main-slider-button");
//         if (n > slides.length) {
//           slideIndex = 1;
//         }
//         if (n < 1) {
//             slideIndex = slides.length;
//         }
//         for (i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         for (i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace("index__active", "");
//         }
//         slides[slideIndex - 1].style.display = "block";
        
//         dots[slideIndex - 1].className += " index__active";
//     };