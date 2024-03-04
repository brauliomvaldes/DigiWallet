// login
$(document).ready(function () {
  // envia al login por click boton login
  $('#loginBtn').click(function () {
    window.location.href = '../codigo/login.html';
  })
  // si existe registro no puede volver a registrarse
  if (localStorage.getItem('wallet')) {
    swal("Registro fallido", "Ya existe Cliente con Wallet, debe recuperar sus credenciales!", "error");
  }
  // controla ocultar o no password
  $(document).on('change','input[type="checkbox"]' ,function(e) {
      if(!this.checked){
        $('#password').prop('type', 'text');
        $('#password-repite').prop('type', 'text');
      }else{
        $('#password').prop('type', 'password');
        $('#password-repite').prop('type', 'password');
      } 
});
  // procesa formulario
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
      let passwordrepite = $('#password-repite').val();
      if(password != passwordrepite){
        swal("Registro fallido", "Las contraseñas no coinciden, vuelva a intentarlo!", "error");
      }else{
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
        // almacena la billetera
        localStorage.setItem('wallet', JSON.stringify(myWallet));
        swal("Registro existoso", "Se registro correctamente el usuario!", "success");
      }
    }
    // llimpia campos de ingreso
    $(this).closest('form').find("input").val("");
  });
});