
let urlCandidatos = 'http://localhost:3000/candidatos';


const formulario = document.querySelector("#cadastro");
const campoNome = formulario.querySelector("#nome");
const campoData = formulario.querySelector("#data");
const campoTelefone = formulario.querySelector("#telefone");
const campoEmail = formulario.querySelector("#email");
const campoVaga = formulario.querySelector("#vaga");


formulario.addEventListener('submit', function(event){
    event.preventDefault();
    

    let dados = {
        nome: campoNome.value,
        data: campoData.value,
        telefone: campoTelefone.value,
        email: campoEmail.value,
        vaga: campoVaga.selectedOptions[0].textContent
    };


    fetch(urlCandidatos, {
        method: "POST",
        body: JSON.stringify(dados),
        headers: {
            'Content-type' : 'application/json'
        }
    })
    .then( resposta => resposta.json() )
    .then( dados => {
        console.log(dados);
        alert("Dados enviados com sucesso!");
    });
});
