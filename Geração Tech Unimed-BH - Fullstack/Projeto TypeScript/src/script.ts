let btn = document.getElementById("button");
let input1 = document.getElementById("input1") as HTMLInputElement;
let input2 = document.getElementById("input2") as HTMLInputElement;

function somarNumeros(num1: number, num2: number): number {
    return num1 + num2;
}

btn?.addEventListener("click", () => {
    console.log(somarNumeros(Number(input1?.value), Number(input2?.value)));
})