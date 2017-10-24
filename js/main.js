$(document).ready(function() {
//Navbar fixed on scroll
$(window).scroll(function(event) {

		var y = $(this).scrollTop();
		console.log(y);

		if(y < 50) {
			$('#navBar').addClass('fixedTop');
			}
		if(y > 50) {
			$('#navBar').removeClass('fixedTop');
			}				
	});

//animation for menu (small-screens)

function colapseLogo() {
	if($('#navBar').offset().top > 50) {
		$('#navBrand').addClass('logoAnimation');
	} if($('#navBar').offset().top < 50) {
		$('#navBrand').removeClass('logoAnimation');
	}
};

$(window).scroll(colapseLogo);
$(document).ready(colapseLogo);

//NavLinks settings
$(document).ready(function() {
	$('#icon-open').on('click', function() {
		$('#navLinks').css('top', '55px');
		$('.fa-bars').fadeOut(400);
		$('.fa-times').fadeIn(400);

	});
	$('#icon-close').on('click', function() {
		$('#navLinks').css('top', '-280px');
		$('.fa-bars').fadeIn(400);
		$('.fa-times').fadeOut(400);
	});	
});		
/*
function openNav() {
    doc.getElementById('navLinks').style.top = "55px"; 

};

function closeNav() {
  doc.getElementById('navLinks').style.top = "-280px";
};

*/



	$(window).scroll(function(event) {

		var y = $(this).scrollTop();
		console.log(y);

		if(y >= 1824) {
			$('.work11').removeClass('work1').addClass('work1Anim');	
			$('.work22').removeClass('work2').addClass('work2Anim');				
		}
		if(y >= 2100) {
			$('.work33').removeClass('work3').addClass('work3Anim');		
			$('.work44').removeClass('work4').addClass('work4Anim');				
		}

		if(y < 1225) {
			$('.work11').removeClass('work1Anim').addClass('work1');	
			$('.work22').removeClass('work2Anim').addClass('work2');
			$('.work33').removeClass('work3Anim').addClass('work3');		
			$('.work44').removeClass('work4Anim').addClass('work4');				
		}
	});




	$(window).scroll(function(event) {

		var y = $(this).scrollTop();
		console.log(y);

		if(y >= 3755) {
			$('.work11').removeClass('project1').addClass('project1Anim');	
			$('.work22').removeClass('project2').addClass('project2Anim');				
		}
		if(y >= 4000) {
			$('.work33').removeClass('project3').addClass('project3Anim');		
			$('.work44').removeClass('project4').addClass('project4Anim');				
		}

		if(y < 2729) {
			$('.work11').removeClass('project1Anim').addClass('project1');	
			$('.work22').removeClass('project2Anim').addClass('project2');
			$('.work33').removeClass('project3Anim').addClass('project3');		
			$('.work44').removeClass('project4Anim').addClass('project4');				
		}
	});



	$(window).scroll(function(event) {

		var y = $(this).scrollTop();
		console.log(y);

		if(y >= 4615) {
			$('.work11').removeClass('image1').addClass('image1Anim');	
			$('.work22').removeClass('image2').addClass('image2Anim');				
		}
		if(y >= 5114) {
			$('.work33').removeClass('image3').addClass('image3Anim');		
			$('.work44').removeClass('image4').addClass('image4Anim');				
		}

		if(y < 3453) {
			$('.work11').removeClass('image1Anim').addClass('image1');	
			$('.work22').removeClass('image2Anim').addClass('image2');
			$('.work33').removeClass('image3Anim').addClass('image3');		
			$('.work44').removeClass('image4Anim').addClass('image4');				
		}
	});


	//Element Fade Out on Scroll 

	$(window).scroll(function(){
	    $("#topic").css("opacity", 1 - $(window).scrollTop() / 250);
	});


// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 600) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 2000);
});

//smooth slide on the one-page
 $(function() {
        $('#navBar').on('click', '.nav-item', function(event) {
          event.preventDefault();
          var hash = this.hash;

          $('html, body').animate({
           scrollTop: $(hash).offset().top
          }, 1000, function() {
            window.location.hash = hash;
          });
        });
      });

});