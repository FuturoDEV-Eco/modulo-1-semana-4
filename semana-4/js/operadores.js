// //Operadores matematicos
// let a = 2;
// let b = 4;
// console.log(a + b);
// console.log(b - a);
console.log(b * a);
console.log(b / a);
console.log(b ** a);
console.log(b % a);

//Operadores de atribuição
let numero1 = 20;
let numero2 = 14;

console.log(numero1 += numero2);
console.log(numero1 -= numero2);
console.log(numero1 *= numero2);
console.log(numero1 /= numero2);
console.log(numero1 **= numero2);
console.log(numero1 %= numero2);
  
//Operação de Comparação

let fruta = "420";
let valorFruta = 20;

console.log(fruta === valorFruta);
console.log(fruta >= valorFruta);
console.log(fruta <= valorFruta);
console.log(fruta > valorFruta);
console.log(fruta < valorFruta);
console.log(fruta !== valorFruta);

//Operação Lógicos
let animal1 = "cachorro";
let animal2 = "gato";
let testeTrueOuFalse = true;

//&& - AND - true && true = true;
// || - OR - true || false = true;
// ! - NOT - !true = false;

console.log(animal1 || animal2);
console.log(animal2 || animal1);
console.log(animal2 && animal1);
console.log(!testeTrueOuFalse);

//Tipo de Dados - Array
let arrayNumeros = [2,2,34,54,12];
let arrayNomes = ['Andre','Pedro','Bianda','Carina','Janaina', "Caled"];
let arrayVariosTiposDados= ['Juliana', true, null, 'Vitor'];

console.log(arrayNomes);
console.log(arrayNomes[1]);
console.log(arrayNomes[4]);

//Tipo de Dado - Objeto

let objetoPessoa = {
    nome: 'Felipe',
    sobrenome: 'Hissa',
    idade: 25,
    altura: 1.80
}


//EXEMPLOS
let arrayDeObjetos = [
    { nome: 'Bianca', sobrenome: 'Barcelos', idade: 22 },
    {nome: 'Lucas', sobrenome: 'Barcelos', idade: 22},
    {nome: 'Vitor', sobrenome: 'Barcelos', idade: 22}
]

console.log(objetoPessoa);
console.log(objetoPessoa.idade);
console.log(objetoPessoa.sobrenome);

console.log(arrayDeObjetos);
console.log(arrayDeObjetos[0].nome);

let objetoDeArrays = {
    a: [12, 32, 11, 767],
    b: [34, 12, 54]
}

console.log(objetoDeArrays);
console.log(objetoDeArrays.a[1]);

//Operadores Unários
let contador = 5;

contador++;
console.log(contador);

contador--;
console.log(contador);
