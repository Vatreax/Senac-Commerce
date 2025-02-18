import usuarioForm from "../components/usuario.js";
import alert from "../components/alert.js";

const token = sessionStorage.getItem('userId');

if(token === null || token === undefined){
    //window.location.href = '/login.html';
}

function getUserId() {
    // return sessionStorage.getItem('userId');
    return 2
}

async function getUserFromApi() {
    let id = getUserId();
    const res = await fetch('https://fakestoreapi.com/users/' + id)
        .then( res => res.json());

    return res;
}

async function salvarUsuario(){
    document.getElementById('response').innerText = '';
    let data = {
        username: document.getElementById('username').value || '',
        password: document.getElementById('password').value || '',
        address:{
            city: document.getElementById('city').value || '',
            street: document.getElementById('street').value || '',
            number: document.getElementById('number').value || '',
            zipcode: document.getElementById('zipcode').value || '',
        },
        phone: document.getElementById('phone').value || ''
    }

    const userId = getUserId();

    const resp = await fetch('https://fakestoreapi.com/users/' + userId,{
        method:"PATCH",
        body: JSON.stringify(data)
    })
    .then( res => res.json() );

    if (resp){
        document.getElementById('response').innerHTML = alert('Usuário salvo com sucesso!');
        
        let modal = document.getElementById('successModal');
        document.querySelector('.close-btn').addEventListener('click', () => modal.style.display = 'none');

        modal.style.display = 'flex';
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }
}

document.getElementById('app').innerHTML = usuarioForm(await getUserFromApi())
document.getElementById('salvar').addEventListener('click', salvarUsuario)