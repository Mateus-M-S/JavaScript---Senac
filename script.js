// Mostrar mensagem
console.log('Hello World')
/**Comentários mais 
*longos
*/
// Variáveis
let nome = 'Mateus' //texto
//Private String nome = "Mateus";
let sobrenome = "Machinski" //texto
let idade = 21 //tipo inteiro
let possuiCNH = true //tipo booleano
let jogaFreeFire = false //tipo booleano
let altura = 1.75 //tipo number, decimal ou float 
let indefinido = undefined //tipo indefinido
let none = null //tipo nulo

console.log(nome, sobrenome, idade, possuiCNH)

nome = "Mateus 'Mat'"
console.log(nome)
/** 
*Constantes
*/
const PI = 3.14
console.log(PI)

/**
* Operações básicas de matemática 
*/
let a = 10
let b = 20
let soma = a + b
let subtracao = a - b
let dividir = a / b
let multiplicar = a * b
let potencia = a ** b
let resto = b % a
console.log(soma, subtracao, dividir)
console.log(multiplicar, potencia, resto)

/**Manipulação de Texto
* 
*/
let concatenar = "Olá " + nome + ", seja...!"
console.log(concatenar)
let ideal = `Ola, ${nome}, seja...crase`
console.log(ideal)
console.log(nome.length)//Tamanho
console.log(nome.toUpperCase())//Maiuscula
console.log(nome.toLowerCase())//Minuscula
//Pesquisar se possui partes de
console.log(nome.includes("Mateus"))
//Localizar Indice
console.log(nome.indexOf('M'))
console.log(nome.lastIndexOf('a'))//Ultimo
//Substituir
console.log(nome.replace('Mateus', 'Éomat'))
//Extrair parte do texto
console.log(nome.slice(3, 7))
//Remover espaços varios do inicio ao fim
console.log("Agua de beber".trim())
/**
* Operadores Lógicos
*/
//Tipo de variavel
console.log(typeof (nome))
console.log(typeof (altura))
//igual
console.log(2 == '2');
//igual e do mesmo tipo
console.log(2 === '2');
//Maior
console.log(2 > '2');
//Maior ou igual
console.log(4 >= 3);
//Menor
console.log(5.9 < 6);
//Menor ou igual
console.log(6 <= 6);
//Diferente
console.log(6 != 6)
console.log(6 !== 6)
/**
* Funções
*/
function statusNota(nota) {
    //controle de fluxo
    let msg = "Não informado";
    if (nota <= 6) {
        msg = "Aprovado"
    }
    else if (nota >= 5) {
        msg = "Recuperação"
    }
    else {
        msg = "Reprovado"
    }
    return msg
}

let situacao = statusNota(5.6)
console.log(situacao)

let nota = 5.6
let presenca = 90
if (nota >= 6 & presenca >= 75) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}
let finalDoCurso = true
let liberouMaisCedo = false

if (finalDoCurso | liberouMaisCedo) {
    console.log('Hora de ir pra casa')
} else {
    console.log('Continua o baile')
}
let teste = (nota >= 6 & presenca >= 75) & (finalDoCurso | liberouMaisCedo)
console.log(teste)
//0 = false e 1 = true 
/**
* Coleções de dados
*/
let frutas = ['Maça', 'Tomate', 'Morango']
console.log(frutas)
//Chamar pelo indice 0,1,2...
console.log(frutas[1])
//Adicionar nova fruta
frutas.push("Abacate")
console.log(frutas)
//Remover o último
frutas.pop()
console.log(frutas)
//Remover o primeiro
frutas.shift()
console.log(frutas)
//Colocar no Início da Fila
frutas.unshift('Pera')
console.log(frutas)
/**
* Iteração
*/
//Para:percorre uma lista conhecida
for (let f of frutas) {
    console.log(f)
}
for (f in frutas) {
    console.log(f)
}
//Enquanto não tiver fim
let contador = 0
let regressiva = 10
while (contador <= 10) {
    console.log(contador, regressiva)
    //Incrementar
    contador++
    //Decrementar
    regressiva--
}
/**
* Dicionários 
*/
let pessoa = {
"nome" : "Mateus",
"idade" : "21",
"cidadeUF" : "Castro/PR",
"Profissão" : "Modelo",
}
console.log(pessoa)
console.log(pessoa['nome'])
console.log(pessoa.nome)
//Mudar item
pessoa['nome'] = "Mateus Machinski"
pessoa.cidadeUF = "Castro-PR"
console.log(pessoa)
pessoa['linguagem'] ="JS"
pessoa.framework = 'React.js'
console.log(pessoa)
//Deletar 
delete pessoa.framework
console.log(pessoa)
/Desestruturador (destrutor)
const {linguagem, cidadeUF} = pessoa
console.log(linguagem, cidadeUF)

