// guarda true si el usuario esta autorizado de lo contrario es
// redirigido a index
const logged = sessionStorage.getItem('auth');
if(!logged){
    location.href = '../login.html';
}