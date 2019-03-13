$(function() {
                
    setTimeout(function() {
        $('.intro').removeClass('hidden');
    }, 500);
    
});

var nav = document.getElementById('nav');

       window.onscroll = function () {

         if(window.pageYOffset > 525){

          nav.style.position = "fixed";
          nav.style.top = 0;

          }else{
            // nav.style.position = "absolute";
            nav.style.position = 'relative'; //fixed
            nav.style.top = 100;
          }
       }

       ScrollReveal().reveal('#work');
       ScrollReveal().reveal('.workSection');
       ScrollReveal().reveal('.listProjects');
       ScrollReveal().reveal('.line');
       ScrollReveal().reveal('.text');
       ScrollReveal().reveal('.projectTitle');
       ScrollReveal().reveal('.projectText');
       ScrollReveal().reveal('.imgDate');
       ScrollReveal().reveal('.date');
       ScrollReveal().reveal('#contactTitle');
       ScrollReveal().reveal('.contact');
       ScrollReveal().reveal('.social');
       ScrollReveal().reveal('.link');