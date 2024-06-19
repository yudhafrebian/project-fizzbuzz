const fizzBuzz = (number1, number2) => {
    const result = number1 + number2;
    if (number1 === 0 || number2 === 0) {
        alert('input must not be 0');
        return null;
    }
    if (result % 3 === 0 && result % 5 === 0) {
        return `FizzBuzz ${number1} + ${number2} = ${result}`;
    }
    if (result % 3 === 0) {
        return `Fizz ${number1} + ${number2} = ${result}`;
    }
    if (result % 5 === 0) {
        return `Buzz ${number1} + ${number2} = ${result}`;
    }
    return `${number1} + ${number2} = ${result}`;
};

function getValue() {
    const value1 = document.getElementById('number1').value;
    const value2 = document.getElementById('number2').value;

    const input1 = parseInt(value1);
    const input2 = parseInt(value2);

    if (isNaN(input1)) {
        alert(`Input ${value1} is not a number`);
        return;
    } else if (isNaN(input2)) {
        alert(`Input ${value2} is not a number`);
        return;
    }

    const result = fizzBuzz(input1, input2);
    if (result !== null) {
        const divResult = document.getElementById('result');
        const paragraph = document.createElement('p');
        paragraph.innerHTML = result;
        divResult.append(paragraph);
    }
}