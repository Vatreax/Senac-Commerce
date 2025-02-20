const loginz = () => {
    return `
        <form name="formLogin" id="formlogin">
            <div class="containerInput">
                <label for="username">Usuário:</label>
                <input type="text" name="username" placeholder="Usuário" id="username" required>
            </div>
            <div class="containerInput">
                <label for="password">Senha:</label>
                <input type="password" name="password" placeholder="Senha" id="password" required>
            </div>
            <div class="ctaForm">
                <button type="submit">Entrar</button><a href="./cadastro.html">Cadastrar</a>
            </div>
        </form>
    `;
};

export default loginz;