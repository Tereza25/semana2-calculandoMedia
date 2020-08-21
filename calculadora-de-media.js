const input = require("readline-sync")

console.log("=== Partiu calcular sua media ===")

let input1 = input.question ('primeira nota: ')

if (typeof parseFloat (input1) === 'number') 

if (isNaN(parseFloat(input1))) {
    input1 = input.question('digite um numero ai')
    if(isNaN(input1)) {
      input1 = input.question('digite um numero, PORFAVORRR!:')  
    }
} 

    const input2 = input.question ('segunda nota: ')
    const input3 = input.question ('terceira nota: ')
    const input4 = input.question ('quarta nota: ') 
    const input5 = input.question ('quinta nota: ')
    const input6 = input.question ('sexta nota: ')

    const total = parseFloat(input1) + parseFloat(input2) + parseFloat(input3) + parseFloat(input4) + parseFloat(input5) + parseFloat(input6)
    const media = total / 6 

    console.log(`===== sua media foi: ${media.toFixed(1)} =====`)

    
       if (media >= 7) {
        console.log("Estudante APROVADA/O")
    } else if (media < 5 ) {
        console.log("Estudante REPROVADA/O")
    } else {
        console.log("Estudante em RECUPERAÇÃO")
    }


  
