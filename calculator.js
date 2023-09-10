const container = document.querySelector('.container');
const buttons = document.querySelectorAll('button');
const displayValue = document.querySelector('.displayValue');

let firstNum = '';
let operator;
let secondNum = '';
let error = 0;

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
    if(b === 0){
        displayValue.textContent = 'Error';
        toOnlyClear();
    }
    return a / b;
}

function toOnlyClear(){
    buttons.forEach((button) => {
        button.disabled = true;
        if(button.value === 'Clear'){
            button.disabled = false;
        }
        displayValue.style.color = 'red';
    });
}

function toEnableButtons(){
    buttons.forEach((button) => {
        button.disabled = false;
        displayValue.style.color = 'black';
    });
}

function toBackspace(){
    buttons.forEach((button) => {
        if(button.value === 'Backspace'){
            displayValue.textContent = displayValue.textContent.slice(0, -1);
        }
    });
}

let sum = 0;
buttons.forEach(button => {
    button.addEventListener('click', () => {

        if (sum === 0 && button.value !== '='){
            if(button.value === 'Clear'){
                toEnableButtons();
                displayValue.textContent = '';
                firstNum = '';
                secondNum = '';
                operator = '';
                return;
            } 
            if (button.value === '+' || button.value === '-' || button.value === '*' || button.value === '/'){
                toEnableButtons();
                displayValue.textContent += button.value;
                operator = button.value;
                sum = 1;
                return;
            }
            if(button.value === 'Backspace'){
                firstNum = firstNum.slice(0, -1);
                toBackspace();
            }
             if(isNaN(button.value) === false || button.value === '.'){
                if(button.value === '.'){
                    button.disabled = true;
                }
            displayValue.textContent += button.value;
            firstNum += button.value;
            }
        } 
        if(button.value === 'Clear'){
            toEnableButtons();
            displayValue.textContent = '';
            firstNum = '';
            secondNum = '';
            operator = '';
            sum = 0;
        } 
        if(sum === 1){
            if(button.value === 'Backspace'){
                if(displayValue.textContent.search(/\+|\-|\*|\//)){
                    operator = operator.slice(0, -1);
                    toBackspace();
                } else{
                    secondNum = secondNum.slice(0, -1);
                    toBackspace();
                }
            } 
            if(button.value === "="){
                toEnableButtons();
                
                displayValue.textContent = 
                operate(firstNum, operator, secondNum);

                firstNum = operate(firstNum, operator, secondNum);
                secondNum = '';
                return;
            }
            } if((button.value === '+' || button.value === '-' || button.value === '*' || button.value === '/') && secondNum === ""){
                toEnableButtons();
                
                displayValue.textContent = firstNum + button.value;
                operator = button.value;
                return;

            } if(button.value === '+' || button.value === '-' || button.value === '*' || button.value === '/'){
                toEnableButtons();

                displayValue.textContent = 
                operate(firstNum, operator, secondNum) + button.value;

                firstNum = operate(firstNum, operator, secondNum);
                operator = button.value;
                secondNum = '';
                return;
            }
            if(isNaN(button.value) === false || button.value === '.'){
                if(button.value === '.'){
                    button.disabled = true;
                }
                displayValue.textContent += button.value;                
                secondNum += button.value;
            }
        }
     });
});


function operate(firstNum, operator, secondNum){
    if (operator === '+'){
        return +(add(+firstNum, +secondNum)).toFixed(2);
    }
    if (operator === '-'){
        return +(subtract(+firstNum, +secondNum)).toFixed(2);
    }
    if (operator === '*'){
        return +(multiply(+firstNum, +secondNum)).toFixed(2);
    }
    if (operator === '/'){
        return +(divide(+firstNum, +secondNum)).toFixed(2);
    }
}
