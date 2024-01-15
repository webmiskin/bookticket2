(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		
	});
})(jQuery);



/* navbar area*/
		// For toggling and finding number of children and other stuff is done here!

		const navigation = document.getElementById("nav");
		const menu = document.getElementById("menu");

		menu.addEventListener("click", () => {
		  // The navigation.children.length means the following :-
		  // The children inside a parent are basically an array of elements; So, here I'm finding the length of the array aka how many children are inside the nav bar.
		  //   Yup That's all.
		  navigation.style.setProperty("--childenNumber", navigation.children.length);

		  //    Casually Toggling Classes to make them animate on click
		  //   Regular stuff ;)
		  navigation.classList.toggle("active");
		  menu.classList.toggle("active");
		});








		/* navbar area*/
	
	


