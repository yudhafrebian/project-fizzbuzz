const fizzBuzz = (number1, number2) => {
    
    const result = number1 + number2;
    if (number1 + number2 === 0){
        alert (`Input must not 0`)
        return;
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
    else {
        return `${number1} + ${number2} = ${result}`;
    }
}

function getValue() {
    const input1 = parseInt(document.getElementById('number1').value);
    const input2 = parseInt(document.getElementById('number2').value);
    
    if (isNaN(input1)) {
        alert(`Input abc is not a number`);
        return;
    } else if (isNaN(input2)) {
        alert(`Input abc is not a number`);
        return;
    }
    
    const result = fizzBuzz(input1, input2);
    const divResult = document.getElementById("result");
    const paragraph = document.createElement("p");
    paragraph.innerHTML = result ;
    divResult.append(paragraph);
}
