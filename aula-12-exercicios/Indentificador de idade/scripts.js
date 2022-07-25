function verificar() {
    var data = new Date()       //  ENTRADAS
    var ano = data.getFullYear()
    var fano = document.getElementById("txano") //DATA DE NASCIMENTO
    var res = document.querySelector("div#res")

    if (fano.value.length == 0 || Number(fano.value) > ano) {   //SE O ANO FOR UMA DATA NO FUTURO, DARA ERRO
        window.alert("[Erro] Verifique os Dados")
    } else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)     //CONTADOR DE IDADE
        var genero = ''
        var img = document.createElement('img')    //ADD UMA DIV NO HTML PELO JAVASCRITP
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked) {
            if (idade >= 0 && idade < 10) {
                //Kid 
                genero = 'Garoto'
                img.setAttribute('src', 'kid-boy.png')  //COLOCANDO IMAGEM
            } else if (idade < 21) {
                //jovem
                genero = 'Adolecente'
                img.setAttribute('src', 'teen-man.png')
            } else if (idade < 50) { 
                //Adulto
                genero = 'Homen'
                img.setAttribute('src', 'man.png')
            } else {
                // Idoso
                genero = 'Homen'
                img.setAttribute('src', 'old-man.png')
            }
        
        } else if (fsex[1].checked) {
            
            if (idade >= 0 && idade < 10) {
                //Kid
                genero = "Garoto"
                img.setAttribute('src', 'kid-girl.png')
            } else if (idade < 21) {
                //jovem
                genero = "Adolecente"
                img.setAttribute('src', 'teen-woman.png')
            } else if (idade < 50) { 
                //Adulto
                genero = "Mulher"
                img.setAttribute('src', 'woman.png')
            } else {
                // Idoso
                genero = "Mulher"
                img.setAttribute('src', 'old-woman.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)    //POSICIONADO A IMAGEM ADD ACIMA
    }
}