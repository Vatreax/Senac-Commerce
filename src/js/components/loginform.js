const loginz = () => {
    return `
        <form name="formLogin">
            <div class="containerInput">
                <label for="username">Usuário:</label>
                <input type="text" name="username" placeholder="Usuário" required>
            </div>
            <div class="containerInput">
                <label for="password">Senha:</label>
                <input type="password" name="password" placeholder="Senha" required>
            </div>
            <div class="ctaForm">
                <button type="submit">Entrar</button>
            </div>
        </form>
    `;
};

export default loginz;