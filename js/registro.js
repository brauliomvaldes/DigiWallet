// login
$(document).ready(function () {
  // envia al login
  $('#loginBtn').click(function () {
    window.location.href = '../codigo/login.html';
  })

  if (localStorage.getItem('wallet')) {
    swal("Registro fallido", "Ya existe Cliente con Wallet, debe recuperar sus credenciales!", "error");
  }
  $('.form-registro').submit(function (event) {
    event.preventDefault();
    // si quiere volver a repetir el registro
    if (localStorage.getItem('wallet')) {
      swal("Registro fallido", "Ya existe Cliente con Wallet, debe recuperar sus credenciales!", "error");
    } else {
      let nombres = $('#nombres').val();
      let apellidos = $('#apellidos').val();

      let email = $('#email').val();
      let password = $('#password').val();

      // pregunta si no existe una wallet
      usuario = {
        nombres: nombres,
        apellidos: apellidos,
        email: email,
        // simula registro de clave/password encriptado (tipo hash bcrypt) en BD 
        password: password
      };
      localStorage.setItem(email, JSON.stringify(usuario));
      // se crea la wallet para asociarla al usaurio creado
      const myWallet = {
        user: email,
        saldo: 0,
        trans: [],
        destinatarios: []
      };
      // llimpia campos de ingreso
      $('#nombres').val('');
      $('#apellidos').val('');
      $('#email').val('');
      $('#password').val('');

      // almacena la billetera
      localStorage.setItem('wallet', JSON.stringify(myWallet));
      swal("Registro existoso", "Se registro correctamente el usuario!", "success");
    }

  });
});