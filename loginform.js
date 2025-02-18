const Loginz = () => {
    return`
    <div class="login-container">
        <h2>Login</h2>
        <input type="text" id="email" placeholder="E-mail" required>
        <input type="password" id="senha" placeholder="Senha" required>
        <button onclick="fazerLogin()">Login</button>
        <p class="voltar-login">Não tem uma conta? <a href="index.html">Faça cadastro aqui</a></p>
    </div>
    `;
};

export default Loginz;