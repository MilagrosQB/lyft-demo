$(window).load(function() {
	$(".loading").fadeOut("slow");
});

/*$('input[name="number"]').keydown(function(e) {
	if (e.keyCode == 46 || e.keyCode == 8 || e.keyCode == 9 
		|| e.keyCode == 27 || e.keyCode == 13 
		|| (e.keyCode == 65 && e.ctrlKey === true) 
		|| (e.keyCode >= 35 && e.keyCode <= 39)){
		return;
	}else {
		if (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105 )) {
			e.preventDefault(); 
		}   
	}
});
*/


/*$("form").validate({
	rules: {
		number: {
			required: true,
			minlength: 9,			
			number: true,
		} 
	}
	messages: {
		required: "Required input",
    minlength: jQuery.validator.format("Please, at least {0} characters are necessary")
	}
});

*/
/*
$(document).ready(function() {
    $('#registrationForm').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            firstName: {
                row: '.col-xs-6',
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
            lastName: {
                row: '.col-xs-6',
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    }
                }
            },
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'The username can only consist of alphabetical, number, dot and underscore'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    different: {
                        field: 'username',
                        message: 'The password cannot be the same as username'
                    }
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'The gender is required'
                    }
                }
            },
            agree: {
                validators: {
                    notEmpty: {
                        message: 'You must agree with the terms and conditions'
                    }
                }
            }
        }
    });
});
*/