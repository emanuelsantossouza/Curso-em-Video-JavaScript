function contar() {
      //            Entrada         \\
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let resp = document.getElementById("res")

    //              PROCESSAMENTO      \\
    if (ini.value.length == 0 || fim.value.length == 0){
        window.alert('[Erro] Por Favor informe os dados')
        resp.innerHTML = `Impossivel Contar!`
    } else {
        resp.innerHTML = "Contando: <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            window.alert("Você não informou o PASSO. \nEntão vai ser considerado PASSO 1")
            p = 1
        }
        if (i < f) {
            //Contador Positivo
            for(let contador = i; contador <= f; contador += p) {
                resp.innerHTML += `${contador}  \u{1F449}`
            }
        } else { 
            //Contador Negativo
            for(let contador = i; contador >= f; contador -= p) {
                resp.innerHTML += `${contador}  \u{1F449}`
            }
        } resp.innerHTML += `\u{1F3C1}`
    }
        
    

    

}