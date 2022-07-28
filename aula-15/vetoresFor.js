
/*
num.push(1, 4)
num.sort()

console.log(num)
console.log(`O primeiro elemento é ${num[0]}`)
console.log(`Nosso vetor é  o ${num} `)
console.log(`O vetor tem ${num.length} posições`)
*/

let num = [5, 8, 2, 9, 3]
console.log(num)
num[5] = 1


/*                  FORMA TRADICIONAL!!!
for(let pos=0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

//                  FORMA MAIS RAPIDA E INTELIGENTE!!!
for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}