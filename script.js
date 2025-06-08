const total = document.getElementById('total-amount');
const tipAmount = document.getElementById('tip-amount');

const form = document.querySelector('form');
const bill = form.elements.bill;
const tip = form.elements.tip;
const numberOfPeople = form.elements.people;


function calculateTip() {

}

function calculateTotal() {
  const total = bill.value + (tip.value * bill.value)
  console.log(total);
}

bill.addEventListener('change', handleChange);
function handleChange(evt) {
  total.textContent = evt.target.value;
}