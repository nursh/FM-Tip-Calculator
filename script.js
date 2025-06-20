
// Amount Text
const totalText = document.getElementById('total-amount');
const tipAmountText = document.getElementById('tip-amount');
const customInput = document.getElementById('custom');

const errorText = document.getElementById('error-text');
const resetButton = document.getElementById('reset');


// Form Elements
const form = document.querySelector('form');
const bill = form.elements.bill;
const tipInputs = form.elements.tip;
const numberOfPeople = form.elements.people;


// Variables
let billAmount;
let tipPercent;
let people;


function handleInputChange(evt) {
  const value = parseInt(evt.target.value, 10);
  switch(evt.target.name) {
    case 'bill': {
      billAmount = value;
      break;
    }

    case 'tip': {
      tipPercent = value;
      customInput.value = '';
      break;
    }

    case 'custom': {
      tipPercent = value;
      break;
    }

    case 'people': {
      if (isNaN(value)) {
        errorText.style.visibility = 'visible';
        people = 0;
      } else {
        errorText.style.visibility = 'hidden';
        people = value;
      }
      break;
    }

    default:
      break;
  }

  resetButton.removeAttribute('disabled');
  if (billAmount && people && billAmount > 0 && people > 0) {
    const [tip, totalAmount] = calculateTotal();
    renderCalculation(tip, totalAmount);
  }
}


function deselectRadioButtons() {
  tipInputs.forEach((input) => input.checked = false);
}

function calculateTotal() {
  const tipAmount = tipPercent ? (tipPercent / 100) * billAmount : 0;
  const tipPerPerson = (tipAmount / people);
  const totalPerPerson = (billAmount + tipAmount) / people;
  
  return [tipPerPerson, totalPerPerson];
}

function renderCalculation(tip = 0, totalAmount = 0) {
  tipAmountText.textContent = `$${parseFloat(tip).toFixed(2)}`;
  totalText.textContent = `$${parseFloat(totalAmount).toFixed(2)}`;
}

function clearCalcVariables() {
  tipPercent = 0;
  billAmount = 0;
  people = 0;
}


bill.addEventListener('change', handleInputChange);
tipInputs.forEach((radioInput) => radioInput.addEventListener('change', handleInputChange));
customInput.addEventListener('change', handleInputChange);
customInput.addEventListener('focus', deselectRadioButtons);
numberOfPeople.addEventListener('change', handleInputChange);
resetButton.addEventListener('click', () => {
  form.reset();
  clearCalcVariables();
  renderCalculation();
  resetButton.setAttribute('disabled', true);
})