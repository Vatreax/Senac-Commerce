const alert = ( message ) => {
    return `
    <div id="successModal" class="modal">
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <div class="container">
                <h2 class="sucesso">Sucesso!</h2>
                <p>${message}</p>
            </div>
        </div>
    </div>
    `;
}

export default alert;