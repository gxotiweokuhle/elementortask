$(document).ready(function () {
    let currentSlide = 0;
    function showSlide(index) {
        const slides = $('.slide');
        const dots = $('.dot');
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        slides.css('transform', `translateX(${-100 * currentSlide}%)`);
        dots.removeClass('active');
        dots.eq(currentSlide).addClass('active');
    }
    function changeSlide(offset) {
        showSlide(currentSlide + offset);
    }
    $('.arrow.prev').on('click', function () {
        changeSlide(-1);
    });
    $('.arrow.next').on('click', function () {
        changeSlide(1);
    });
    const dotsContainer = $('.dots-container');
    const slides = $('.slide');
    slides.each(function (i) {
        const dot = $('<span class="dot"></span>');
        dot.on('click', function () {
            showSlide(i);
        });
        dotsContainer.append(dot);
    });
    showSlide(currentSlide);
});

  