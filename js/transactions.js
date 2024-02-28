// wallet digital
// utilizando localstorage para su almacenamiento
// no considera almacenamiento de usuario fuera del admin

$(document).ready(function () {

  // consula autorización
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


  // almacena las transacciones
  let transac = [];


  // recuperar billetera 
  if (localStorage.getItem('wallet')) {
    transac = (JSON.parse(localStorage.getItem('wallet'))).trans;
  } else {
    transac = [];
  }
  if (transac.length > 0) {
    cargaHistoryTransac();
  }

  // carga historial transacciones
  function cargaHistoryTransac() {
    transac.forEach((e) => {
      let elementos = e.split(',');
      creaRegistro(elementos[0], elementos[1], elementos[2], elementos[3], elementos[4])
    })
  }

  function creaRegistro(fecha, tipo, monto, balance, destinatario) {
    $("#registros").prepend('<tr><td>' + fecha + '</td><td>' + tipo + '</td><td>' + monto + '</td><td>' + balance + '</td><td>' + destinatario + '</td></tr>');
  }


      // consulta si hay movimientos que mostrar
      if(transac.length > 0){
        $("#titulo-historial").text('Historial de Movimientos');
        // muestra
        $("#historial-cuenta").removeAttr("hidden");

      }else{
        swal("Proceso no Disponible!", "No cuenta con cuenta con movimientos a la fecha", "warning");
      }

});


