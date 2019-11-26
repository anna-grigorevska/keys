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
  setInterval(() => {
    $('.arrow-up').toggleClass('hide');
  }, 1000);
  $('#myTab .nav-link').mouseenter(function() {
    if ($( window ).width() > 767) {
      $('#myTab .nav-link').removeClass('active show')
      $('#myTabContent .tab-pane').removeClass('active show')
    } else {
      $('#default').removeClass('active show')
    }
    $(this).addClass('active show')
    let id = $(this).attr('href');
    $(id).addClass('active show')
    $(this).mouseleave(function() {
      $(this).removeClass('active show')
      $(id).removeClass('active show')
      $('#default').addClass('active show')
    })
  })
});