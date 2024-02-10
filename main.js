let n = 10;
let firstElement = document.querySelector(".element");
let elementsWrapper = document.querySelector(".section__inner");

for (let i=0; i<n; i++) {
    elementsWrapper.appendChild(firstElement.cloneNode(true));
}