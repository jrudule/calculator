const container = document.querySelector('.container');
const buttons = document.querySelectorAll('button');
const displayValue = document.querySelector('.displayValue');

let firstNum = '';
let operator;
let secondNum = '';


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

let sum = 0;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (sum === 0){
            if(button.value === 'Clear'){
                displayValue.textContent = '';
                firstNum = '';
                secondNum = '';
                operator = '';
                return;
            }if (isNaN(button.value) && button.value !== 'Clear'){
                displayValue.textContent += button.value;
                operator = button.value;
                console.log(operator); ///////////
                sum = 1;
                return;
            }
            displayValue.textContent += button.value;
            firstNum += button.value;
            console.log(firstNum); //////
        } if(button.value === 'Clear'){
            displayValue.textContent = '';
            firstNum = '';
            secondNum = '';
            operator = '';
            sum = 0;
        } if(sum === 1){
            if(button.value === "="){
                console.log(operate(firstNum, operator, secondNum));

                displayValue.textContent = 
                operate(firstNum, operator, secondNum);

                firstNum = operate(firstNum, operator, secondNum);
                secondNum = '';

                console.log(firstNum);
                console.log(secondNum);

            } if(isNaN(button.value) && button.value !== "="){
                console.log(operate(firstNum, operator, secondNum));

                displayValue.textContent = 
                operate(firstNum, operator, secondNum) + button.value;

                firstNum = operate(firstNum, operator, secondNum);

                operator = button.value;
                secondNum = '';
                console.log(firstNum);
                console.log(secondNum);
                return;
            }
            if(isNaN(button.value) === false){
                displayValue.textContent += button.value;
                secondNum += button.value;
                console.log(secondNum); ////////////
                console.log(sum);
            }
        }
     });
});


function operate(firstNum, operator, secondNum){
    if (operator === '+'){
        return (add(+firstNum, +secondNum));
    }
    if (operator === '-'){
        return (subtract(+firstNum, +secondNum));
    }
    if (operator === '*'){
        return (multiply(+firstNum, +secondNum));
    }
    if (operator === '/'){
        return (divide(+firstNum, +secondNum));
    }
}
