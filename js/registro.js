// login
$(document).ready(function () {
    $('.form-registro').submit(function (event) {
      event.preventDefault();
      let nombres = $('#nombres').val();
      let apellidos = $('#apellidos').val();
      let email = $('#email').val();
      let password = $('#password').val();
      console.log(nombres,apellidos,email,password);
      // pregunta si no existe el usuario
      if (!localStorage.getItem(email)) {
        usuario = {
            nombres: nombres,
            apellidos: apellidos,
            email: email,
            // simula registro de clave/password encriptado (tipo hash bcrypt) en BD 
            password: password
        };
        localStorage.setItem(email, JSON.stringify(usuario));
        swal("Registro existoso", "Se registro correctamente el usuario!", "success");
      } else {
        swal("Usuario ya existe", "reintente nuevamente.!", "error");
      }
    });

});