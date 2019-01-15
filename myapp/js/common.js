$(function() {

    //select-number form
    if(jQuery('.phone-mask').length) {
        jQuery(function($){
        $(".phone-mask").mask("+38(999) 999-9999");
    });
    } 

});



document.addEventListener('DOMContentLoaded', function(){
//menu
    var menu = document.querySelector('.toggle-menu');
    menu.addEventListener('click', function(){
        var nav = document.querySelector('.main-menu');
        nav.classList.toggle('active');

    });
    var cross = document.querySelector('.cross');
    cross.addEventListener('click', function(){
        var nav = document.querySelector('.main-menu');
        nav.classList.toggle('active');

    });

});

let sendform = document.querySelector('#sendform'),
    sendformWrap = document.querySelector('.sendform__wrap'),
    sendformClose = document.querySelector('#sendform-close');

function sfOpen() {
    sendformWrap.classList.remove('bounceOutUp');
    sendformWrap.classList.add('bounceInDown');
    sendform.classList.remove('disabled');
    sendform.classList.add('flex');
}

function sfCLose() {
    sendformWrap.classList.remove('bounceInDown');
    sendformWrap.classList.add('bounceOutUp');
    setTimeout("sendform.classList.add('disabled')", 700);
    setTimeout("sendform.classList.remove('flex')", 800);
}

window.addEventListener("DOMContentLoaded", function () {

    sendform.addEventListener('click', e => {
        if (e.target !== sendformWrap && e.target == sendform) {
            sfCLose();
        }
    });

    sendformClose.addEventListener('click', () => {
        sfCLose();
    });
});
