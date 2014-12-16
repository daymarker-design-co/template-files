/*
----------------------------------------------------------------------------------------
CONTACT FORM FUNCTIONS
----------------------------------------------------------------------------------------
*/

function contactForm() {
	
	var option, index;
	
	// must be 'jQuery' 
	// fire whatever you want on 'submit'
	jQuery(document).bind('gform_post_render', function(){
	
			addPseudoFormElements();
			clickPseudoFormElements();
			
	});

	// Creates all the 'pseudo' form elements
	function addPseudoFormElements() {
		
		// creates fake list of checkbox elements
		$("#field_1_6").find("label:first-child").after( "<div class='pseudo-checkbox-container'><ul id='pseudo-checkbox-interests' class='pseudo-list pseudo-checkbox interests'></ul></div>" );
		
		$("#field_1_7").find("label:first-child").after( "<div class='pseudo-select-container'><ul id='pseudo-select-budget' class='pseudo-list pseudo-select budget'></ul></div>" );
		
		$("#field_1_8").find("label:first-child").after( "<div class='pseudo-select-container'><ul id='pseudo-checkbox-cat-love' class='pseudo-list pseudo-select cat-love'></ul></div>" );
	
	
		// populates the fake list
		$("#field_1_6").find("input[type='checkbox']").each(function(){
				option = $(this).val();
				console.log(option);
				$( "#pseudo-checkbox-interests" ).append( "<li>" + option + "</li>" );
		});
		
		// populates the fake list
		$("#field_1_7").find("select option").each(function(){
				option = $(this).val();
				console.log(option);
				$( "#pseudo-select-budget" ).append( "<li>" + option + "</li>" );
		});
		
		// populates the fake list
		$("#field_1_8").find("input[type='radio']").each(function(){
				option = $(this).val();
				console.log("cat love options are " + option);
				$( "#pseudo-checkbox-cat-love" ).append( "<li>" + option + "</li>" );
		});
	
		// sets the default state, where applicable
		$("#pseudo-checkbox-interests li").first().addClass("active");
		$("#field_1_6").find("input[type='checkbox']").first().prop('checked', true);
		$("#pseudo-select-budget li").first().addClass("active");

	} // addPseudoFormElements()
	
	// Click functionality for 'pseudo' form elements
	function clickPseudoFormElements() {
	
			// click functionality 
			$("#pseudo-checkbox-interests li").click(function(){
						
						index = $(this).index();
						$(this).toggleClass("active");
						console.log("index is " + index);
						
						if ( $(this).hasClass("active") ) {
							console.log("is active!");
							$("#field_1_6").find("input[type='checkbox']").eq(index).prop('checked', true);
						} else {
							console.log("is not active!");
							$("#field_1_6").find("input[type='checkbox']").eq(index).prop('checked', false);
						}
								
			}); // click()
	
			// click functionality 
			$("#pseudo-select-budget li").click(function(){
						
						index = $(this).index();
						$("#pseudo-select-budget li").removeClass("active");
						$(this).toggleClass("active");
						console.log("index is " + index);
						
						$("#field_1_7").find("select option:eq(" + index + ")").prop('selected', true);
							
			}); // click()
			
			// click functionality 
			$("#pseudo-checkbox-cat-love li").click(function(){
						
						index = $(this).index();
						$("#pseudo-checkbox-cat-love li").removeClass("active");
						$(this).toggleClass("active");
						console.log("cat love index is " + index);
						
						$("#field_1_8").find("input[type='radio']").eq(index).prop('checked', true);
										
			}); // click()

		
	} //clickPseudoFormElements() 

	// clears input & textareas on focus
	function clearInput() {
		
				var el = jQuery("form li input, form li textarea");
				
			   el.focus(function(e) {
			        if (e.target.value == e.target.defaultValue)
			            e.target.value = '';
			    });
			    
			    el.blur(function(e) {
			        if (e.target.value == '')
			            e.target.value = e.target.defaultValue;
			    });

	} //clearInput()
		
	addPseudoFormElements();
	
	clickPseudoFormElements();
	
	clearInput();
			
} // contactForm()
