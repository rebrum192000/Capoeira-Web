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


var s1 = document.querySelector('.s1');
var s2 = document.querySelector('.s2');
var s3 = document.querySelector('.s3');
var s4 = document.querySelector('.s4');
var s5 = document.querySelector('.s5');
var s6 = document.querySelector('.s6');
var s7 = document.querySelector('.s7');

var b1 = document.querySelector('.b1');
var b2 = document.querySelector('.b2');
var b3 = document.querySelector('.b3');
var b4 = document.querySelector('.b4');
var b5 = document.querySelector('.b5');
var b6 = document.querySelector('.b6');
var b7 = document.querySelector('.b7');

s1.onclick = function() {
  s1.classList.add("clicked");
  s1.classList.remove("notclicked");
  s2.classList.remove("clicked");
  s2.classList.add("notclicked");
  s3.classList.remove("clicked");
  s3.classList.add("notclicked");
  s4.classList.remove("clicked");
  s4.classList.add("notclicked");
  s5.classList.remove("clicked");
  s5.classList.add("notclicked");
  s6.classList.remove("clicked");
  s6.classList.add("notclicked");
  s7.classList.remove("clicked");
  s7.classList.add("notclicked");
  b1.style.display = "block";
  b2.style.display = "none";
  b3.style.display = "none";
  b4.style.display = "none";
  b5.style.display = "none";
  b6.style.display = "none";
  b7.style.display = "none";
}
s2.onclick = function() {
  s2.classList.add("clicked");
  s2.classList.remove("notclicked");
  s1.classList.remove("clicked");
  s1.classList.add("notclicked");
  s3.classList.remove("clicked");
  s3.classList.add("notclicked");
  s4.classList.remove("clicked");
  s4.classList.add("notclicked");
  s5.classList.remove("clicked");
  s5.classList.add("notclicked");
  s6.classList.remove("clicked");
  s6.classList.add("notclicked");
  s7.classList.remove("clicked");
  s7.classList.add("notclicked");
  b2.style.display = "block";
  b1.style.display = "none";
  b3.style.display = "none";
  b4.style.display = "none";
  b5.style.display = "none";
  b6.style.display = "none";
  b7.style.display = "none";
}
s3.onclick = function() {
  s3.classList.add("clicked");
  s3.classList.remove("notclicked");
  s1.classList.remove("clicked");
  s1.classList.add("notclicked");
  s2.classList.remove("clicked");
  s2.classList.add("notclicked");
  s4.classList.remove("clicked");
  s4.classList.add("notclicked");
  s5.classList.remove("clicked");
  s5.classList.add("notclicked");
  s6.classList.remove("clicked");
  s6.classList.add("notclicked");
  s7.classList.remove("clicked");
  s7.classList.add("notclicked");
  b3.style.display = "block";
  b1.style.display = "none";
  b2.style.display = "none";
  b4.style.display = "none";
  b5.style.display = "none";
  b6.style.display = "none";
  b7.style.display = "none";
}
s4.onclick = function() {
  s4.classList.add("clicked");
  s4.classList.remove("notclicked");
  s1.classList.remove("clicked");
  s1.classList.add("notclicked");
  s2.classList.remove("clicked");
  s2.classList.add("notclicked");
  s3.classList.remove("clicked");
  s3.classList.add("notclicked");
  s5.classList.remove("clicked");
  s5.classList.add("notclicked");
  s6.classList.remove("clicked");
  s6.classList.add("notclicked");
  s7.classList.remove("clicked");
  s7.classList.add("notclicked");
  b4.style.display = "block";
  b1.style.display = "none";
  b2.style.display = "none";
  b3.style.display = "none";
  b5.style.display = "none";
  b6.style.display = "none";
  b7.style.display = "none";
}
s5.onclick = function() {
  s5.classList.add("clicked");
  s5.classList.remove("notclicked");
  s1.classList.remove("clicked");
  s1.classList.add("notclicked");
  s2.classList.remove("clicked");
  s2.classList.add("notclicked");
  s3.classList.remove("clicked");
  s3.classList.add("notclicked");
  s4.classList.remove("clicked");
  s4.classList.add("notclicked");
  s6.classList.remove("clicked");
  s6.classList.add("notclicked");
  s7.classList.remove("clicked");
  s7.classList.add("notclicked");
  b5.style.display = "block";
  b1.style.display = "none";
  b2.style.display = "none";
  b3.style.display = "none";
  b4.style.display = "none";
  b6.style.display = "none";
  b7.style.display = "none";
}
s6.onclick = function() {
  s6.classList.add("clicked");
  s6.classList.remove("notclicked");
  s1.classList.remove("clicked");
  s1.classList.add("notclicked");
  s2.classList.remove("clicked");
  s2.classList.add("notclicked");
  s3.classList.remove("clicked");
  s3.classList.add("notclicked");
  s4.classList.remove("clicked");
  s4.classList.add("notclicked");
  s5.classList.remove("clicked");
  s5.classList.add("notclicked");
  s7.classList.remove("clicked");
  s7.classList.add("notclicked");
  b6.style.display = "block";
  b1.style.display = "none";
  b2.style.display = "none";
  b3.style.display = "none";
  b4.style.display = "none";
  b5.style.display = "none";
  b7.style.display = "none";
}
s7.onclick = function() {
  s7.classList.add("clicked");
  s7.classList.remove("notclicked");
  s1.classList.remove("clicked");
  s1.classList.add("notclicked");
  s2.classList.remove("clicked");
  s2.classList.add("notclicked");
  s3.classList.remove("clicked");
  s3.classList.add("notclicked");
  s4.classList.remove("clicked");
  s4.classList.add("notclicked");
  s5.classList.remove("clicked");
  s5.classList.add("notclicked");
  s6.classList.remove("clicked");
  s6.classList.add("notclicked");
  b7.style.display = "block";
  b1.style.display = "none";
  b2.style.display = "none";
  b3.style.display = "none";
  b4.style.display = "none";
  b5.style.display = "none";
  b6.style.display = "none";
}

var ss1 = document.querySelector('.ss1');
var ss2 = document.querySelector('.ss2');
var ss3 = document.querySelector('.ss3');
var ss4 = document.querySelector('.ss4');
var ss5 = document.querySelector('.ss5');
var ss6 = document.querySelector('.ss6');
var ss7 = document.querySelector('.ss7');

var bb1 = document.querySelector('.bb1');
var bb2 = document.querySelector('.bb2');
var bb3 = document.querySelector('.bb3');
var bb4 = document.querySelector('.bb4');
var bb5 = document.querySelector('.bb5');
var bb6 = document.querySelector('.bb6');
var bb7 = document.querySelector('.bb7');

ss1.onclick = function() {
  ss1.classList.add("clicked");
  ss1.classList.remove("notclicked");
  ss2.classList.remove("clicked");
  ss2.classList.add("notclicked");
  ss3.classList.remove("clicked");
  ss3.classList.add("notclicked");
  ss4.classList.remove("clicked");
  ss4.classList.add("notclicked");
  ss5.classList.remove("clicked");
  ss5.classList.add("notclicked");
  ss6.classList.remove("clicked");
  ss6.classList.add("notclicked");
  ss7.classList.remove("clicked");
  ss7.classList.add("notclicked");
  bb1.style.display = "block";
  bb2.style.display = "none";
  bb3.style.display = "none";
  bb4.style.display = "none";
  bb5.style.display = "none";
  bb6.style.display = "none";
  bb7.style.display = "none";
}
ss2.onclick = function() {
  ss2.classList.add("clicked");
  ss2.classList.remove("notclicked");
  ss1.classList.remove("clicked");
  ss1.classList.add("notclicked");
  ss3.classList.remove("clicked");
  ss3.classList.add("notclicked");
  ss4.classList.remove("clicked");
  ss4.classList.add("notclicked");
  ss5.classList.remove("clicked");
  ss5.classList.add("notclicked");
  ss6.classList.remove("clicked");
  ss6.classList.add("notclicked");
  ss7.classList.remove("clicked");
  ss7.classList.add("notclicked");
  bb2.style.display = "block";
  bb1.style.display = "none";
  bb3.style.display = "none";
  bb4.style.display = "none";
  bb5.style.display = "none";
  bb6.style.display = "none";
  bb7.style.display = "none";
}
ss3.onclick = function() {
  ss3.classList.add("clicked");
  ss3.classList.remove("notclicked");
  ss1.classList.remove("clicked");
  ss1.classList.add("notclicked");
  ss2.classList.remove("clicked");
  ss2.classList.add("notclicked");
  ss4.classList.remove("clicked");
  ss4.classList.add("notclicked");
  ss5.classList.remove("clicked");
  ss5.classList.add("notclicked");
  ss6.classList.remove("clicked");
  ss6.classList.add("notclicked");
  ss7.classList.remove("clicked");
  ss7.classList.add("notclicked");
  bb3.style.display = "block";
  bb1.style.display = "none";
  bb2.style.display = "none";
  bb4.style.display = "none";
  bb5.style.display = "none";
  bb6.style.display = "none";
  bb7.style.display = "none";
}
ss4.onclick = function() {
  ss4.classList.add("clicked");
  ss4.classList.remove("notclicked");
  ss1.classList.remove("clicked");
  ss1.classList.add("notclicked");
  ss2.classList.remove("clicked");
  ss2.classList.add("notclicked");
  ss3.classList.remove("clicked");
  ss3.classList.add("notclicked");
  ss5.classList.remove("clicked");
  ss5.classList.add("notclicked");
  ss6.classList.remove("clicked");
  ss6.classList.add("notclicked");
  ss7.classList.remove("clicked");
  ss7.classList.add("notclicked");
  bb4.style.display = "block";
  bb1.style.display = "none";
  bb2.style.display = "none";
  bb3.style.display = "none";
  bb5.style.display = "none";
  bb6.style.display = "none";
  bb7.style.display = "none";
}
ss5.onclick = function() {
  ss5.classList.add("clicked");
  ss5.classList.remove("notclicked");
  ss1.classList.remove("clicked");
  ss1.classList.add("notclicked");
  ss2.classList.remove("clicked");
  ss2.classList.add("notclicked");
  ss3.classList.remove("clicked");
  ss3.classList.add("notclicked");
  ss4.classList.remove("clicked");
  ss4.classList.add("notclicked");
  ss6.classList.remove("clicked");
  ss6.classList.add("notclicked");
  ss7.classList.remove("clicked");
  ss7.classList.add("notclicked");
  bb5.style.display = "block";
  bb1.style.display = "none";
  bb2.style.display = "none";
  bb3.style.display = "none";
  bb4.style.display = "none";
  bb6.style.display = "none";
  bb7.style.display = "none";
}
ss6.onclick = function() {
  ss6.classList.add("clicked");
  ss6.classList.remove("notclicked");
  ss1.classList.remove("clicked");
  ss1.classList.add("notclicked");
  ss2.classList.remove("clicked");
  ss2.classList.add("notclicked");
  ss3.classList.remove("clicked");
  ss3.classList.add("notclicked");
  ss4.classList.remove("clicked");
  ss4.classList.add("notclicked");
  ss5.classList.remove("clicked");
  ss5.classList.add("notclicked");
  ss7.classList.remove("clicked");
  ss7.classList.add("notclicked");
  bb6.style.display = "block";
  bb1.style.display = "none";
  bb2.style.display = "none";
  bb3.style.display = "none";
  bb4.style.display = "none";
  bb5.style.display = "none";
  bb7.style.display = "none";
}
ss7.onclick = function() {
  ss7.classList.add("clicked");
  ss7.classList.remove("notclicked");
  ss1.classList.remove("clicked");
  ss1.classList.add("notclicked");
  ss2.classList.remove("clicked");
  ss2.classList.add("notclicked");
  ss3.classList.remove("clicked");
  ss3.classList.add("notclicked");
  ss4.classList.remove("clicked");
  ss4.classList.add("notclicked");
  ss5.classList.remove("clicked");
  ss5.classList.add("notclicked");
  ss6.classList.remove("clicked");
  ss6.classList.add("notclicked");
  bb7.style.display = "block";
  bb1.style.display = "none";
  bb2.style.display = "none";
  bb3.style.display = "none";
  bb4.style.display = "none";
  bb5.style.display = "none";
  bb6.style.display = "none";
}

var sss1 = document.querySelector('.sss1');
var sss2 = document.querySelector('.sss2');
var sss3 = document.querySelector('.sss3');
var sss4 = document.querySelector('.sss4');
var sss5 = document.querySelector('.sss5');
var sss6 = document.querySelector('.sss6');
var sss7 = document.querySelector('.sss7');

var bbb1 = document.querySelector('.bbb1');
var bbb2 = document.querySelector('.bbb2');
var bbb3 = document.querySelector('.bbb3');
var bbb4 = document.querySelector('.bbb4');
var bbb5 = document.querySelector('.bbb5');
var bbb6 = document.querySelector('.bbb6');
var bbb7 = document.querySelector('.bbb7');

sss1.onclick = function() {
  sss1.classList.add("clicked");
  sss1.classList.remove("notclicked");
  sss2.classList.remove("clicked");
  sss2.classList.add("notclicked");
  sss3.classList.remove("clicked");
  sss3.classList.add("notclicked");
  sss4.classList.remove("clicked");
  sss4.classList.add("notclicked");
  sss5.classList.remove("clicked");
  sss5.classList.add("notclicked");
  sss6.classList.remove("clicked");
  sss6.classList.add("notclicked");
  sss7.classList.remove("clicked");
  sss7.classList.add("notclicked");
  bbb1.style.display = "block";
  bbb2.style.display = "none";
  bbb3.style.display = "none";
  bbb4.style.display = "none";
  bbb5.style.display = "none";
  bbb6.style.display = "none";
  bbb7.style.display = "none";
}
sss2.onclick = function() {
  sss2.classList.add("clicked");
  sss2.classList.remove("notclicked");
  sss1.classList.remove("clicked");
  sss1.classList.add("notclicked");
  sss3.classList.remove("clicked");
  sss3.classList.add("notclicked");
  sss4.classList.remove("clicked");
  sss4.classList.add("notclicked");
  sss5.classList.remove("clicked");
  sss5.classList.add("notclicked");
  sss6.classList.remove("clicked");
  sss6.classList.add("notclicked");
  sss7.classList.remove("clicked");
  sss7.classList.add("notclicked");
  bbb2.style.display = "block";
  bbb1.style.display = "none";
  bbb3.style.display = "none";
  bbb4.style.display = "none";
  bbb5.style.display = "none";
  bbb6.style.display = "none";
  bbb7.style.display = "none";
}
sss3.onclick = function() {
  sss3.classList.add("clicked");
  sss3.classList.remove("notclicked");
  sss1.classList.remove("clicked");
  sss1.classList.add("notclicked");
  sss2.classList.remove("clicked");
  sss2.classList.add("notclicked");
  sss4.classList.remove("clicked");
  sss4.classList.add("notclicked");
  sss5.classList.remove("clicked");
  sss5.classList.add("notclicked");
  sss6.classList.remove("clicked");
  sss6.classList.add("notclicked");
  sss7.classList.remove("clicked");
  sss7.classList.add("notclicked");
  bbb3.style.display = "block";
  bbb1.style.display = "none";
  bbb2.style.display = "none";
  bbb4.style.display = "none";
  bbb5.style.display = "none";
  bbb6.style.display = "none";
  bbb7.style.display = "none";
}
sss4.onclick = function() {
  sss4.classList.add("clicked");
  sss4.classList.remove("notclicked");
  sss1.classList.remove("clicked");
  sss1.classList.add("notclicked");
  sss2.classList.remove("clicked");
  sss2.classList.add("notclicked");
  sss3.classList.remove("clicked");
  sss3.classList.add("notclicked");
  sss5.classList.remove("clicked");
  sss5.classList.add("notclicked");
  sss6.classList.remove("clicked");
  sss6.classList.add("notclicked");
  sss7.classList.remove("clicked");
  sss7.classList.add("notclicked");
  bbb4.style.display = "block";
  bbb1.style.display = "none";
  bbb2.style.display = "none";
  bbb3.style.display = "none";
  bbb5.style.display = "none";
  bbb6.style.display = "none";
  bbb7.style.display = "none";
}
sss5.onclick = function() {
  sss5.classList.add("clicked");
  sss5.classList.remove("notclicked");
  sss1.classList.remove("clicked");
  sss1.classList.add("notclicked");
  sss2.classList.remove("clicked");
  sss2.classList.add("notclicked");
  sss3.classList.remove("clicked");
  sss3.classList.add("notclicked");
  sss4.classList.remove("clicked");
  sss4.classList.add("notclicked");
  sss6.classList.remove("clicked");
  sss6.classList.add("notclicked");
  sss7.classList.remove("clicked");
  sss7.classList.add("notclicked");
  bbb5.style.display = "block";
  bbb1.style.display = "none";
  bbb2.style.display = "none";
  bbb3.style.display = "none";
  bbb4.style.display = "none";
  bbb6.style.display = "none";
  bbb7.style.display = "none";
}
sss6.onclick = function() {
  sss6.classList.add("clicked");
  sss6.classList.remove("notclicked");
  sss1.classList.remove("clicked");
  sss1.classList.add("notclicked");
  sss2.classList.remove("clicked");
  sss2.classList.add("notclicked");
  sss3.classList.remove("clicked");
  sss3.classList.add("notclicked");
  sss4.classList.remove("clicked");
  sss4.classList.add("notclicked");
  sss5.classList.remove("clicked");
  sss5.classList.add("notclicked");
  sss7.classList.remove("clicked");
  sss7.classList.add("notclicked");
  bbb6.style.display = "block";
  bbb1.style.display = "none";
  bbb2.style.display = "none";
  bbb3.style.display = "none";
  bbb4.style.display = "none";
  bbb5.style.display = "none";
  bbb7.style.display = "none";
}
sss7.onclick = function() {
  sss7.classList.add("clicked");
  sss7.classList.remove("notclicked");
  sss1.classList.remove("clicked");
  sss1.classList.add("notclicked");
  sss2.classList.remove("clicked");
  sss2.classList.add("notclicked");
  sss3.classList.remove("clicked");
  sss3.classList.add("notclicked");
  sss4.classList.remove("clicked");
  sss4.classList.add("notclicked");
  sss5.classList.remove("clicked");
  sss5.classList.add("notclicked");
  sss6.classList.remove("clicked");
  sss6.classList.add("notclicked");
  bbb7.style.display = "block";
  bbb1.style.display = "none";
  bbb2.style.display = "none";
  bbb3.style.display = "none";
  bbb4.style.display = "none";
  bbb5.style.display = "none";
  bbb6.style.display = "none";
}

var ssss1 = document.querySelector('.ssss1');
var ssss2 = document.querySelector('.ssss2');
var ssss3 = document.querySelector('.ssss3');
var ssss4 = document.querySelector('.ssss4');
var ssss5 = document.querySelector('.ssss5');
var ssss6 = document.querySelector('.ssss6');
var ssss7 = document.querySelector('.ssss7');

var bbbb1 = document.querySelector('.bbbb1');
var bbbb2 = document.querySelector('.bbbb2');
var bbbb3 = document.querySelector('.bbbb3');
var bbbb4 = document.querySelector('.bbbb4');
var bbbb5 = document.querySelector('.bbbb5');
var bbbb6 = document.querySelector('.bbbb6');
var bbbb7 = document.querySelector('.bbbb7');

ssss1.onclick = function() {
  ssss1.classList.add("clicked");
  ssss1.classList.remove("notclicked");
  ssss2.classList.remove("clicked");
  ssss2.classList.add("notclicked");
  ssss3.classList.remove("clicked");
  ssss3.classList.add("notclicked");
  ssss4.classList.remove("clicked");
  ssss4.classList.add("notclicked");
  ssss5.classList.remove("clicked");
  ssss5.classList.add("notclicked");
  ssss6.classList.remove("clicked");
  ssss6.classList.add("notclicked");
  ssss7.classList.remove("clicked");
  ssss7.classList.add("notclicked");
  bbbb1.style.display = "block";
  bbbb2.style.display = "none";
  bbbb3.style.display = "none";
  bbbb4.style.display = "none";
  bbbb5.style.display = "none";
  bbbb6.style.display = "none";
  bbbb7.style.display = "none";
}
ssss2.onclick = function() {
  ssss2.classList.add("clicked");
  ssss2.classList.remove("notclicked");
  ssss1.classList.remove("clicked");
  ssss1.classList.add("notclicked");
  ssss3.classList.remove("clicked");
  ssss3.classList.add("notclicked");
  ssss4.classList.remove("clicked");
  ssss4.classList.add("notclicked");
  ssss5.classList.remove("clicked");
  ssss5.classList.add("notclicked");
  ssss6.classList.remove("clicked");
  ssss6.classList.add("notclicked");
  ssss7.classList.remove("clicked");
  ssss7.classList.add("notclicked");
  bbbb2.style.display = "block";
  bbbb1.style.display = "none";
  bbbb3.style.display = "none";
  bbbb4.style.display = "none";
  bbbb5.style.display = "none";
  bbbb6.style.display = "none";
  bbbb7.style.display = "none";
}
ssss3.onclick = function() {
  ssss3.classList.add("clicked");
  ssss3.classList.remove("notclicked");
  ssss1.classList.remove("clicked");
  ssss1.classList.add("notclicked");
  ssss2.classList.remove("clicked");
  ssss2.classList.add("notclicked");
  ssss4.classList.remove("clicked");
  ssss4.classList.add("notclicked");
  ssss5.classList.remove("clicked");
  ssss5.classList.add("notclicked");
  ssss6.classList.remove("clicked");
  ssss6.classList.add("notclicked");
  ssss7.classList.remove("clicked");
  ssss7.classList.add("notclicked");
  bbbb3.style.display = "block";
  bbbb1.style.display = "none";
  bbbb2.style.display = "none";
  bbbb4.style.display = "none";
  bbbb5.style.display = "none";
  bbbb6.style.display = "none";
  bbbb7.style.display = "none";
}
ssss4.onclick = function() {
  ssss4.classList.add("clicked");
  ssss4.classList.remove("notclicked");
  ssss1.classList.remove("clicked");
  ssss1.classList.add("notclicked");
  ssss2.classList.remove("clicked");
  ssss2.classList.add("notclicked");
  ssss3.classList.remove("clicked");
  ssss3.classList.add("notclicked");
  ssss5.classList.remove("clicked");
  ssss5.classList.add("notclicked");
  ssss6.classList.remove("clicked");
  ssss6.classList.add("notclicked");
  ssss7.classList.remove("clicked");
  ssss7.classList.add("notclicked");
  bbbb4.style.display = "block";
  bbbb1.style.display = "none";
  bbbb2.style.display = "none";
  bbbb3.style.display = "none";
  bbbb5.style.display = "none";
  bbbb6.style.display = "none";
  bbbb7.style.display = "none";
}
ssss5.onclick = function() {
  ssss5.classList.add("clicked");
  ssss5.classList.remove("notclicked");
  ssss1.classList.remove("clicked");
  ssss1.classList.add("notclicked");
  ssss2.classList.remove("clicked");
  ssss2.classList.add("notclicked");
  ssss3.classList.remove("clicked");
  ssss3.classList.add("notclicked");
  ssss4.classList.remove("clicked");
  ssss4.classList.add("notclicked");
  ssss6.classList.remove("clicked");
  ssss6.classList.add("notclicked");
  ssss7.classList.remove("clicked");
  ssss7.classList.add("notclicked");
  bbbb5.style.display = "block";
  bbbb1.style.display = "none";
  bbbb2.style.display = "none";
  bbbb3.style.display = "none";
  bbbb4.style.display = "none";
  bbbb6.style.display = "none";
  bbbb7.style.display = "none";
}
ssss6.onclick = function() {
  ssss6.classList.add("clicked");
  ssss6.classList.remove("notclicked");
  ssss1.classList.remove("clicked");
  ssss1.classList.add("notclicked");
  ssss2.classList.remove("clicked");
  ssss2.classList.add("notclicked");
  ssss3.classList.remove("clicked");
  ssss3.classList.add("notclicked");
  ssss4.classList.remove("clicked");
  ssss4.classList.add("notclicked");
  ssss5.classList.remove("clicked");
  ssss5.classList.add("notclicked");
  ssss7.classList.remove("clicked");
  ssss7.classList.add("notclicked");
  bbbb6.style.display = "block";
  bbbb1.style.display = "none";
  bbbb2.style.display = "none";
  bbbb3.style.display = "none";
  bbbb4.style.display = "none";
  bbbb5.style.display = "none";
  bbbb7.style.display = "none";
}
ssss7.onclick = function() {
  ssss7.classList.add("clicked");
  ssss7.classList.remove("notclicked");
  ssss1.classList.remove("clicked");
  ssss1.classList.add("notclicked");
  ssss2.classList.remove("clicked");
  ssss2.classList.add("notclicked");
  ssss3.classList.remove("clicked");
  ssss3.classList.add("notclicked");
  ssss4.classList.remove("clicked");
  ssss4.classList.add("notclicked");
  ssss5.classList.remove("clicked");
  ssss5.classList.add("notclicked");
  ssss6.classList.remove("clicked");
  ssss6.classList.add("notclicked");
  bbbb7.style.display = "block";
  bbbb1.style.display = "none";
  bbbb2.style.display = "none";
  bbbb3.style.display = "none";
  bbbb4.style.display = "none";
  bbbb5.style.display = "none";
  bbbb6.style.display = "none";
}

var sssss1 = document.querySelector('.sssss1');
var sssss2 = document.querySelector('.sssss2');
var sssss3 = document.querySelector('.sssss3');
var sssss4 = document.querySelector('.sssss4');
var sssss5 = document.querySelector('.sssss5');
var sssss6 = document.querySelector('.sssss6');
var sssss7 = document.querySelector('.sssss7');

var bbbbb1 = document.querySelector('.bbbbb1');
var bbbbb2 = document.querySelector('.bbbbb2');
var bbbbb3 = document.querySelector('.bbbbb3');
var bbbbb4 = document.querySelector('.bbbbb4');
var bbbbb5 = document.querySelector('.bbbbb5');
var bbbbb6 = document.querySelector('.bbbbb6');
var bbbbb7 = document.querySelector('.bbbbb7');

sssss1.onclick = function() {
  sssss1.classList.add("clicked");
  sssss1.classList.remove("notclicked");
  sssss2.classList.remove("clicked");
  sssss2.classList.add("notclicked");
  sssss3.classList.remove("clicked");
  sssss3.classList.add("notclicked");
  sssss4.classList.remove("clicked");
  sssss4.classList.add("notclicked");
  sssss5.classList.remove("clicked");
  sssss5.classList.add("notclicked");
  sssss6.classList.remove("clicked");
  sssss6.classList.add("notclicked");
  sssss7.classList.remove("clicked");
  sssss7.classList.add("notclicked");
  bbbbb1.style.display = "block";
  bbbbb2.style.display = "none";
  bbbbb3.style.display = "none";
  bbbbb4.style.display = "none";
  bbbbb5.style.display = "none";
  bbbbb6.style.display = "none";
  bbbbb7.style.display = "none";
}
sssss2.onclick = function() {
  sssss2.classList.add("clicked");
  sssss2.classList.remove("notclicked");
  sssss1.classList.remove("clicked");
  sssss1.classList.add("notclicked");
  sssss3.classList.remove("clicked");
  sssss3.classList.add("notclicked");
  sssss4.classList.remove("clicked");
  sssss4.classList.add("notclicked");
  sssss5.classList.remove("clicked");
  sssss5.classList.add("notclicked");
  sssss6.classList.remove("clicked");
  sssss6.classList.add("notclicked");
  sssss7.classList.remove("clicked");
  sssss7.classList.add("notclicked");
  bbbbb2.style.display = "block";
  bbbbb1.style.display = "none";
  bbbbb3.style.display = "none";
  bbbbb4.style.display = "none";
  bbbbb5.style.display = "none";
  bbbbb6.style.display = "none";
  bbbbb7.style.display = "none";
}
sssss3.onclick = function() {
  sssss3.classList.add("clicked");
  sssss3.classList.remove("notclicked");
  sssss1.classList.remove("clicked");
  sssss1.classList.add("notclicked");
  sssss2.classList.remove("clicked");
  sssss2.classList.add("notclicked");
  sssss4.classList.remove("clicked");
  sssss4.classList.add("notclicked");
  sssss5.classList.remove("clicked");
  sssss5.classList.add("notclicked");
  sssss6.classList.remove("clicked");
  sssss6.classList.add("notclicked");
  sssss7.classList.remove("clicked");
  sssss7.classList.add("notclicked");
  bbbbb3.style.display = "block";
  bbbbb1.style.display = "none";
  bbbbb2.style.display = "none";
  bbbbb4.style.display = "none";
  bbbbb5.style.display = "none";
  bbbbb6.style.display = "none";
  bbbbb7.style.display = "none";
}
sssss4.onclick = function() {
  sssss4.classList.add("clicked");
  sssss4.classList.remove("notclicked");
  sssss1.classList.remove("clicked");
  sssss1.classList.add("notclicked");
  sssss2.classList.remove("clicked");
  sssss2.classList.add("notclicked");
  sssss3.classList.remove("clicked");
  sssss3.classList.add("notclicked");
  sssss5.classList.remove("clicked");
  sssss5.classList.add("notclicked");
  sssss6.classList.remove("clicked");
  sssss6.classList.add("notclicked");
  sssss7.classList.remove("clicked");
  sssss7.classList.add("notclicked");
  bbbbb4.style.display = "block";
  bbbbb1.style.display = "none";
  bbbbb2.style.display = "none";
  bbbbb3.style.display = "none";
  bbbbb5.style.display = "none";
  bbbbb6.style.display = "none";
  bbbbb7.style.display = "none";
}
sssss5.onclick = function() {
  sssss5.classList.add("clicked");
  sssss5.classList.remove("notclicked");
  sssss1.classList.remove("clicked");
  sssss1.classList.add("notclicked");
  sssss2.classList.remove("clicked");
  sssss2.classList.add("notclicked");
  sssss3.classList.remove("clicked");
  sssss3.classList.add("notclicked");
  sssss4.classList.remove("clicked");
  sssss4.classList.add("notclicked");
  sssss6.classList.remove("clicked");
  sssss6.classList.add("notclicked");
  sssss7.classList.remove("clicked");
  sssss7.classList.add("notclicked");
  bbbbb5.style.display = "block";
  bbbbb1.style.display = "none";
  bbbbb2.style.display = "none";
  bbbbb3.style.display = "none";
  bbbbb4.style.display = "none";
  bbbbb6.style.display = "none";
  bbbbb7.style.display = "none";
}
sssss6.onclick = function() {
  sssss6.classList.add("clicked");
  sssss6.classList.remove("notclicked");
  sssss1.classList.remove("clicked");
  sssss1.classList.add("notclicked");
  sssss2.classList.remove("clicked");
  sssss2.classList.add("notclicked");
  sssss3.classList.remove("clicked");
  sssss3.classList.add("notclicked");
  sssss4.classList.remove("clicked");
  sssss4.classList.add("notclicked");
  sssss5.classList.remove("clicked");
  sssss5.classList.add("notclicked");
  sssss7.classList.remove("clicked");
  sssss7.classList.add("notclicked");
  bbbbb6.style.display = "block";
  bbbbb1.style.display = "none";
  bbbbb2.style.display = "none";
  bbbbb3.style.display = "none";
  bbbbb4.style.display = "none";
  bbbbb5.style.display = "none";
  bbbbb7.style.display = "none";
}
sssss7.onclick = function() {
  sssss7.classList.add("clicked");
  sssss7.classList.remove("notclicked");
  sssss1.classList.remove("clicked");
  sssss1.classList.add("notclicked");
  sssss2.classList.remove("clicked");
  sssss2.classList.add("notclicked");
  sssss3.classList.remove("clicked");
  sssss3.classList.add("notclicked");
  sssss4.classList.remove("clicked");
  sssss4.classList.add("notclicked");
  sssss5.classList.remove("clicked");
  sssss5.classList.add("notclicked");
  sssss6.classList.remove("clicked");
  sssss6.classList.add("notclicked");
  bbbbb7.style.display = "block";
  bbbbb1.style.display = "none";
  bbbbb2.style.display = "none";
  bbbbb3.style.display = "none";
  bbbbb4.style.display = "none";
  bbbbb5.style.display = "none";
  bbbbb6.style.display = "none";
}

var ssssss1 = document.querySelector('.ssssss1');
var ssssss2 = document.querySelector('.ssssss2');
var ssssss3 = document.querySelector('.ssssss3');
var ssssss4 = document.querySelector('.ssssss4');
var ssssss5 = document.querySelector('.ssssss5');
var ssssss6 = document.querySelector('.ssssss6');
var ssssss7 = document.querySelector('.ssssss7');

var bbbbbb1 = document.querySelector('.bbbbbb1');
var bbbbbb2 = document.querySelector('.bbbbbb2');
var bbbbbb3 = document.querySelector('.bbbbbb3');
var bbbbbb4 = document.querySelector('.bbbbbb4');
var bbbbbb5 = document.querySelector('.bbbbbb5');
var bbbbbb6 = document.querySelector('.bbbbbb6');
var bbbbbb7 = document.querySelector('.bbbbbb7');

ssssss1.onclick = function() {
  ssssss1.classList.add("clicked");
  ssssss1.classList.remove("notclicked");
  ssssss2.classList.remove("clicked");
  ssssss2.classList.add("notclicked");
  ssssss3.classList.remove("clicked");
  ssssss3.classList.add("notclicked");
  ssssss4.classList.remove("clicked");
  ssssss4.classList.add("notclicked");
  ssssss5.classList.remove("clicked");
  ssssss5.classList.add("notclicked");
  ssssss6.classList.remove("clicked");
  ssssss6.classList.add("notclicked");
  ssssss7.classList.remove("clicked");
  ssssss7.classList.add("notclicked");
  bbbbbb1.style.display = "block";
  bbbbbb2.style.display = "none";
  bbbbbb3.style.display = "none";
  bbbbbb4.style.display = "none";
  bbbbbb5.style.display = "none";
  bbbbbb6.style.display = "none";
  bbbbbb7.style.display = "none";
}
ssssss2.onclick = function() {
  ssssss2.classList.add("clicked");
  ssssss2.classList.remove("notclicked");
  ssssss1.classList.remove("clicked");
  ssssss1.classList.add("notclicked");
  ssssss3.classList.remove("clicked");
  ssssss3.classList.add("notclicked");
  ssssss4.classList.remove("clicked");
  ssssss4.classList.add("notclicked");
  ssssss5.classList.remove("clicked");
  ssssss5.classList.add("notclicked");
  ssssss6.classList.remove("clicked");
  ssssss6.classList.add("notclicked");
  ssssss7.classList.remove("clicked");
  ssssss7.classList.add("notclicked");
  bbbbbb2.style.display = "block";
  bbbbbb1.style.display = "none";
  bbbbbb3.style.display = "none";
  bbbbbb4.style.display = "none";
  bbbbbb5.style.display = "none";
  bbbbbb6.style.display = "none";
  bbbbbb7.style.display = "none";
}
ssssss3.onclick = function() {
  ssssss3.classList.add("clicked");
  ssssss3.classList.remove("notclicked");
  ssssss1.classList.remove("clicked");
  ssssss1.classList.add("notclicked");
  ssssss2.classList.remove("clicked");
  ssssss2.classList.add("notclicked");
  ssssss4.classList.remove("clicked");
  ssssss4.classList.add("notclicked");
  ssssss5.classList.remove("clicked");
  ssssss5.classList.add("notclicked");
  ssssss6.classList.remove("clicked");
  ssssss6.classList.add("notclicked");
  ssssss7.classList.remove("clicked");
  ssssss7.classList.add("notclicked");
  bbbbbb3.style.display = "block";
  bbbbbb1.style.display = "none";
  bbbbbb2.style.display = "none";
  bbbbbb4.style.display = "none";
  bbbbbb5.style.display = "none";
  bbbbbb6.style.display = "none";
  bbbbbb7.style.display = "none";
}
ssssss4.onclick = function() {
  ssssss4.classList.add("clicked");
  ssssss4.classList.remove("notclicked");
  ssssss1.classList.remove("clicked");
  ssssss1.classList.add("notclicked");
  ssssss2.classList.remove("clicked");
  ssssss2.classList.add("notclicked");
  ssssss3.classList.remove("clicked");
  ssssss3.classList.add("notclicked");
  ssssss5.classList.remove("clicked");
  ssssss5.classList.add("notclicked");
  ssssss6.classList.remove("clicked");
  ssssss6.classList.add("notclicked");
  ssssss7.classList.remove("clicked");
  ssssss7.classList.add("notclicked");
  bbbbbb4.style.display = "block";
  bbbbbb1.style.display = "none";
  bbbbbb2.style.display = "none";
  bbbbbb3.style.display = "none";
  bbbbbb5.style.display = "none";
  bbbbbb6.style.display = "none";
  bbbbbb7.style.display = "none";
}
ssssss5.onclick = function() {
  ssssss5.classList.add("clicked");
  ssssss5.classList.remove("notclicked");
  ssssss1.classList.remove("clicked");
  ssssss1.classList.add("notclicked");
  ssssss2.classList.remove("clicked");
  ssssss2.classList.add("notclicked");
  ssssss3.classList.remove("clicked");
  ssssss3.classList.add("notclicked");
  ssssss4.classList.remove("clicked");
  ssssss4.classList.add("notclicked");
  ssssss6.classList.remove("clicked");
  ssssss6.classList.add("notclicked");
  ssssss7.classList.remove("clicked");
  ssssss7.classList.add("notclicked");
  bbbbbb5.style.display = "block";
  bbbbbb1.style.display = "none";
  bbbbbb2.style.display = "none";
  bbbbbb3.style.display = "none";
  bbbbbb4.style.display = "none";
  bbbbbb6.style.display = "none";
  bbbbbb7.style.display = "none";
}
ssssss6.onclick = function() {
  ssssss6.classList.add("clicked");
  ssssss6.classList.remove("notclicked");
  ssssss1.classList.remove("clicked");
  ssssss1.classList.add("notclicked");
  ssssss2.classList.remove("clicked");
  ssssss2.classList.add("notclicked");
  ssssss3.classList.remove("clicked");
  ssssss3.classList.add("notclicked");
  ssssss4.classList.remove("clicked");
  ssssss4.classList.add("notclicked");
  ssssss5.classList.remove("clicked");
  ssssss5.classList.add("notclicked");
  ssssss7.classList.remove("clicked");
  ssssss7.classList.add("notclicked");
  bbbbbb6.style.display = "block";
  bbbbbb1.style.display = "none";
  bbbbbb2.style.display = "none";
  bbbbbb3.style.display = "none";
  bbbbbb4.style.display = "none";
  bbbbbb5.style.display = "none";
  bbbbbb7.style.display = "none";
}
ssssss7.onclick = function() {
  ssssss7.classList.add("clicked");
  ssssss7.classList.remove("notclicked");
  ssssss1.classList.remove("clicked");
  ssssss1.classList.add("notclicked");
  ssssss2.classList.remove("clicked");
  ssssss2.classList.add("notclicked");
  ssssss3.classList.remove("clicked");
  ssssss3.classList.add("notclicked");
  ssssss4.classList.remove("clicked");
  ssssss4.classList.add("notclicked");
  ssssss5.classList.remove("clicked");
  ssssss5.classList.add("notclicked");
  ssssss6.classList.remove("clicked");
  ssssss6.classList.add("notclicked");
  bbbbbb7.style.display = "block";
  bbbbbb1.style.display = "none";
  bbbbbb2.style.display = "none";
  bbbbbb3.style.display = "none";
  bbbbbb4.style.display = "none";
  bbbbbb5.style.display = "none";
  bbbbbb6.style.display = "none";
}


var i1 = document.querySelector('.i1');
var i2 = document.querySelector('.i2');
var i3 = document.querySelector('.i3');
var i4 = document.querySelector('.i4');
var i5 = document.querySelector('.i5');
var i6 = document.querySelector('.i6');

var a1 = document.querySelector('.a1');
var a2 = document.querySelector('.a2');
var a3 = document.querySelector('.a3');
var a4 = document.querySelector('.a4');
var a5 = document.querySelector('.a5');
var a6 = document.querySelector('.a6');

i1.onclick = function() {
  a1.style.display = "block";
  a2.style.display = "none";
  a3.style.display = "none";
  a4.style.display = "none";
  a5.style.display = "none";
  a6.style.display = "none";
  i1.classList.add("clicked");
  i2.classList.remove("clicked");
  i3.classList.remove("clicked");
  i4.classList.remove("clicked");
  i5.classList.remove("clicked");
  i6.classList.remove("clicked");
}
i2.onclick = function() {
  a2.style.display = "block";
  a1.style.display = "none";
  a3.style.display = "none";
  a4.style.display = "none";
  a5.style.display = "none";
  a6.style.display = "none";
  i2.classList.add("clicked");
  i1.classList.remove("clicked");
  i3.classList.remove("clicked");
  i4.classList.remove("clicked");
  i5.classList.remove("clicked");
  i6.classList.remove("clicked");
}
i3.onclick = function() {
  a3.style.display = "block";
  a2.style.display = "none";
  a1.style.display = "none";
  a4.style.display = "none";
  a5.style.display = "none";
  a6.style.display = "none";
  i3.classList.add("clicked");
  i1.classList.remove("clicked");
  i2.classList.remove("clicked");
  i4.classList.remove("clicked");
  i5.classList.remove("clicked");
  i6.classList.remove("clicked");
}
i4.onclick = function() {
  a4.style.display = "block";
  a2.style.display = "none";
  a3.style.display = "none";
  a1.style.display = "none";
  a5.style.display = "none";
  a6.style.display = "none";
  i4.classList.add("clicked");
  i1.classList.remove("clicked");
  i3.classList.remove("clicked");
  i2.classList.remove("clicked");
  i5.classList.remove("clicked");
  i6.classList.remove("clicked");
}
i5.onclick = function() {
  a5.style.display = "block";
  a2.style.display = "none";
  a3.style.display = "none";
  a4.style.display = "none";
  a1.style.display = "none";
  a6.style.display = "none";
  i5.classList.add("clicked");
  i1.classList.remove("clicked");
  i3.classList.remove("clicked");
  i4.classList.remove("clicked");
  i2.classList.remove("clicked");
  i6.classList.remove("clicked");
}
i6.onclick = function() {
  a6.style.display = "block";
  a2.style.display = "none";
  a3.style.display = "none";
  a4.style.display = "none";
  a5.style.display = "none";
  a1.style.display = "none";
  i6.classList.add("clicked");
  i1.classList.remove("clicked");
  i3.classList.remove("clicked");
  i4.classList.remove("clicked");
  i5.classList.remove("clicked");
  i2.classList.remove("clicked");
}