function carregar() { 
    var nome = prompt("Olá, Digite teu nome")
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('img')
    var comprimento = window.document.getElementById('comprimento')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    if (hora >= 0 && hora < 12) {
        //Bom dia!!
        alert(`Bom Dia Sr(a) ${nome}`)
        img.innerHTML = '<img src="manha.png">'
        document.body.style.background = "#C29557"
        msg.innerHTML = `Agora são ${hora}:${minuto} da manhã`
        comprimento.innerHTML = `Bom Dia | Good Morning | Buenos Días 🌞`
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        alert(`Boa Tarde Sr(a) ${nome}`)
        img.innerHTML = '<img src="tarde.jpg">'
        document.body.style.background = "#745D3C"
        msg.innerHTML = `Agora são ${hora}:${minuto} da tarde`
        comprimento.innerHTML = `Boa Tarde | Good Afternoon | Buenas Tardes ⛅`
    } else {
        //BOA NOITE
        alert(`Boa Noite Sr(a) ${nome}`)
        img.innerHTML = '<img src="noite.png">'
        document.body.style.background = "#17242C"
        msg.innerHTML = `Agora são ${hora}:${minuto} da noite `
        comprimento.innerHTML = `Boa Noite | Good Evening | Buenas Noches 🌙`
    }
}