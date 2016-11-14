$(window).load(function() {
	$('.loading').fadeOut('slow');
});

$(document).ready(function () {
    $('#register-form').submit(function() {
    $('#next').attr('disabled');
    $('#next-signup').attr('disabled');
});

    //Form register.html
    $('#register-form').validate({
    	rules: {
    		numbercel: {
    			required: true,
    			number: true,
    			minlength: 9
    		}
    	},
    	messages: {
    		numbercel: {
    			required: "Phone is a required field ",
    			number: "Enter a phone number",
    			minlength: "Enter a 9-digit number"
    		}
    	},
    	submitHandler: function() {
    		$('#next').removeAttr('disabled');
		  }
		});

    $('#next').click(function () {
        if ($('#register-form').valid()) {
            var numberRandom = Math.floor( Math.random() * 1000 )+8000;
    		alert("Your code Lyft is " + numberRandom );
    		var phoneNumber =  $('#i-number').val();
			localStorage.setItem("numberSaved", phoneNumber);
			localStorage.setItem("codeRandom", numberRandom);
    		window.location.href = "verificy.html"
    	}
    });

    //Form verificy.html

    $('#next-verificy').click(function() {
    	var firstCode = $('.number-box').eq(0).val();
		var secondCode = $('.number-box').eq(1).val();
		var thirdCode = $('.number-box').eq(2).val();
		var fourthCode= $('.number-box').eq(3).val();		
		var codeFinal = firstCode + secondCode + thirdCode + fourthCode;
		if (codeFinal === localStorage.getItem("codeRandom")) {
			window.location.href = "sign-up.html"
		} else { 
			alert("Code incorrect. Press Resend Code")
			$(".number-box").val("");
		}
	})

    $('#resendCode').click(function() {
    	var numberRandom = Math.floor( Math.random() * 1000 )+8000;
    	alert("Your code Lyft is " + numberRandom );
    	localStorage.setItem("codeRandom", numberRandom);    	
    })

    // Form Sign-up
    $('#signup-form').validate({
    	rules: {
	      firstName: {
	      	required: true,
    		number: false,
    		minlength: 3,
    		maxlength: 12
    	  },
	      lastName: {
	      	required: true,
    		number: false,
    		minlength: 3,
    		maxlength: 18    		
	      },
	      email: {
	        required: true,
	        email: true
	      },
	      agree: {
	        required: true,
	      }	      
    	},

    	messages: {
    		firstName: {
    			required: "First Name is a required field ",
    			number: "Enter letters , no numbers",
    			minlength: "Your first name must have more than 3 letters",
				maxlength: "Your first name must haven't more than 12 letters"			
    		},
    		lastName: {
    			required: "Last Name is a required field ",
    			number: "Enter letters , no numbers",
    			minlength: "Your last name must have more than 3 letters",
				maxlength: "Your last name must haven't more than 18 letters"			

    		},
    		email: {
    			required: "Email is a required field ",
    			number: "Enter a valid email",
    		},
    		agree: {
    			required: "You need to accept the terms to continue"
    		} 		  		
    	},
    	submitHandler: function() {
    		$('#next-signup').removeAttr('disabled');
		  }
		});

    $('#next-signup').click(function () {
        if ($('#signup-form').valid()) {
    		var name =  $('#first-name').val();
    		var adress =  $('#last-name').val();
    		var mailito =  $('#e-mail').val();

			localStorage.setItem("nameSaved", name);
			localStorage.setItem("adressSaved", adress);
			localStorage.setItem("mailSaved", mailito);  
    		window.location.href = "map.html"
    	}
    });



  	var movilNumber = localStorage.getItem("numberSaved");
  			$("#numberPrint").text(movilNumber);
  	var nameUser = localStorage.getItem("nameSaved");
  	var adressUser = localStorage.getItem("adressSaved");
  	var mailUser = localStorage.getItem("mailSaved");  	
});