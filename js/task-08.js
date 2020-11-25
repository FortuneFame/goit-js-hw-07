const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.getElementById("boxes");

renderRef.addEventListener("click", getAmount);
destroyRef.addEventListener("click", destroyBoxes);

function getAmount() {
  let amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}

function createBoxes(amount) {
  let basicSize = 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let size = basicSize + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxesRef.appendChild(fragment);
}
