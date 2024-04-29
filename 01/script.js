// const span = "<span class='pixel'></span>";
// const span = document.createElement("span");
// span.innerHTML = "toto"
// console.log(span)

const selectedDiv = document.querySelector("div");


for (let i = 0; i < 2500; i++) {
    let span = document.createElement("span");
    span.className = "pixel";
    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    // let css = "rgb("+r+","+g+",b)";
    let css = `rgb(${r},${g},${b})`;
    span.style.backgroundColor = css;
    selectedDiv.appendChild(span)
}