var day = parseInt(prompt("Por favor forneça o dia atual"));
var month = parseInt(prompt("Por favor fornceça o mes atual"));
var year = prompt(parseInt("Por favor forneça o ano atual"));

if(day >= 1 || day <= 31 ) { 
    alert("O dia esta correto")
}else{
    alert("dia incorreto")
}

if(month >= 1 || day <= 12) {
    alert("mes validado")
}else{
    alert("mes invalido")
}

if(year >= 1 || year <= 2022) {
    alert("Ano valido")
}else{
    alert("Ano invalido ou tu e do futuro ou é do Ano 0!!")
}