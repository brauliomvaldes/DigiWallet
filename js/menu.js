// wallet digital
// utilizando localstorage para su almacenamiento
// no considera almacenamiento de usuario fuera del admin

$(document).ready(function () {

  // consulta autorización
  if(!sessionStorage.getItem('auth')){
    window.location.href = '../codigo/login.html';
  }
  // logout
  $('#logoutBtn').click(function () {
    $('#username').val('');
    $('#password').val('');
    sessionStorage.setItem('auth', false);
    window.location.href = '../codigo/login.html';
  });

});


