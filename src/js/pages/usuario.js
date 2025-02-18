import usuarioForm from "../components/usuario.js";

const userId = sessionStorage.getItem('userId');

if(userId === null || userId === undefined){
    //window.location.href = '/login.html';
}

async function getUserFromApi(id) {
    return await fetch('https://fakestoreapi.com/users/' + id)
        .then(res=>res.json());
}

document.getElementById('app').innerHTML = usuarioForm(getUserFromApi(1))