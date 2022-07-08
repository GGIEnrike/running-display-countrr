// Import stylesheets
import './style.css';

// Write Typescript code!
const input = <HTMLInputElement>document.getElementById("input")
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    input.blur()
    input.value = ""
  }
});