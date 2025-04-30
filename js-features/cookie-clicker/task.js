
const cookieElement = document.getElementById("cookie");


const clickerCounter = document.getElementById("clicker__counter");


let clickCount = 0;


cookieElement.addEventListener("click", () => {

  clickCount++;


  clickerCounter.textContent = clickCount;


  if (cookieElement.width === 200) {
    cookieElement.width = 180;
    cookieElement.height = 180;
  } else {
    cookieElement.width = 200;
    cookieElement.height = 200;
  }
});