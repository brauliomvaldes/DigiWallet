// login
$(document).ready(function () {
    $('.form-registro').submit(function (event) {
      event.preventDefault();
      let email = $('#email').val();
      // pregunta si no existe una wallet
      let wallet = localStorage.getItem('wallet');
      if (wallet) {
        let usuario = localStorage.getItem(email);
        let password = JSON.parse(usuario).password;
        swal("Recuperación exitosa", "Simula restablecimiento, su contraseña es:"+password, "success");
      } else {
        swal("Recuperación fallida", "No hay wallet asociada a Cliente!", "error");
      }
    });
});