(function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 0,
            interval: 0,
        };
        $.extend(true, setting, options);
        var states = [
            // { $zIndex: 2, width: 300, height: 150, top: 35, left: -1, $opacity: 0.4 },
            { $zIndex: 1, width: 500, height: 250, top: 35, left: 0, $opacity: 0.7 },
            { $zIndex: 2, width: 500, height: 250, top: 35, left: 0, $opacity: 0.7 },
            { $zIndex: 2, width: 500, height: 250, top: 35, left: 470, $opacity: 1 },
            

            { $zIndex: 3, width: 760, height: 320, top: 0, left: 110, $opacity: 1 },
            { $zIndex: 2, width: 500, height: 250, top: 35, left: 470, $opacity: 1 },
            { $zIndex: 4, width: 760, height: 320, top: 0, left: 110, $opacity: 1 }

        ];
        var $lis = $ele.find('li');
        

        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
      
        move();
     
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

      
        function next() { 
            states.unshift(states.pop());
            move();
        }
    }
 
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);
