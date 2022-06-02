"use strict";
let btn = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
function somarNumeros(num1, num2) {
    return num1 + num2;
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    console.log(somarNumeros(Number(input1 === null || input1 === void 0 ? void 0 : input1.value), Number(input2 === null || input2 === void 0 ? void 0 : input2.value)));
});
