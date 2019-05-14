console.log('index.js enqueued');
// Begin Vanilla JS Scripts
// let nav_menu = document.getElementById('main-nav');
// let nav_position = nav_menu.offsetTop;
//
// function checkSetSticky() {
//     if(window.pageYOffset > nav_position) {
//       nav_menu.classList.add('fixed-menu');
//     } else {
//       nav_menu.classList.remove('fixed-menu');
//     }
// }



// Begin jQuery Scripts
jQuery(document).ready(function($) {

  $(".scroll-to-element").click(function (e) {
      console.log({this_el: $(this), e_el: e});
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $($(this).attr('data-scroll-to')).offset().top - 50
      }, 2000);
  });
});
