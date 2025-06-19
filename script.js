
// Amount Text
const totalText = document.getElementById('total-amount');
const tipAmountText = document.getElementById('tip-amount');
const customInput = document.getElementById('custom');


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


function handleInputChange(evt) {
  const value = parseInt(evt.target.value, 10);
  console.log(evt.target.name);
  switch(evt.target.name) {
    case 'bill':
      billAmount = value;
      return;

    case 'tip':
      tipPercent = value;
      return;

    case 'custom':
      customTip = value;
      return;

    case 'people':
      people = value;
      return;

    default:
      return;
  }
}



function calculateTotal() {
  const tipAmount = (tipPercent / 100) * billAmount;
  const tipPerPerson = tipAmount / people;
  const total = (billAmount + tipAmount) / people;
  console.log(total);
}

function renderTotal() {
  
}


bill.addEventListener('change', handleInputChange);
tipInputs.forEach((radioInput) => radioInput.addEventListener('change', handleInputChange));
customInput.addEventListener('change', handleInputChange);
numberOfPeople.addEventListener('change', handleInputChange);