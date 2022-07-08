// Import stylesheets
import './style.css';

let total = 31.45
let goal = 100

const totalEl = document.getElementById("total")
const goalEl = document.getElementById("goal")

totalEl.innerText = total.toString()
goalEl.innerText = goal.toString()

const input = <HTMLInputElement>document.getElementById("input")
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    input.blur()
    total += input.value
    input.value = ""
    totalEl.innerText = total.toString()
  }
});