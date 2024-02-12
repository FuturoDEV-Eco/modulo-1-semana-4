let data = new Date().getDay();

switch (data) {
  case 0:
    console.log("domingo");
    break;
  case 1:
    console.log("segunda");
    break;
  case 2:
    console.log("terça-feira");
    break;
  case 3:
    console.log("quarta-feira");
    break;
  case 4:
    console.log("quinta-feira");
    break;
  case 5:
    console.log("sexta-feira");
    break;
  case 6:
    console.log("sábado");
}

console.log(new Date());


let mes = prompt("Insira o mês que você está");

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'dezembro':
        alert("Verão");
        break;
    case 'março':
    case 'abril':
    case 'maio':
        alert("Outono");
        break;
    case 'junho':
    case 'julho':
    case 'agosto':
        alert("Inverno");
        break;
    case 'setembro':
    case 'outubro':
    case 'novembro':
        alert("Primavera");
        break;
    default:
        alert("Mês inválido");
        break;
}

//switch com if/else
let valor = 1;
let cor = 'azul';

switch (valor) {
    case 1: 
    if(cor === 'azul'){
        // console.log('a cor é azul');
        document.write('a cor é azul');
    } else{
        console.log('a cor não é azul');
    }
     break;
    default:
        console.log("ok");
        break;
}


