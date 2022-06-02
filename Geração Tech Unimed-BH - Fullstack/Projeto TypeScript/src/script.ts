// DESAFIO 1
let employee = {
  code: 10,
  name: "John",
};

console.log(employee);

// DESAFIO 2

enum Profissao {
  Atriz,
  Padeiro,
}

let pessoa1: { nome: string; idade: number; profissao: Profissao } = {
  nome: "Maria",
  idade: 29,
  profissao: Profissao.Atriz,
};

let pessoa2: { nome: string; idade: number; profissao: Profissao } = {
  nome: "roberto",
  idade: 19,
  profissao: Profissao.Padeiro,
};

let pessoa3: { nome: string; idade: number; profissao: Profissao } = {
  nome: "laura",
  idade: 32,
  profissao: Profissao.Atriz,
};

let pessoa4: { nome: string; idade: number; profissao: Profissao } = {
  nome: "carlos",
  idade: 19,
  profissao: Profissao.Padeiro,
};

// DESAFIO 3
let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let soma = document.getElementById("soma") as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo") as HTMLInputElement;

let saldo = 0;

botaoAtualizar?.addEventListener("click", () => {
  if (campoSaldo) {
    saldo += Number(soma.value);
    campoSaldo.innerHTML = saldo.toString();
  }
});

botaoLimpar?.addEventListener("click", () => {
  if (campoSaldo) {
    campoSaldo.innerHTML = "0";
    saldo = 0;
  }
});
