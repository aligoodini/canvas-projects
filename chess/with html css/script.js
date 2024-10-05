const body = document.querySelector("body");
const container = document.querySelector(".container");
let div = null;

for (let i = 1; i <= 8; i++) {
  if (i % 2) {


    for (let k = 1; k <= 8; k++) {
      if (k % 2) {
        div = "<div></div>";
      } else {
        div = "<div class='black'></div>";
      }
      container.insertAdjacentHTML("beforeend", div);
    }
  } else {

    for (let k = 1; k <= 8; k++) {
      if (k % 2) {
        div = "<div class='black'></div>";
      } else {
        div = "<div></div>";
      }
      container.insertAdjacentHTML("beforeend", div);
    }
  }
}
