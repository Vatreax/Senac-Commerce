import loginform from "../components/loginform";


async function pesquisarUser(usuario){

};

async function validarUser(token, usuario ){
// add algo para salvar o id
    sessionStorage.clear;

    const setToken = sessionStorage.setItem('userToken', token.token);
    const setUser = sessionStorage.setItem('userId', await pesquisarUser(usuario)); 

    if(setToken && setUser){
        return true
    }
    
};

async function sessionUser(){

};

async function FecthLogin(){

};

function enviarLogin(event){
    event.preventdefault();

    const username = event.target.loginz.value;
    const senha = event.target.senha.value;
};

document.getElementById('login').innerHTML = loginform();

document.addEventListener('submit', enviarLogin);

