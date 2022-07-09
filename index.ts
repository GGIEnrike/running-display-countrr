// Import stylesheets
import './style.css';

let total = 31.45
let goal = 100

const totalEl = document.getElementById("total")
const goalEl = document.getElementById("goal")

totalEl.innerText = total.toString()
goalEl.innerText = goal.toString()

const input = <HTMLInputElement>document.getElementById("input")
function add_total() {
  input.blur()
  if (!(!isNaN(input.value) && !isNaN(parseFloat(input.value)))) {
    return
  }
  total += +input.value
  input.value = ""
  totalEl.innerText = total.toString()
}
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    add_total()
  }
});

const add = <HTMLButtonElement>document.getElementById("add")
const reset = <HTMLButtonElement>document.getElementById("reset")

add.addEventListener("click", add_total)

reset.addEventListener("click", () => {
  total = 0
  totalEl.innerText = "0"
})