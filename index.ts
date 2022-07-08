// Import stylesheets
import './style.css';

let total = 31.45
let goal = 100

const totalEl = document.getElementById("total")
const goalEl = document.getElementById("goal")

const input = <HTMLInputElement>document.getElementById("input")
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    input.blur()
    input.value = ""
  }
});