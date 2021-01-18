$(function(){
  $('.box1').slideDown();
});

$(function(){
  $('.box2').slideUp();
});

$(function(){
  $('.box3').show();
  $('.box3').css({'background-color': '#0000ff'});
});

$(function(){
  $('.box4').hide();
});

$(function(){
  $('.box5').slideDown(function(){
    $('.box5').css({
      'background-color': '#0000ff',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});



