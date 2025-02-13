import usuarioForm from "../components/usuario.js";

const userId = sessionStorage.getItem('userId');

if(userId === null || userId === undefined){
    //window.location.href = '/login.html';
}


document.getElementById('app').innerHTML = usuarioForm()

console.log(userId);