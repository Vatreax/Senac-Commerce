document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("mensagemSucesso").style.display = "block";
    setTimeout(() => {
        document.getElementById("cadastroForm").reset();
        document.getElementById("mensagemSucesso").style.display = "none";
    }, 3000);
});