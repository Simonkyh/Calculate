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
      '-': function(a,b) {return a - b}
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
} else if(cal.number1 !== 0) {
    cal.number2 = Number(numbers);
}
  cal.operator = op;
  cal.number1 = operators[cal.operator](cal.number1, cal.number2);
  note.value = cal.number1 + " " + cal.operator + " ";
  input.value = '0';
  numbers = '0';
}
