const usuarioForm = ({ name, address, username, email, password, phone }) => {
    return `
    <div class="container">
            <fieldset>
                <div class="card-header">Informações Pessoais:</div>
                <div class="form-group">
                    <label for="firstname">Nome:</label>
                    <input type="text" id="firstname" disabled value="${name.firstname}">
                </div>
                <div class="form-group">
                    <label for="lastname">Sobrenome:</label>
                    <input type="text" id="lastname" disabled value="${name.lastname}">
                </div>
                <div class="form-group">
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" disabled value="${email}">
                </div>
                <div class="form-group">
                    <label for="username">Nome de usuário:</label>
                    <input type="text" id="username" value="${username}">
                </div>
                <div class="form-group">
                    <label for="password">Senha:</label>
                    <input type="password" id="password" value="${password}">
                </div>
                <div class="form-group">
                    <label for="phone">Telefone:</label>
                    <input type="text" id="phone" value="${phone}">
                </div>
            </fieldset>
        </div>
        <div class="container">
            <fieldset>
                <div class="card-header">Informações de Endereço: </div>
                <div class="form-group">
                    <label for="city">Cidade:</label>
                    <input type="text" id="city" value="${address.city}">
                </div>
                <div class="form-group">
                    <label for="street">Logradouro:</label>
                    <input type="text" id="street" value="${address.street}">
                </div>
                <div class="form-group">
                    <label for="number">Número:</label>
                    <input type="text" id="number" value="${address.number}">
                </div>
                <div class="form-group">
                    <label for="zipcode">CEP:</label>
                    <input type="text" id="zipcode" value="${address.zipcode}">
                </div>
            </fieldset>
        </div>
        <div class="container">
            <button class="button" id="salvar">Salvar</button>
        </div>
        <div id="response"></div>
    `;
}

export default usuarioForm;