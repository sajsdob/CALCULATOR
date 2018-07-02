$(function() {

  var input2 = $('.eqinput');
  $('.numbers').click(function() {
    input2.val(input2.val() + $(this).text());
  })
  $('.equ').click(function() {
    input2.val(eval(input2.val()));
  })
  $('.C').click(function() {
    input2.val('');
  })

  $(input2).on('focus', function() {
    $(this).attr('placeholder', '');
  })
  $(input2).on('focusout', function() {
    $(this).attr('placeholder', 'RESULT');
  })

  $('*').keypress(function(e) {
    if (e.keyCode == 13) {
      input2.val(eval(input2.val()));
    }
  })

  $('.play').click(function() {
    $('.calculator').fadeToggle();
    if ($(this).text() === 'SHOW') {
      $(this).text('HIDE').css('color', 'orange');
    } else {
      $(this).text('SHOW').css('color', 'grey');
    }
  })


});
