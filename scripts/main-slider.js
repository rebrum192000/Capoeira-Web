if(screen.width > 768){
  var width3 = 720; // ширина блока
    var countVW3 = 1; // количество видимых блоков
    var count3 = 1; // количество сдвигаемых блоков

    var carousel3 = document.querySelector('.index__main-slider-forslider');
    var list3 = carousel3.querySelector('.index__main-slider__wrap');
    var listElems3 = carousel3.querySelectorAll('.index__main-slide');
    var btnBack3 = carousel3.querySelector('.btn-back3');
    var btnNext3 = carousel3.querySelector('.btn-next3');
    var position3 = 0; // текущий сдвиг влево

    var slIndex3 = 1;
    showSlide3(slIndex3);

    function plusSlide3() {
        showSlide3(slIndex3 += 1*count3);
    }
    function minusSlide3() {
        showSlide3(slIndex3 -= 1*count3);
    }
    function currentSlide3(t3) {
        showSlide3(slIndex3 = t3);
    }
    function showSlide3(t3) {
      btnBack3.setAttribute("style", "opacity: 1");
      btnNext3.setAttribute("style", "opacity: 1");
      if (t3 <= 1) {
        slIndex3 = 1;
        btnBack3.setAttribute("style", "opacity: 0.5");
      }
      if (t3 >= listElems3.length - countVW3 + 1) {
        slIndex3 = listElems3.length - countVW3 + 1;
        btnNext3.setAttribute("style", "opacity: 0.5");
      }

      var cnt3 = Math.ceil(slIndex3 / 3);
      position3 = width3 * (slIndex3 - 1);
      list3.style.marginLeft = - position3 + 'px';

      console.log(slIndex3);
      console.log(cnt3);
    }
}    else{
    var width3 = 325; // ширина блока
    var countVW3 = 1; // количество видимых блоков
    var count3 = 1; // количество сдвигаемых блоков

   var carousel3 = document.querySelector('.index__main-slider-forslider');
    var list3 = carousel3.querySelector('.index__main-slider__wrap');
    var listElems3 = carousel3.querySelectorAll('.index__main-slide');
    var btnBack3 = carousel3.querySelector('.btn-back3');
    var btnNext3 = carousel3.querySelector('.btn-next3');
    var position3 = 0; // текущий сдвиг влево

    var slIndex3 = 1;
    showSlide3(slIndex3);

    function plusSlide3() {
        showSlide3(slIndex3 += 1*count3);
    }
    function minusSlide3() {
        showSlide3(slIndex3 -= 1*count3);
    }
    function currentSlide3(t3) {
        showSlide3(slIndex3 = t3);
    }
    function showSlide3(t3) {
      btnBack3.setAttribute("style", "opacity: 1");
      btnNext3.setAttribute("style", "opacity: 1");
      if (t3 <= 1) {
        slIndex3 = 1;
        btnBack3.setAttribute("style", "opacity: 0.5");
      }
      if (t3 >= listElems3.length - countVW3 + 1) {
        slIndex3 = listElems3.length - countVW3 + 1;
        btnNext3.setAttribute("style", "opacity: 0.5");
      }

      var cnt3 = Math.ceil(slIndex3 / 3);
      position3 = width3 * (slIndex3 - 1);
      list3.style.marginLeft = - position3 + 'px';

      console.log(slIndex3);
      console.log(cnt3);
    }
}