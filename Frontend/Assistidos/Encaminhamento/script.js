const func = document.querySelector("#func");
func.innerHTML = JSON.parse(window.localStorage.getItem("userdata")).nome_completo;

const assistido = document.querySelector("#assistido");
assistido.addEventListener("keyup", (e) => {
    let val = e.target.value;

    if (val.length >= 3) {
        assistidos: [];
        console.log(val)

        if (val = 3) {
            fetch(`${url}/funcionario/getassistidos`, {
                method: "GET",
            })   



        }
    }
})

// function encaminhamento(){
//     let encaminhamento = document.querySelector(".encami").value;
//     let assistido = document.querySelector("#assistido");

//     var data = JSON.astringify({

//     })

//     fetch(`${url}/funcionario/encaminhamento`, {
//         method: "POST",
//         headers: {

//         },

//     })
//     .then(() => {
//         if () {

//         }

//     });
//     .then(() => {

//     });

// }