console.log("Your index.js file is loaded correctly!")
setTimeout(function(){        
    $('#preloader').fadeOut();
    $('.preloader_img').delay(150).fadeOut('slow'); 
}, 50000);