let mathOperation;
getOperation();
do {
    let mathOperation = getOperation();
    }
while (mathOperation == "+" || "-" || '*' ||'/');

let firstNumber = getNumber ('Enter the first number');
    if (isNaN(firstNumber)){
        do {
            firstNumber= Number(prompt('please enter your first number')) ;
        }
        while (isNaN(firstNumber));
    }

let secondNumber = getNumber ('Enter the second number');
    if (isNaN(secondNumber)){
        do {
            secondNumber= Number(prompt('please enter your second number')) ;
        }
        while (isNaN(secondNumber));
    }

calcSeeResult (mathOperation, firstNumber, secondNumber);
 
//--
function getOperation(){
   return prompt('Hi! What math operation do you want to do? ');
}

function getNumber(question){
    return +prompt(question);
}

function calcSeeResult (mathOperation, firstNumber, secondNumber) {
    switch (mathOperation) {
        case '+':
            let mathResult = firstNumber + secondNumber;
            alert( 'Your result '+firstNumber +'+' +secondNumber +'=' +mathResult);
            break;
        case '-':
            let mathResult = firstNumber - secondNumber;
            alert( 'Your result '+firstNumber +'-' +secondNumber +'=' +mathResult);
            break;
        case '*':
            let mathResult = firstNumber * secondNumber;
            alert( 'Your result '+firstNumber +'*' +secondNumber +'=' +mathResult);
            break;
        case '/':
            let mathResult = firstNumber / secondNumber;
            alert( 'Your result '+firstNumber +'/' +secondNumber +'=' +mathResult);
            break;          
    }  
}


//function testOperation(mathOperation, firstNumber, secondNumber) {
  
    
//}





 
 
