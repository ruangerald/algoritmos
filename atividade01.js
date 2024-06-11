let resposta1 = document.getElementById("resposta1")
let resposta2 = document.getElementById("resposta2")

function resolver(){

    let questao1 = 5 + 3 * 4 - 8 / 2
    let questao2 = 9 - 4 * 9 / 3 + 6 / 2

    resposta1.innerHTML = "A resposta da primeira pergunta é: " + questao1
    resposta2.innerHTML = "A resposta da segunda pergunta é: " + questao2

}