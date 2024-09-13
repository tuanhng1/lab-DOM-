// https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/1.png



let baseUrl =
  "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";
for (let i = 1; i <= 150; i++) {
  let newDiv = document.createElement("div");
  let parentDiv = container.appendChild(newDiv);
  let creImg = document.createElement("img");
  creImg.src = `${baseUrl}${i}.png`;
  parentDiv.appendChild(creImg);
  let newSpan = document.createElement("span");
  newSpan.innerHTML = `#${i}`;
  newDiv.appendChild(newSpan);
}
