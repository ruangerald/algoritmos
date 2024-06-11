let resposta = document.getElementById("resposta")


function calcular(){

    let p = Number(document.getElementById("p").value)
    let m = Number(document.getElementById("m").value)
    let g = Number(document.getElementById("g").value)

    let precop = p * 19
    let precom = m * 22
    let precog = g * 17
    
    let precofinal = precop + precog + precom

    resposta.innerHTML = "O valor final é igual a: " + precofinal + " reais"
    
}