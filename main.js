if ('serviceWorker' in navigator) {
    console.log('Puedes usar los serviceWorker del navegador');
  
    navigator.serviceWorker.register('./sw.js')
      .then(res => console.log('serviceWorker cargado'))
      .catch(err => console.log('serviceWorker no se ha cargado'));
  } else {
    console.log('NO Puedes usar los serviceWorker del navegador');
  }
  


// scroll suavizado
$(document).ready(function(){
    $("#menu a").click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });
    });
});