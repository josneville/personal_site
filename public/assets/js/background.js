$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.container').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
