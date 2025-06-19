
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
      deselectRadioButtons();
      tipPercent = value;
      break;
    }

    case 'people': {
      people = value;
      break;
    }

    default:
      break;
  }
  
  const [tip, totalAmount] = calculateTotal(people);

  if (tip && totalAmount) {
    renderCalculation(tip, totalAmount);
  }
}


function deselectRadioButtons() {
  tipInputs.forEach((input) => input.checked = false);
}

function calculateTotal(people) {
  if (people && people > 0) {
    errorText.style.visibility = 'hidden';
    const tipAmount = (tipPercent / 100) * billAmount;
    const tipPerPerson = (tipAmount / people);
    const totalPerPerson = (billAmount + tipAmount) / people;
    
    return [tipPerPerson, totalPerPerson];
  }
  
  errorText.style.visibility = 'visible';
}

function renderCalculation(tip = 0, totalAmount = 0) {
  tipAmountText.textContent = `$${parseFloat(tip).toFixed(2)}`;
  totalText.textContent = `$${parseFloat(totalAmount).toFixed(2)}`;
}


bill.addEventListener('change', handleInputChange);
tipInputs.forEach((radioInput) => radioInput.addEventListener('change', handleInputChange));
customInput.addEventListener('change', handleInputChange);
numberOfPeople.addEventListener('change', handleInputChange);
resetButton.addEventListener('click', () => {
  form.reset();
  renderCalculation();
})