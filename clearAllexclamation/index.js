import "./styles.css";

const firstHead = document.getElementById("first-header");
const secondHead = document.getElementById("second-header");
const thirdHead = document.getElementById("third-header");

firstHead.textContent = firstHead.textContent.replace(/!/g, '');

secondHead.textContent = secondHead.textContent.replace(/!/g, '');
thirdHead.textContent = thirdHead.textContent.replace(/!/g, '');




console.log(firstHead);
console.log(secondHead);
console.log(thirdHead);
