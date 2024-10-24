function ad(n1, n2){
    return n1+n2
}

    function sub(n1, n2){
        return n1-n2
    }

        function mult(n1, n2){
            return n1*n2
        }

            function div(n1, n2){

                if(n2!=0){
                    return n1/n2
                }
                
            }

let op, n1, n2

while(op!=0){

    op= Number(prompt("Escolha: 1 - ad  2 - sub  3 - mult  4 - div"))
    n1= Number(prompt("Digite um numero:"))
    n2= Number(prompt("Digite um numero:"))

    switch(op){

        case 1:

            alert(ad(n1, n2))

        break

        case 2:

            alert(sub(n1, n2))

        break

        case 3:

            alert(mult(n1, n2))

        break

        case 4:

            alert(div(n1, n2))

        break
    }

}