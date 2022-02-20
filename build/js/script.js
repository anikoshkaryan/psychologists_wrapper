
//*hamburger-menu part

document.querySelector('.hamburger-menu').addEventListener('click', function (event) {

    event.stopPropagation();

    document.querySelector('.mobile_version').classList.toggle('open');

    document.querySelector('.hamburger-menu').classList.toggle('open');



});

document.querySelector(".mobile-close").addEventListener("click", function (event) {

    event.stopPropagation();

    document.querySelector('.mobile_version').classList.remove('open');

    document.querySelector('.hamburger-menu').classList.remove('open');



});

$(document).on('click', '.questions_item', function(){
    $(this).toggleClass('active');
})





