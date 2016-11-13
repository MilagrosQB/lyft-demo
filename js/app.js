$(window).load(function() {
	$(".loading").fadeOut("slow");
});

$(document).ready(function () {
    $('#register-form').submit(function() {
    $('#next').attr('disabled');
});

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
        if ($("#register-form").valid()) {
            var numberRandom = Math.floor( Math.random() * 1000 )+8000;
    		alert("Your code Lyft is " + numberRandom );
    		window.location.href = "verificy.html"
    	}
    });

});
