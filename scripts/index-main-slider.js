var slideIndex = 1;
    showSlides(slideIndex);

    /* Устанавливает текущий слайд */
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    /* Основная функция слайдера */
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("index__main-slide");
        var dots = document.getElementsByClassName("index__main-slider-button");
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("index__active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        
        dots[slideIndex - 1].className += " index__active";
    };