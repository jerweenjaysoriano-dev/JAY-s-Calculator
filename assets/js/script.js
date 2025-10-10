// Function 1: Say Hello
function ENTER() {
  const name = document.getElementById("name").value;
  if (name.trim() === "") {
    document.getElementById("result").innerText = "Put your name first.";
  } else {
    document.getElementById("result").innerText = `Hello,${name} Good morning how can i help you?`;
  }
}

// Helper: Get both numbers safely
function getNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText = "Enter valid numbers first.";
    return null;
  }
  return { num1, num2 };
}

// Function 2: Add
function addNumbers() {
  const nums = getNumbers();
  if (!nums) return;
  document.getElementById("result").innerText = `${nums.num1} + ${nums.num2} = ${nums.num1 + nums.num2}`;
}

// Function 3: Subtract
function subtractNumbers() {
  const nums = getNumbers();
  if (!nums) return;
  document.getElementById("result").innerText = `${nums.num1} - ${nums.num2} = ${nums.num1 - nums.num2}`;
}

// Function 4: Multiply
function multiplyNumbers() {
  const nums = getNumbers();
  if (!nums) return;
  document.getElementById("result").innerText = `${nums.num1} × ${nums.num2} = ${nums.num1 * nums.num2}`;
}

// Function 5: Divide
function divideNumbers() {
  const nums = getNumbers();
  if (!nums) return;
  if (nums.num2 === 0) {
    document.getElementById("result").innerText = "Error: Cannot divide by zero!";
    return;
  }
  document.getElementById("result").innerText = `${nums.num1} ÷ ${nums.num2} = ${nums.num1 / nums.num2}`;
}
