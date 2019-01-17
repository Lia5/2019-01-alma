$(function() {

    //select-number form
    if(jQuery('.phone-mask').length) {
        jQuery(function($){
        $(".phone-mask").mask("+38(999) 999-9999");
    });
    } 

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
    });
    
        //BEGIN copyright
        var copyYear = new Date();
        document.getElementById('copy').innerHTML = copyYear.getFullYear()
        //END copyright
        
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
    //scrolling
    var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
        V = 0.25; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
            e.preventDefault(); //отменяем стандартное поведение
            var w = window.pageYOffset, // производим прокрутка прокрутка
                hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
            t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
                start = null;
            requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
                window.scrollTo(0, r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash // URL с хэшем
                }
            }
            var nav = document.querySelector('.main-menu');
            nav.classList.toggle('active');
        }, false);
    }
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


