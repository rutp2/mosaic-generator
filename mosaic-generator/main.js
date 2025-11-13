// Mosaic Generator by Rutvah

// HTML variable
let mosaicEl = document.getElementById("mosaic");

// Button Event
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Input
  let numTiles = +document.getElementById("tiles-in").value;
  let size = +document.getElementById("size-in").value;

  // Generate tiles
  let htmlStr = "";

  for (n = 1; n <= numTiles; n++) {
    // Generate a random color
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgbStr = `rgb(${r}, ${g}, ${b})`;
    htmlStr += `<div style="background-color:${rgbStr};width:${size}px;height:${size}px"></div>`;
  }

  // Add a tile to mosaic div
  mosaicEl.innerHTML = htmlStr;
}

// the *n works because the setTimeout function just schedules an event to happen in the future. It does not wait or pause the code for a bit. It simply just schedules it to happen in a certain time. The *n helps stagger it.

// for (n = 1; n <= 2000; n++) {
//   setTimeout(() => {
//     goBtnClicked();
//   }, 5 * n);
// }
