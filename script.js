const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const contentDiv = document.querySelector("#content");
// const input=document.querySelector("#input")

let arr = [];

btn.addEventListener("click", function () {
  const inputNumber = input.value;
  for (let i = inputNumber; i >= 1; i--) {
    arr.push(i);
  }
  
  const ArrValue = arr.reduce((acc, fc) => acc * fc);
  console.log(arr);
  
  contentDiv.innerText = ArrValue;
  input.value = "";
});
