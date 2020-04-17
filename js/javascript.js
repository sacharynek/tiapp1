// var arrow = document.getElementById("arrow")
//
// var $arow = $("body #arrow")
// 4arrow.addEventListener()

var $arrow = $("#arrow a");



$("#arrow").on("click", function () {
    $("body, html").animate({
        scrollTop: $("main").offset().top
    }, 1000);
});


const hamburger =document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);




