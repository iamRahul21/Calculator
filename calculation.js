let input = "";
let result = "";

// Function to update the display
function updateDisplay() {
  document.getElementById("result").textContent = input;
  if (input == 'X'){
    X == '*'
  }
}

// Function to perform calculations
function calculate() {
  try {
    result = new Function('return ' + input)();
    input = result.toString();
    updateDisplay();
  } catch (error) {
    // Handle invalid expressions
    input = "Error";
    result = "";
    updateDisplay();
  }
}

// Function to handle button clicks
function appendToDisplay(value) {
  if (value === 'AC') {
    input = "";
    result = "";
  } else if (value === '=') {
    calculate();
  } else if (value === '+/-'){
    input = -input;
  } else if (value === 'X'){
    input += '*';
  } else if (value === '<<') {
    input = input.slice(0, -1); //
  } else {
    input += value;
  }
  updateDisplay();
}

// Function to handle keyboard input
document.addEventListener("keydown", function(event) {
  const key = event.key;
  if (/[0-9+\-*/.%]/.test(key)) {
    appendToDisplay(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Escape') {
    input = "";
    result = "";
    updateDisplay();
  } else if (key === 'Backspace') {
    input = input.slice(0, -1);
    updateDisplay();
  } else if (key === '*') { // Change 'X' to '*'
    appendToDisplay('*'); // Change 'appendToDisplay('X')' to 'appendToDisplay('*')'
  }
});

// Attach event listeners to calculator buttons
document.querySelectorAll(".grid-item, .grid-operation").forEach(function(button) {
  button.addEventListener("click", function() {
    const value = button.textContent;
    appendToDisplay(value);
  });
});

// Initialize the display
updateDisplay();
