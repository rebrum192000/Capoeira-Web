var width5 = 225; // ширина блока
    var countVW5 = 1; // количество видимых блоков
    var count5 = 1; // количество сдвигаемых блоков

    var carousel5 = document.querySelector('.gallery__events');
    var list5 = carousel5.querySelector('.gallery__events-wrap-nobtn-wrap');
    var listElems5 = carousel5.querySelectorAll('.gallery__events-item');
    var btnBack5 = carousel5.querySelector('.btn-back5');
    var btnNext5 = carousel5.querySelector('.btn-next5');
    var position5 = 0; // текущий сдвиг влево

    var slIndex5 = 1;
    showSlide5(slIndex5);

    function plusSlide5() {
        showSlide5(slIndex5 += 1*count5);
    }
    function minusSlide5() {
        showSlide5(slIndex5 -= 1*count5);
    }
    function currentSlide5(t5) {
        showSlide5(slIndex5 = t5);
    }
    function showSlide5(t5) {
      btnBack5.setAttribute("style", "opacity: 1");
      btnNext5.setAttribute("style", "opacity: 1");
      if (t5 <= 1) {
        slIndex5 = 1;
        btnBack5.setAttribute("style", "opacity: 0.5");
      }
      if (t5 >= listElems5.length - countVW5 + 1) {
        slIndex5 = listElems5.length - countVW5 + 1;
        btnNext5.setAttribute("style", "opacity: 0.5");
      }

      var cnt5 = Math.ceil(slIndex5 / 3);
      position5 = width5 * (slIndex5 - 1);
      list5.style.marginLeft = - position5 + 'px';

      console.log(slIndex5);
      console.log(cnt5);
    }
