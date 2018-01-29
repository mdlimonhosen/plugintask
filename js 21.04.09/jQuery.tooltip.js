(function($){
    $.fn.tooltip = function(options) {
         
        var
          defaults = {
            background: '#e3e3e3',
            color: 'black',
            rounded: false
          },
          settings = $.extend({}, defaults, options);
           
          this.each(function() {
            var $this = $(this);
            var title = this.title;
             
            if($this.is('a') && $this.attr('title') != '') {
                this.title = '';
                $this.hover(function(e) { 
                   console.log('ey', e.pageY)
                   console.log('ex', e.pageX)
                   


                    // mouse over
                    $('<div id="tooltip" />')
                      .appendTo('body')
                      .text(title)
                      .hide()
                      .css({
                        backgroundColor: settings.background,
                        color: settings.color,
                        top: e.pageY -50,
                        left: e.pageX -604
                        
                      })
                      .fadeIn(350);
                       
                    console.log($('#tooltip').width())  ;
                    

                  if(settings.rounded) {
                    $('#tooltip').addClass('rounded');
                  }

                  if(settings.color) {
                    $('#tooltip').addClass(settings.color);
                  }

                  if(settings.className) {
                    $('#tooltip').addClass(settings.className);
                  }


                  if(settings.fontSize) {
                    $('#tooltip').css('font-size', settings.fontSize);
                  }

                  if(settings.textTransform) {
                    $('#tooltip').css('text-Transform', settings.textTransform);
                  }

                  if(settings.margin) {
                    $('#tooltip').css('margin', settings.margin);
                  }

                  if(settings.left) {
                    $('#tooltip').css('left', settings.left);
                  }

                  if(settings.bgColor) {
                    $('#tooltip').css('background-color', settings.bgColor);
                  }
                


                }, function() {
                    // mouse out
                    $('#tooltip').remove();
                }); 
            }
             
            $this.mousemove(function(e) {
                $('#tooltip').css({
                    top: e.pageY + 15,
                    left: e.pageX + 5
                    

                 });
            });
          });
          // returns the jQuery object to allow for chainability.
          return this;
    }
})(jQuery);