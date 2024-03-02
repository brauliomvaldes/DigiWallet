// wallet digital
// utilizando localstorage para su almacenamiento
// no considera almacenamiento de usuario fuera del admin

$(document).ready(function () {

  // consulta autorización
  if(!sessionStorage.getItem('auth')){
    window.location.href = '../codigo/login.html';
  }else{
    let wallet = localStorage.getItem('wallet');
    if (wallet != null){
      let bienvenida = (JSON.parse(wallet).user).toUpperCase();
      let saldo = JSON.parse(wallet).saldo.toLocaleString("es-ES");
      let fecha = new Date().toLocaleString().split(',')[0];
      $('#bienvenida').text(`Bienvenido(a) ${bienvenida}`);
      $('#cuenta').text(`Hoy ${fecha} tu saldo disponible es $${saldo}`);
    }
  }
  // logout
  $('#logoutBtn').click(function () {
    $('#username').val('');
    $('#password').val('');
    sessionStorage.setItem('auth', false);
    window.location.href = '../codigo/login.html';
  });

});


