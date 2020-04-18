// var arrow = document.getElementById("arrow")
//
// var $arow = $("body #arrow")
// 4arrow.addEventListener()

var $arrow = $("#arrow a");

var $arrowDown = $("#arrowDown a");


$("#arrow").on("click", function () {
    $("body, html").animate({
        scrollTop: $("main").offset().top
    }, 1000);
});

$("#arrowDown").on("click", function () {
    $("body, html").animate({
        scrollTop: -$("main").offset().top
    }, 1000);
});


const hamburger =document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);


// $("#formoid").submit(function(event) {
//     /* stop form from submitting normally */
//     event.preventDefault();
//     /* get the action attribute from the <form action=""> element */
//     var $form = $( this ), url = $form.attr( 'action' );
//
//     /* Send the data using post with element id name and name2*/
//     var posting = $.post( url, { name: $('#name').val(), name2: $('#name2').val() } );
//
//     /* Alerts the results */
//     posting.done(function( data ) {
//         alert('success');
//     });
// });




