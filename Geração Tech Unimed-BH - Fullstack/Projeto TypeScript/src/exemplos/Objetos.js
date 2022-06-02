"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Programador"] = 0] = "Programador";
    Profissao[Profissao["Professor"] = 1] = "Professor";
    Profissao[Profissao["Artista"] = 2] = "Artista";
    Profissao[Profissao["Motorista"] = 3] = "Motorista";
    Profissao[Profissao["Medico"] = 4] = "Medico";
    Profissao[Profissao["Carpinteiro"] = 5] = "Carpinteiro";
})(Profissao || (Profissao = {}));
const p1 = {
    nome: "Gabriel",
    idade: 18,
    profissao: Profissao.Programador
};
const p2 = {
    nome: "Julho",
    idade: 30,
    profissao: Profissao.Medico
};
const p3 = {
    nome: "Adao",
    idade: 20,
    cadeiras: ["Mat. Discreta", "Calculo 1"],
};
function listar(lista) {
    for (const x of lista) {
        console.log(x + " ");
    }
}
listar(p3.cadeiras);
