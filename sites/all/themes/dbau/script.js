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

    $('li.menu__item:nth-child(5)').click(function(e) {
      $('html, body').animate({
        scrollTop: $("a[name='services']").offset().top
      }, 1000);
      e.preventDefault();
    })

    $('li.menu__item:nth-child(1)').click(function(e) {
      $('html, body').animate({
        scrollTop: $("a[name='intro']").offset().top
      }, 1000);
      e.preventDefault();
    })

    $('li.menu__item:nth-child(3)').click(function(e) {
      $('html, body').animate({
        scrollTop: $(".pane-custom.pane-1").offset().top - 60
      }, 1000);
      e.preventDefault();
    })

    $('li.menu__item:nth-child(4)').click(function(e) {
      $('html, body').animate({
        scrollTop: $(".pane-referencies-panel-pane-1").offset().top - 60
      }, 1000);
      e.preventDefault();
    })

    


    $('.pane-slideshow').prepend('<a name="services"></a>');
    $('.pane-node').prepend('<a name="intro"></a>');
    $('.pane-referencies-panel-pane-1').prepend('<a name="references"></a>');
    

  }
};
})(jQuery);