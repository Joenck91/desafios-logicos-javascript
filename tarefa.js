//1. Concatenação de Arrays

let cidadesBrasileiras = ["São Paulo","Rio de Janeiro","Belo Horizonte","Salvador","Porto Alegre","Curitiba","Recife",];
let cidadesEstrangeiras = ["Nova Iorque","Los Angeles","Londres","Paris","Tóquio","Pequim","Berlim",];

console.log("1. Concatenação de Arrays:\nArray cidades brasileiras:" + cidadesBrasileiras);
console.log("Array cidades estrangeiras: " + cidadesEstrangeiras);

let cidades = cidadesBrasileiras.concat(cidadesEstrangeiras);
console.log("Arrays concatenados: \n" + cidades + "\n");

//2.  Removendo e Substituindo Elementos com Splice
let animais = ["Cachorro", "Gato", "Pássaro", "Peixe", "Coelho", "Tartaruga"];
console.log("2. Removendo e Substituindo Elementos com Splice:\nArray inicial: " + animais);
let trocandoAnimais = animais.splice(3,2, "Leão", "Elefante");
console.log("Array com animais trocados: "+animais+ "\n");

//3.   Verificando Condição com Estruturas de Controle
let numeros = [11, 29, 34, 42, 5, 36, 27, 81, 19, 60];

console.log("3. Verificando Condição com Estruturas de Controle:\nArray de números: " + numeros);

const maiorQue50 = numeros.some((num) => num > 50);

if (maiorQue50) {
    console.log("Há pelo menos um número maior que 50 no array.\n");
}
else {
    console.log("Não há números maiores que 50 no array.\n");
}

//4.   Somando Valores com um Loop for
let numerosInteiros = [20, 34, 58, 62, 72, 120, 500, 12, 2, 310, 51];
console.log("4. Somando Valores com um Loop for:\nArray de números inteiros: " + numerosInteiros);
let soma = 0

for (let index = 0; index < numerosInteiros.length; index++) {
    soma += numerosInteiros[index];  
}
console.log("Soma dos números inteiros: " + soma + "\n");

//5. Somando Valores com um Loop  while
let variosNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("5. Somando Valores com um Loop while:\nArray de vários números: " + variosNumeros);

let indexAtual = 0;
let valorAtual = 0;
let somando = 0;

while (indexAtual < variosNumeros.length) {
    valorAtual = variosNumeros[indexAtual];
    somando = somando + valorAtual;
    indexAtual++;
}
console.log("Soma dos vários números: " + somando + "\n");