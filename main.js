$(document).ready(function () {
   $(".toggleMenu").on("click",function(){
   $(this).toggleClass("open");
   $(".navbar").toggleClass("open");
});
$(".navbar .navLinks").on("click",function(){
   $(".toggleMenu").removeClass("open");
   $(".navbar").removeClass("open");
});
   $('nav a[href*="#"]').on("click",function(){
   $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top- 100} , 2000);
   });
      $('#up').on("click",function(){
      $('html,body').animate({
         scrollTop: 0} , 2000);
      });

   AOS.init({
      easing:"ease",
      duration : 1000,
   });
});