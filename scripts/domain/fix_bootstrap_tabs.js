$(document).ready(function() {
  $('#myTab .nav-link').click(function(e) {
    if ($(this).hasClass('active show')) {
      setTimeout(
        () => {
          $(this).removeClass('show active');
          $('#myTabContent .tab-pane').removeClass('show active');
          $('#default').addClass('show active');
        }, 200
      );
    }
  });
})