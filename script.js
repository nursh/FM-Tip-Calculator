
// Amount Text
const totalText = document.getElementById('total-amount');
const tipAmountText = document.getElementById('tip-amount');


// Form Elements
const form = document.querySelector('form');
const bill = form.elements.bill;
const tipInputs = form.elements.tip;
const numberOfPeople = form.elements.people;


// Variables
let billAmount;
let tipPercent;
let customTip;
let people;


function calculateTotal() {
  const tipAmount = (tipPercent / 100) * billAmount;
  const tipPerPerson = tipAmount / people;
  const total = (billAmount + tipAmount) / people;
  console.log(total);
}

function renderTotal() {
  
}

bill.addEventListener('change', handleChange);
function handleChange(evt) {
  billAmount = parseInt(evt.target.value);
  totalText.textContent = tipPercent === 0
    ? `$${billAmount}`
    : `$${billAmount * tipPercent}`;
}

function handleTipAmount(evt) {
  tipPercent = parseInt(evt.target.value);
}

tipInputs.forEach((radioInput) => radioInput.addEventListener('change', handleTipAmount));