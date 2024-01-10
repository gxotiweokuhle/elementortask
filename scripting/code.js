$(document).ready(function () {
    var slideCount = $('#slider .slide').length;
    var currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            index = slideCount - 1;
        } else if (index >= slideCount) {
            index = 0;
        }

        // Hide all slides
        $('.slide').hide();
        
        // Show the selected slide
        $('#slider .slide').eq(index).fadeIn();

        currentIndex = index;
    }

    // You can set an interval for automatic sliding
    // setInterval(function () {
    //     showSlide(currentIndex + 1);
    // }, 3000);

    // Next button click event
    $('#next-btn').click(function () {
        showSlide(currentIndex + 1);
    });

    // Previous button click event
    $('#prev-btn').click(function () {
        showSlide(currentIndex - 1);
    });

    // Initial slide display
    showSlide(currentIndex);
});