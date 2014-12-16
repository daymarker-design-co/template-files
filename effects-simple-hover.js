/*  
-----------------------------------------------------------------------
jQuery Hover Effects 
-----------------------------------------------------------------------
*/
	
function hoverFadeOutEffect(d, e) {
	
	// d is target element class, ie ".target" or ".fade_out_65"
	// e is decimal number to fade to, ie "0.65" would be the same as 65% opacity
	
	$(d).hover(function(){
			jQuery(this).stop(true, true).fadeTo(220, e);
	},
	function() {
			$(this).stop(true, true).fadeTo(330, 1);			
	});

}

function hoverFadeInEffect(d, e) {
	
	// d is target element class, ie ".target" or ".fade_out_65"
	// e is decimal number to fade to, ie "0.65" would be the same as 65% opacity
	
	$(d).hover(function(){
			jQuery(this).stop(true, true).fadeTo(220, 1);
	},
	function() {
			$(this).stop(true, true).fadeTo(330, e);			
	});

}
