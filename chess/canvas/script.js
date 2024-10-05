const canvas = document.querySelector("canvas");
const input = document.querySelector("input[type=text]")
const btn = document.querySelector("button")
let ctx = canvas.getContext("2d");

let num = null

for (let i = 1; i <= 7; i++) {
  ctx.moveTo(0, i * 100);
  ctx.lineTo(800, i * 100);
  ctx.strokeStyle = "white";
}

for (let i = 1; i <= 7; i++) {
  ctx.moveTo(i * 100, 0);
  ctx.lineTo(i * 100, 800);
  ctx.strokeStyle = "white";
}

ctx.stroke();

btn.addEventListener("click" , ()=>{

    num = Number(input.value)

    ctx.clearRect(0,0,canvas.width , canvas.height)

    for (let i = 1; i <= canvas.height; i++) {
        if (i % 2) {
          for (let k = 1; k <= canvas.width; k++) {
            if (k % 2) {
              ctx.fillStyle = "black";
              ctx.fillRect((k - 1)*num, (i - 1)*num, num, num);
            } else {
              ctx.fillStyle = "white";
              ctx.fillRect((k - 1)*num, (i - 1)*num, num, num);
            }
          }
        } else {
          for (let k = 1; k <= canvas.width; k++) {
            if (k % 2) {
              ctx.fillStyle = "white";
              ctx.fillRect((k - 1)*num, (i - 1)*num, num, num);
            } else {
              ctx.fillStyle = "black";
              ctx.fillRect((k - 1)*num, (i - 1)*num, num, num);
            }
          }
        }
      }

})


