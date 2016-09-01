function clock(){
	function getTime() {
		// get seconds, minutes and hours
		// hours should be in 12 hour style use another function
		var d = new Date();
		var s = d.getSeconds() + (d.getMilliseconds() / 1000);
        var m = d.getMinutes();
        var h = hour12();
        
        // change hands' css transform style
        $('.s-hand').css('transform', "translate(-50%, -100%) rotate(" + s*6 + "deg)");
        $('.m-hand').css('transform', "translate(-50%, -100%) rotate(" + m*6 + "deg)");
        $('.h-hand').css('transform', "translate(-50%, -100%) rotate(" + (h*30 + m*0.5) + "deg)");

        function hour12() {
            var hour = d.getHours();
            hour = hour >= 12 ? hour - 12 : hour;
            hour = hour === 0 ? 12 : hour;

            return hour;
	    }

	}
    
    function link(scope, element, attrs, ctrls){
    	setInterval(function(){
		    getTime();
	    }, 50);

    }

    return {
    	restrict: 'E',
    	scope: {},
    	template: ['<div class="col-md-6 col-sm-6 col-xs-12 clock">',
            '<div class="s-hand hand"></div>',
            '<div class="m-hand hand"></div>',
            '<div class="h-hand hand"></div>',
            '<div class="center"></div>',
          '</div>'].join(''),
    	link: link
    };
}
angular
    .module('myApp')
    .directive('directiveClock', clock);