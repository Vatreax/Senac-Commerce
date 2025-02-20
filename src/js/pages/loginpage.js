import loginz from "../components/loginform.js";

// Função para buscar o ID do usuário com base no nome de usuário
async function pesquisarUser(usuario) {
    try {
        const response = await fetch('https://fakestoreapi.com/users');
        const users = await response.json();
        const user = users.find(u => u.username === usuario);
        return user ? user.id : null;
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        return null;
    }
}

// Função para validar o usuário e salvar o token e ID no sessionStorage
async function validarUser(token, usuario) {
    sessionStorage.clear();

    const userId = await pesquisarUser(usuario);
    if (!userId) {
        console.error('Usuário não encontrado');
        return false;
    }

    sessionStorage.setItem('userToken', token);
    sessionStorage.setItem('userId', userId);

    if (sessionStorage.getItem('userToken') && sessionStorage.getItem('userId')) {
        return true;
    } else {
        console.error('Falha ao salvar token ou ID do usuário');
        return false;
    }
}

// Função para verificar se o usuário está logado
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

// Função para realizar o login na API
async function fetchLogin(username, password) {
    try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        if (!response.ok) {
            throw new Error('Credenciais inválidas');
        }

        const data = await response.json();
        return data.token;
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        return null;
    }
}

// Função para enviar o formulário de login
async function enviarLogin(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const senha = event.target.senha.value;

    const token = await fetchLogin(username, senha);
    if (token) {
        const validado = await validarUser(token, username);
        if (validado) {
            console.log('Login válido. Redirecionando...');
            // Redirecionar para a página principal ou realizar outra ação
        } else {
            console.error('Falha na validação do usuário');
        }
    } else {
        console.error('Falha no login');
    }
}

// Renderizar o formulário de login e adicionar o listener de evento
document.getElementById('login').innerHTML = loginz();
document.addEventListener('submit', enviarLogin);