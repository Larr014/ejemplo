/* Template: Evolo - StartUp HTML Landing Page Template
   Author: Inovatik
   Created: June 2019
   Description: Custom JS file
*/



	
	/* Preloader */
    window.onload = function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = document.getElementsByClassName("spinner-wrapper");
            
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	};

	
	/* Navbar Scripts */
	// jQuery to collapse the navbar on scroll
    function nav(){
        if (document.getElementsByClassName("navbar").offset().top > 60) {
			document.getElementsByClassName("fixed-top").addClass("top-nav-collapse");
		} else {
			document.getElementsByClassName("fixed-top").removeClass("top-nav-collapse");
		}
    }

    window.onscroll = function(){ nav()};
    window.onload = function(){ nav()};
    

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	



