let resposta = document.getElementById("resposta")


function resolver(){
    let nota1 = 7.5
    let nota2 = 6.3
    let nota3 = 8.1

    let media = (nota1 + nota2 + nota3) / 3

    resposta.innerHTML = "A média desse aluno é igual a: " + media
}