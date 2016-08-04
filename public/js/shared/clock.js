$(document).ready(function() {
	// let function invoked every 50ms
	setInterval(function(){
		getTime();
	}, 50);

	// main function
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

	
})