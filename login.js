async function fazerLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simula um humano digitando (opcional)
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
        // Faz a requisição para a API de login
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        // Verifica se a resposta é OK (status 200)
        if (response.ok) {
            const data = await response.json();
            alert('Login bem-sucedido! Token: ' + data.token);
            errorMessage.textContent = ''; // Limpa mensagem de erro
        } else {
            // Se a resposta não for OK, exibe mensagem de erro
            const errorData = await response.json();
            errorMessage.textContent = 'Erro: ' + (errorData.message || 'Credenciais inválidas');
        }
    } catch (error) {
        // Captura erros de rede ou outros erros
        errorMessage.textContent = 'Erro ao conectar ao servidor. Tente novamente.';
    }
}