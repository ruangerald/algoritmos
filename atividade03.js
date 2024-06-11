let resposta1 = document.getElementById("resposta1")
let resposta2 = document.getElementById("resposta2")

function resolver(){

    let questao1 = ( 5 + 3 ) * 5 / 2 + 8 * 3
    let questao2 = ( 7 - 2 ) + 9 / ( 2 + 1 ) * 8

    resposta1.innerHTML = "A resposta da primeira pergunta é: " + questao1
    resposta2.innerHTML = "A resposta da segunda pergunta é: " + questao2

}