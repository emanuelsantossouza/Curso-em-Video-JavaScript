/*  COMANDO PARA PEGAR A HORA ATUAL
    var agora = new Date()
    var hora = agora.getHours()
*/

var hora = 19
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 7 && hora < 12) {
    console.log("Good Mornig! \n Bom Dia! \n Buenas Días!")
} else if (hora >= 12 && hora <= 18 ){
    console.log("Good Afternoon! \n Boa Tarde! \n Buenas Tardes!")
} else if (hora >= 19 && hora <= 23){
    console.log("Good Evining! \n Boa Noite! \n Buenas Noches!")
} else {
    console.log("Good Night! \n Boa madrugada!")
}