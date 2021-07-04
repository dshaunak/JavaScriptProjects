//document.getElementById("count_el").innerText = 5
//let myAge = 24
//console.log(myAge)
//let humanDogRatio = 7
//let myDogAge = myAge*humanDogRatio
//console.log(myDogAge)
//To mass comment, select text and  press Ctrl+K+C

let count = 0;
let countEl = document.getElementById("count-el");
document.getElementById("increment-btn");
let saveMsg = document.getElementById("save-msg");
//document.getElementById("clear-btn")
console.log(count);

function increment() {
  count += 1;
  countEl.textContent = count;
  //console.log("The Increment button was clicked");
}

function saveEl() {
  console.log("The save button was clicked " + count);
  saveMsg.textContent += " " + count + "| ";
  clearEl();
}

function clearEl() {
  count = 0;
  countEl.textContent = 0;
  console.log("The count was cleared.");
}
