function enviar() {
    var nome, email, assunto, msg
    nome = document.getElementById("nome").value
    email = document.getElementById("email").value
    assunto = document.getElementById("assunto").value
    msg = document.getElementById("msg").value

    if (nome === "" || email === "" || assunto === "" || msg === "") {
        alert("Todos os campos devem ser preenchidos!")
    } else {
        if (email.includes("@") && email.includes(".")) {
            alert("Olá, " + nome + ",\n\nObrigado por se comunicar conosco. Tenha um ótimo dia!\n\nAtenciosamente,\nGameNews")

            window.location.reload();

        } else {
            alert("O e-mail é inválido")
        }
    }
}