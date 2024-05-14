const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    }
  }
  
  const calculator = new Calculator();
  
  readline.question('Enter the first number: ', (firstNumber) => {
    readline.question('Enter the second number: ', (secondNumber) => {
      readline.question('Enter the operation (add, subtract, multiply, divide): ', (operation) => {
        let result;
        switch (operation) {
          case 'add':
            result = calculator.add(Number(firstNumber), Number(secondNumber));
            break;
          case 'subtract':
            result = calculator.subtract(Number(firstNumber), Number(secondNumber));
            break;
          case 'multiply':
            result = calculator.multiply(Number(firstNumber), Number(secondNumber));
            break;
          case 'divide':
            result = calculator.divide(Number(firstNumber), Number(secondNumber));
            break;
          default:
            console.log('Invalid operation');
            readline.close();
            return;
        }
        console.log(`The result is: ${result}`);
        readline.close();
      });
    });
  });