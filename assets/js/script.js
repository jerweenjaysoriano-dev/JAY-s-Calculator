// 1. Store the current input string (for evaluation) and display string (for showing literal symbols)
let input = ""; // internal JS-friendly expression (uses / * - + )
let displayStr = ""; // shown to user (contains ÷ × − etc)

// 2. Function to handle button press and update display
function press(value) {
  // Map of display symbols to JS operator tokens
  const opMap = {
    '÷': '/',
    '×': '*',
    '−': '-',
    '+': '+'
  };

  if (value in opMap) {
    // Prevent starting with an operator
    if (input === "") return;
    // Prevent consecutive operators
    if (/[+\-*/]$/.test(input)) return;
    input += opMap[value];
    displayStr += value;
  } else {
    input += value;
    displayStr += value;
  }
  
  document.getElementById('display').value = displayStr;
}

// 3. Function to calculate the result of the expression
function calculate() {
  try {
    // Evaluate the JS-friendly input
    let result = eval(input);
    // Show the result (use default JS string for the evaluated number)
    document.getElementById('display').value = result;
    input = result.toString();
    displayStr = input;
  } catch (e) {
    document.getElementById('display').value = "Error";
    input = "";
    displayStr = "";
  }
}

// 4. Function to clear the display and reset input
function clearDisplay() {
  input = "";
  displayStr = "";
  document.getElementById('display').value = "";
}

// 5. Function to remove the last character (optional)
function backspace() {
  if (displayStr === "") return;
  const lastChar = displayStr.slice(-1);
  const opMap = { '÷': '/', '×': '*', '−': '-' };

  displayStr = displayStr.slice(0, -1);

  if (opMap[lastChar]) {
    // remove one operator char from internal input
    input = input.slice(0, -1);
  } else {
    // remove one digit/char from internal input
    input = input.slice(0, -1);
  }

  document.getElementById('display').value = displayStr;
}
