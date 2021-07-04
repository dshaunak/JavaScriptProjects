let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let res = 0;
let parag = document.getElementById("sum");

function addNums() {
  console.log("Add btn pressed");
  res = parseInt(num1.value) + parseInt(num2.value);
  parag.textContent = "Sum: " + res;
}

function subNums() {
  res = parseInt(num1.value) - parseInt(num2.value);
  parag.textContent = "Substraction: " + res;
}

function mulNums() {
  res = parseInt(num1.value) * parseInt(num2.value);
  parag.textContent = "Multiplication: " + res;
}

function divNums() {
  if (parseInt(num1.value) != 0) {
    res = parseInt(num1.value) / parseInt(num2.value);
    parag.textContent = "Division: " + res;
  }
  else {
    parag.textContent = "Dividend cannot be 0"
  }
}
