   $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    })

  	var nameUser = localStorage.getItem("nameSaved");
  	$("#namePrint").text(nameUser);
  	var adressUser = localStorage.getItem("adressSaved");
  	var mailUser = localStorage.getItem("mailSaved"); 
  	$("#mailPrint").text(mailUser);

