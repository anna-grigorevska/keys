$(document).ready(function() {
  $('.phone-input').inputmask("+3 8(999) 99-99-999");
  $('.opacity').removeClass('opacity');
  new WOW().init();
  $('.humburger').click(function(){
    $(this).toggleClass('open');
    $('.nav').toggleClass('open');
  })
  $('.scroll').on('click', function(event) {
    let target = $( $(this).attr('href') );
    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 85
      }, 500);
      $('.humburger').removeClass('open');
      $('.nav').removeClass('open');
    }
  });
  $('.castle-button').click(function() {
    if($(this).hasClass('collapsed')) {
      let target = $($(this).data('target'));
      setTimeout(
        () => {
          $('html, body').animate({
            scrollTop: target.offset().top - 85
          }, 500);
        }, 200)
    }
  })
});