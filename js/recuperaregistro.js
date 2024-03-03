// login
$(document).ready(function () {
  // envia al login
  $('#loginBtn').click(function () {
    window.location.href = '../codigo/login.html';
  })
  if (!localStorage.getItem('wallet')) {
    swal("Recuperación fallida", "No puede recuperar contraseña, No hay registro de usuarios, debe registrarse!", "error");
  }
  $('.form-registro').submit(function (event) {
    event.preventDefault();
    let email = $('#email').val();
    // verifica si existe un usuario con ese correo
    let usuario = localStorage.getItem(email);
    if (usuario) {
      let passwordRegistrado = JSON.parse(usuario).password;
      swal("Recuperación exitosa", "Simula restablecimiento, su contraseña es -->" + passwordRegistrado + "<--", "success");
    } else {
      swal("Recuperación fallida", "No hay wallet asociada al correo entregado!", "error");
    }
  });
});