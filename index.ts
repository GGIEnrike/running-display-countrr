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
    if (!(!isNaN(input.value) && !isNaN(parseFloat(input.value)))) {
      console.log("NaN")
      return
    }
    total += +input.value
    input.value = ""
    totalEl.innerText = total.toString()
  }
});