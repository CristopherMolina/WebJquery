$(document).ready(function(){

    // Menu de navegacion
    var activo = true;

    $('.btn-menu').click(function (e) { 
        e.preventDefault();
        
        // Intercalar iconos
        $('.btn-menu i').toggleClass('fa-times');

        // Animacion menu
        if(activo){
            $('.list-container').animate({
                left: '0px'
            },500);

            activo = false;
        }else{
            activo = true;

            $('.list-container').animate({
                left: '-100%'
            },500);

            activo = true;
        }
    });

    // Intercalar clase 'activo', enlaces del menu

    var enlaces = document.querySelectorAll('.list li a');

    enlaces.forEach((element) => {
        element.addEventListener('click', (event) => {
            enlaces.forEach((link) => {
                link.classList.remove('activo');
            });

            event.target.classList.add('activo');
            $('.list-container').animate({
                left: '-100%'
            },500);
            $('.btn-menu i').toggleClass('fa-times');
            activo = true;
        });
    });

    // Scroll efect

    var prevScrollPos = window.pageYOffset;
    window.onscroll = () => {

        // Ocultar y mostrar menu al hacer scroll
        var currentScrollPos = window.pageYOffset;

        if(prevScrollPos > currentScrollPos){
            $('.menu').css({'top': '0px', 'transition':'0.5s'});
        }else{
            $('.menu').css({'top': '-60px', 'transition':'0.5s'});
        }
    prevScrollPos = currentScrollPos;

    // Condiciones
    var posicion = window.pageYOffset;

    if(posicion <= 600) {
        //Ocultar estilos menu scroll
        $('.menu').css('borderBottom','none');

        //Ocultar ir arriba
        $('.go-top').css('right','-100%');
    }else{
        //Mostrar estilos menu scroll
        $('.menu').css('borderBottom','3px solid #ff2e63');

        //Mostrar ir arriba
        $('.go-top').css('right','0');
        $('.go-top').css('transition','500ms');
    }
    };

// Funcion ir arriba
$('.go-top').on('click',function() {
    $('body, html').animate({
        scrollTop: '0'
    },500);
});

// Funcion ver abajo
$('#abajo').on('click',function() {
    $('body, html').animate({
        scrollTop: '600px'
    },500);
});

$('.send').click(function (e) { 
    e.preventDefault();    
});

});