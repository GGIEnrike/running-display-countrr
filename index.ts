// Import stylesheets
import './style.css';

// TODO -- localStorage

if (localStorage.getItem('total') === null) {
  localStorage.setItem('total', '0.00');
}

let total: number = parseFloat(localStorage.getItem('total'));
let goal = 100;

const totalEl = document.getElementById('total');
const goalEl = document.getElementById('goal');

totalEl.innerText = total.toString();
goalEl.innerText = goal.toString();

const input = <HTMLInputElement>document.getElementById('input');
function add_total() {
  input.blur();
  if (!(!isNaN(input.value) && !isNaN(parseFloat(input.value)))) {
    return;
  }
  total += +input.value;
  localStorage.setItem('total', total.toFixed(2));
  input.value = '';
  totalEl.innerText = localStorage.getItem('total');
}
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    add_total();
  }
});

const add = <HTMLButtonElement>document.getElementById('add');
const reset = <HTMLButtonElement>document.getElementById('reset');

add.addEventListener('click', add_total);

reset.addEventListener('click', () => {
  total = 0;
  localStorage.setItem('total', '0.00');
  totalEl.innerText = '0.00';
});
