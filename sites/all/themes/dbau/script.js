(function($) {  

Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {
    
    $('.views-field-field-photos li img').on('load', function() {
    	console.log($(this).attr('src'));
    	if ($(this).height() > 200) {
    		$(this).css('transform', 'rotate(37deg)');
    		$(this).css('margin', '-33px 0 0 30px');
    	}

    })



    $('li.menu__item:nth-child(1)').click(function(e) {
      $('html, body').animate({
        scrollTop: $("#slider").offset().top
      }, 1000);
      e.preventDefault();
    })

    $('li.menu__item:nth-child(2)').click(function(e) {
      $('html, body').animate({
        scrollTop: $("#about-us").offset().top - 60
      }, 1000);
      e.preventDefault();
    })

    $('li.menu__item:nth-child(3)').click(function(e) {
      $('html, body').animate({
        scrollTop: $("#referencies").offset().top - 60
      }, 1000);
      e.preventDefault();
    })

    $('li.menu__item:nth-child(4)').click(function(e) {
      $('html, body').animate({
        scrollTop: $("#referencies").offset().top - 170
      }, 1000);
      e.preventDefault();
    })

    $('li.menu__item:nth-child(5)').click(function(e) {
      $('html, body').animate({
        scrollTop: $("#contact").offset().top - 170
      }, 1000);
      e.preventDefault();
    })
    

  }
};
})(jQuery);