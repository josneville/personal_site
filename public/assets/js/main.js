$('document').ready(function() {
  $('.header').hide();
  $('.header').slideDown("slow");
  $('.sub-content').each(function(i) {
    $(this).hide();
    $(this).delay(500 + 50 * i).fadeIn("slow");
  });
  $('.flipper').click(function() {
    $(this).toggleClass('flipper-transformation-forward');
  });
});
