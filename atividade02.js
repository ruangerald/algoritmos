let resposta1 = document.getElementById("resposta1")
let resposta2 = document.getElementById("resposta2")

function resolver(){

    let questao1 = 5.5 + 3.3 / 2.0 * 4.8 + 6.1
    let questao2 = 7.9 * 3.2 + 5.2 / 3.1 + 7.9

    resposta1.innerHTML = "A resposta da primeira pergunta é: " + questao1
    resposta2.innerHTML = "A resposta da segunda pergunta é: " + questao2

}