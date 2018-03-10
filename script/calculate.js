let input = document.getElementById('input'),
    note = document.getElementById('note'),
    numbers = '0',
    cal = {
      number1: 0,
      number2: 0,
      operator: ''
    },
    operators = {
      '+': function(a,b) {return a + b},
      '-': function(a,b) {return a - b},
      '*': function(a,b) {return a * b},
      '/': function(a,b) {return a / b}
    };

function display(number) {
  if(numbers === '0') {
    numbers = number;
} else {
    numbers += number;
  }
  input.value = numbers;
}

function math(op) {
  if(cal.number1 === 0) {
    cal.number1 = Number(numbers);
    cal.operator = op;
} else if(cal.number1 !== 0) {
    cal.number2 = Number(numbers);
}
  cal.number1 = operators[cal.operator](cal.number1, cal.number2);
  cal.operator = op;
  note.value = cal.number1 + " " + cal.operator + " ";
  input.value = '0';
  numbers = '0';
}

function percent() {
  if(cal.number1 === 0) {
    note.value = '0';
    input.value = '0';
} else {
    numbers = (cal.number1 * Number(numbers)) / 100;
    input.value = numbers;
  }
}

function squareroot() {
  numbers = Math.sqrt(Number(numbers)).toString();
  input.value = numbers;
}

function timesitself() {
  numbers = numbers * numbers;
  input.value = numbers;
}

function splitone() {
  numbers = (1 / Number(numbers)).toString();
  input.value = numbers;
}

function equal() {
  if(cal.operator == '') {
    input.value = numbers;
} else {
    cal.number2 = Number(numbers);
    cal.number1 = operators[cal.operator](cal.number1, cal.number2);
    numbers = cal.number1.toString();
    input.value = numbers;
    cal.number2 = 0;
    cal.number1 = 0;
    cal.operator = '';
    note.value = '';
  }
}

function clearall() {
  input.value = '0';
  note.value = '';
  numbers = '0';
  cal.number1 = 0;
  cal.number2 = 0;
  cal.operator = '';
}

function clearcurrent() {
  input.value = '0';
  numbers = input.value;
}

function clearlast() {
  numbers = numbers.slice(0, -1)
  input.value = numbers;
  if(numbers === '') {
    numbers = '0';
    input.value = numbers;
  }
}

function posneg() {
  if(Number(numbers) > 0) {
    numbers = "-" + numbers;
} else {
    while(numbers.charAt(0) === '-') {
      numbers = numbers.substr(1);
    }
  }
  input.value = numbers;
}
