function CadastrarFamiliar() {

    let local = localStorage.getItem('assistido')
    let nome = document.querySelector(".nome")
    let rg = document.querySelector(".rg")
    let telefone = document.querySelector(".telefone")
    let email = document.querySelector(".email")
    let endereco = document.querySelector(".endereco")

    var data = JSON.stringify({
        "id_assistido": local,
        "nome_completo": nome.value,
        "rg": rg.value,
        "telefone": telefone.value,
        "email": email.value,
        "endereco": endereco.value
    })
    console.log(data)


    // fetch("http://10.87.207.27:3000/assistido/familiar", {
    fetch("http://localhost:3000/assistido/familiar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        })
        .then(response => { return response.json() })
        .then(data => {
            if ((nome.value == "") && (rg.value == "") && (email.value == "") && (endereco.value == "") && (telefone.value == "")) {
                data = null
                alert("Falha ao Cadastrar ")
            } else {
                alert("Cadastro Efetuado")
                window.location.href = "../../Assistidos/VerAssistido/"
            }

        })
}