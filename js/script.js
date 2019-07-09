AOS.init({
  duration: 1000,
})
$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.materialboxed').materialbox();
  $('.parallax').parallax();
  $('.tabs').tabs();
  $('.datepicker').datepicker();
  $('.tooltipped').tooltip();
  $('.scrollspy').scrollSpy();
  $('.carousel').carousel({
    padding: 100,
  });
  $('.modal').modal();
  $('.collapsible').collapsible();
  $('.scroll-down').click(() => {
  $('html, body').animate({scrollTop: $('section#photos').offset().top }, 'slow');
});
  const typed = new Typed('#typed' , {
    strings:["Hi, I am a professional photographer and editor."],
    backSpeed: 40,
    typeSpeed: 40,
    smartBackspace: true,
    showCursor: false
  })
});