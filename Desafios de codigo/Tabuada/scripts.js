function conta() {
    var numero = document.getElementById("numero")
    var descricao = document.getElementById("saida")

    if(numero.value.length == 0) {
        window.alert("[Erro] Informe um Número!!")
    } else {
        num = Number(numero.value)
        let c = 1
        descricao.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} X ${c} = ${num*c}`
            descricao.appendChild(item)
            c++
        }
        
    }

}