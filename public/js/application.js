$(document).ready(function() {

  // $('#red1').on('click', function() {
  //   animate({ marginTop: '+=200' }, 1500, function() {
  //     bounce($(this));
  //   });
  // });
  $('.column').on('click', function() {
    var $piece = $(this).children('.piece')
    $($piece).removeClass('hidden');
    $($piece).animate({ marginTop: '+=305' }, 1500, function() {
      bounce($(this));
    });
  });


  function bounce(element) {
    for(i = 0; i < 3; i++) {
      element.animate( {marginTop: '-=20'}, 200)
      .animate({marginTop: '+=20'}, 200)
    }
  }

});
