let resposta = document.getElementById("resposta")


function resolver(){

    let trecho1 = 27 / 3.5
    let trecho2 = 39 / 6.3

    let mediatotal =  (trecho1 + trecho2) / 2

    resposta.innerHTML = "A média total que este carro fez é igual a: " + mediatotal.toFixed(2) + " Km/L"
    
}