let relatorio = document.querySelector(".relatorio");
let btn = document.querySelector(".btnLog");

relatorio.value;

function relatorio() {
        // fetch('https://app-ongdigital-backend.herokuapp.com/relatorio/assistido'), {
        fetch('https://localhost:3000/relatorio/assistido'), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: data
    }
        .then((resp) => {
            if (resp.status == 400) {
                alert("Falha ao enviar relatório")
            }
            return resp.json();
        })
        .then((data) => {
                localStorage.setItem("userdata", JSON.stringify(data));
                window.location.href = "../../Assistidos/VerAssistido";

            }
        );
}