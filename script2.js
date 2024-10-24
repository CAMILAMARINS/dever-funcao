let Conv

function CM(reais, Vmoeda, Nmoeda){

    Conv= reais * Vmoeda
    console.log(`R$ ${ reais} vale ${Conv}, ${Nmoeda}`)
}

function CV(reais, Vmoeda, Nmoeda){

    CM(reais, Vmoeda, Nmoeda)

}

let reais, Vmoeda, Nmoeda

        reais = parseFloat (prompt("Digite o valor em reais:"))
        Vmoeda = parseFloat (prompt("Digite o valor da cotação:"))
        Nmoeda = prompt("Digite o nome moeda:")

    CV (reais, Vmoeda, Nmoeda)
