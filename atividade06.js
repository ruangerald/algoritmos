let resposta = document.getElementById("resposta")


function resolver(){
    let peso1 = 589
    let peso2 = 1973
    let peso3 = 1470
    let peso4 = 2420
    let peso5 = 744

    let mediag = (peso1 + peso2 + peso3 + peso4 + peso5) / 5
    let mediakg = mediag / 1000

    resposta.innerHTML = "A média de peso é igual a: " + mediag +"g ou " + mediakg.toFixed(2) + "Kg"
}