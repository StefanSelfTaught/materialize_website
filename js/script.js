$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $('.tabs').tabs();
  $('.datepicker').datepicker();
  $('.tooltipped').tooltip();
  $('.scrollspy').scrollSpy();
  $('.carousel').carousel();
  $('.modal').modal();
  $('.materialboxed').materialbox();
  $('.collapsible').collapsible();
  $('.scroll-down').click(() => {
  $('html, body').animate({scrollTop: $('section#photos').offset().top }, 'slow');
});
  const typed = new Typed('#typed', {
    strings:["Hi, I am a professional photographer and editor."],
    backSpeed: 40,
    typeSpeed: 40,
    smartBackspace: true,
    showCursor: false
  })
  $(window).scroll(function(){
    if($(window).scrollTop() > 750){
      $('nav').addClass('deep-purple accent-3');
    } else {
      $('nav').removeClass('deep-purple accent-3');
    }
  })
});