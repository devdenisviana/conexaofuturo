let expression = '';

function appendNumber(number) {
    expression += number;
    updateDisplay();
}

function appendOperator(operator) {
    expression += operator;
    updateDisplay();
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(expression);
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        alert('Erro na expressão!');
        clearDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = expression;
}

function clearCalculator() {
    expression = '';
    updateDisplay();
}
