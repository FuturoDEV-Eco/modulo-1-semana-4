//verificar se numero é positivo, negativo ou zero
let numero = 1;

if(numero > 0 ){
    console.log("o numero é positivo");
} else if(numero < 2){
    console.log('o numero é negativo');
} else{
    console.log('o numero é zero');
}

//verificar se idade é maior ou igual a 18 para votar
let valors = 20

if (valor >=18) {
  console.log("pode votar")
} else {
  console.log("Não pode votar")
}

//verificar se usuario está logado no sistema
let isLogged = true;

let showMessage = isLogged ? "Usuário logado" : "Usuário não logado";

console.log(showMessage);

//verificar se item tem desconto de 10%
let valor = 100;
let valorDoDesconto;
let valorComDesconto;

valorDoDesconto = valor * 0.10;

valorComDesconto = valor - valorDoDesconto;

console.log("O valor original é:")
console.log(valor)
console.log("O desconto foi de:")
console.log(valorDoDesconto)
console.log("O valor final a ser pago é:")
console.log(valorComDesconto)

let valorProduto = prompt('Informe o valor do produto: ');
let desconto = prompt('Informe a % de desconto: ');

alert(`Valor inicial R$${Number(valorProduto)} | Desconto de ${desconto}% | Valor com desconto R$${Number(valorProduto * (1 - desconto / 100))}`)
let proshampoovalor = 20;
let desc = 0.10
let pertodevencer = true;
if (pertodevencer == true){
    let desconto = proshampoovalor * desc;
    let prom = proshampoovalor - desconto;
    console.log(prom);
}

//Concatenação
let user = {
    nome: "Wallis",
    idade: 24
}

console.log('Sou o ' + user.nome + ' e tenho ' + user.idade + ' anos de idade.' )
console.log(`Sou o ${user.nome} e tenho ${user.idade} anos de idade.`)

