$(window).load(function() {
	$(".loading").fadeOut("slow");
});


/*$('input[name="number"]').keydown(function(e)
                                {
  if (/\D/g.test(this.value))
  {
    this.value = this.value.replace(/\D/g, '');
  }
});*/

$('input[name="number"]').keydown(function(e) {
                // Allow special chars + arrows 
                if (e.keyCode == 46 || e.keyCode == 8 || e.keyCode == 9 
                    || e.keyCode == 27 || e.keyCode == 13 
                    || (e.keyCode == 65 && e.ctrlKey === true) 
                    || (e.keyCode >= 35 && e.keyCode <= 39)){
                        return;
                }else {
                    // If it's not a number stop the keypress
                    if (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105 )) {
                        e.preventDefault(); 
                    }   
                }
            });