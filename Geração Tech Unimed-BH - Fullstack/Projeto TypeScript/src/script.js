"use strict";
// DESAFIO 1
let employee = {
    code: 10,
    name: "John",
};
console.log(employee);
// DESAFIO 2
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz,
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro,
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz,
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro,
};
// DESAFIO 3
let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let soma = document.getElementById("soma");
let campoSaldo = document.getElementById("campo-saldo");
let saldo = 0;
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener("click", () => {
    if (campoSaldo) {
        saldo += Number(soma.value);
        campoSaldo.innerHTML = saldo.toString();
    }
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener("click", () => {
    if (campoSaldo) {
        campoSaldo.innerHTML = "0";
        saldo = 0;
    }
});
