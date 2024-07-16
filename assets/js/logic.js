var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-dark', 'shadow');
  } else {
    nav.classList.remove('bg-dark', 'shadow');
  }
});


$(document).ready(function(){

$(".card-title").click(function() {
  $(this).next(".card-text").toggle();
});


$('#enviar').click(function(){
  alert('El correo fue enviado correctamente');
});

$(document).ready(function(){
  $('#enviar').tooltip();
});

$(document).ready(function(){
  $('#pincha').tooltip();
});

$(document).ready(function(){
  $('#linkedin').tooltip();
});

$(document).ready(function(){
  $('#twitter').tooltip();
});

$(document).ready(function(){
  $('#facebook').tooltip();
});


});
