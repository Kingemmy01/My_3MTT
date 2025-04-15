// Get references to display and result elements
const display = document.getElementById('display');
const resultDiv = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal');
const backspaceBtn = document.getElementById('backspace');
const percentBtn = document.getElementById('percent');

// Handle number and operator buttons
buttons.forEach(button => {
  const value = button.dataset.value;
  if (value) {
    button.addEventListener('click', () => {
      display.value += value;
      resultDiv.textContent = ''; // Clear result when typing
    });
  }
});

// Handle equals button
equalBtn.addEventListener('click', () => {
  try {
    const result = eval(display.value);
    resultDiv.textContent = result; // Display the result under input
  } catch (error) {
    resultDiv.textContent = 'Error'; // Show error message if invalid input
  }
});

// Handle clear button
clearBtn.addEventListener('click', () => {
  display.value = '';
  resultDiv.textContent = ''; // Clear result on clear
});

// Handle backspace button
backspaceBtn.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
  resultDiv.textContent = ''; // Clear result after backspace
});

// Handle percentage button
percentBtn.addEventListener('click', () => {
  if (display.value) {
    display.value = parseFloat(display.value) / 100;
    resultDiv.textContent = display.value; // Display percentage result
  }
});
