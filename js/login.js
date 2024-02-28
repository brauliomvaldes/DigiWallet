// login
$(document).ready(function () {
  $('#loginForm').submit(function (event) {
    event.preventDefault();
    let username = $('#username').val();
    let password = $('#password').val();
    console.log(username);
    // Verificar las credenciales almacenadas en localstore
    let logged = username === 'admin' && password === '12345';
    if (logged) {
      sessionStorage.setItem('auth', true);
      // Si las credenciales son válidas, redirigir a la pantalla de wallet
      cargaWallet(username);
      window.location.href = '../codigo/menu.html';
    } else {
      // Si las credenciales son inválidas, mostrar mensaje de error
      sessionStorage.setItem('auth', false);
      swal("Usuario o contraseña invalido", "reintente nuevamente.!", "error");
    }
  });

  // inicializa wallet si no existe
  function cargaWallet(username) {
    if (!localStorage.getItem('wallet')) {
      const myWallet = {
        user: username,
        saldo: 0,
        trans: [],
        destinatarios: []
      };      
      // almacena la billetera
      localStorage.setItem('wallet', JSON.stringify(myWallet));
    }
  };
});

