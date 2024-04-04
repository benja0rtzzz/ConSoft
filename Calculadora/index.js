let fullOperation = '';
let fullOperation1 = '';
let results = [];
let operations = [];

function number(value){
    console.log(value);
    fullOperation = fullOperation + value;
    rendernumber();
}

function operation(op){
    console.log(op);
    let [operando1, operador, operando2] = fullOperation.toString().split(/(\+|-|\x|\/)/);
    if (operador) return;
    fullOperation = fullOperation + op;
    rendernumber();
}

function calculateResult() {
    const values = fullOperation.split(/(\+|\-|\^|\x|\/)/);
    console.log(values);
  
    let [number1, operador, number2] = fullOperation.split(/(\+|\-|\^|\x|\/)/);
  
    console.log(number1);
    console.log(number2);
    console.log(operador);
  
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
  
    switch (operador) {
        case 'x':
            operations.push(fullOperation + '=');
            fullOperation = multiplication(number1, number2);
            results.push(fullOperation);
            break;
        case '+':
            operations.push(fullOperation + '=');
            fullOperation = addition(number1, number2);
            results.push(fullOperation);
            break;
        case '-':
            operations.push(fullOperation + '=');
            fullOperation = substraction(number1, number2);
            results.push(fullOperation);
            break;
        case '/':
            operations.push(fullOperation + '=');
            fullOperation = division(number1, number2);
            results.push(fullOperation);
            break;
        case '^':
            operations.push(fullOperation + '=');
            fullOperation = power(number1, number2);
            results.push(fullOperation);
            break;
      default:
        break;
    }
  
    rendernumber();
  }
  
  function multiplication(number1, number2) {
    return number1 * number2;
  }
  function addition(number1, number2){
    return number1 + number2;
  }
  function substraction(number1, number2){
    return number1 - number2;
  }
  function division(number1, number2){
    return number1 / number2;
  }
  function power(number1, number2){
    return Math.pow(number1,number2);
  }


function clearCalc(){
    console.clear();
    fullOperation = '';
    fullOperation1 = '';
    rendernumber();
    rendernumber1();
}

function showResults(){
    let i = 0;
    let temp = '';
    fullOperation = operations[operations.length-1];
    rendernumber();
    fullOperation1 = results[results.length-1];
    rendernumber1();
    operations.pop();
    results.pop();
}
  
function rendernumber(){
    document.getElementById('screen').innerHTML = fullOperation;
}

function rendernumber1(){
    document.getElementById('screen1').innerHTML = fullOperation1;
}
