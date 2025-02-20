import loginz from "../components/loginform.js";

async function pesquisarUser(usuario) {    
    const usuarios = await pesquisarTodosUsuarios()
    let userId = ""
    usuarios.forEach(user => {
        if (user.username == usuario){
            userId = user.id
        }
    });
    return userId
};


async function pesquisarTodosUsuarios(){
    const usuarios = await fetch('https://fakestoreapi.com/users')
    .then(res=>res.json())
    .then(json=>json)

    return usuarios;
};

async function validarUser(token, usuario) {
    sessionStorage.clear();

    const userId = await pesquisarUser(usuario);
    if (!userId) {
        console.error('Usuário não encontrado');
        return false;
    }

    sessionStorage.setItem('userToken', token.token);
    sessionStorage.setItem('userId', userId);

    if (sessionStorage.getItem('userToken') && sessionStorage.getItem('userId')) {
        return true;
    } else {
        console.error('Falha ao salvar token ou ID do usuário');
        return false;
    }
}

function sessionUser() {
    const token = sessionStorage.getItem('userToken');
    const userId = sessionStorage.getItem('userId');

    if (token && userId) {
        console.log('Usuário logado:', userId);
        return true;
    } else {
        console.log('Nenhum usuário logado');
        return false;
    }
}

async function fetchLogin(usuario, senha){

    const token = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: usuario,
            password: senha
        })
    })
    .then(res=>res.json())

    await validarUser(token, usuario);
    window.location.href = 'index.html';

};

function enviarLogin(event){
    event.preventDefault();

    const usuario = document.getElementById("username").value;
    const senha = document.getElementById("password").value;

    if (usuario && senha) {
        fetchLogin(usuario, senha);
    } else {
        alert("Preencha todos os campos.");
    }
}

document.getElementById('login').innerHTML = loginz();

document.getElementById("formlogin").addEventListener('submit', enviarLogin);