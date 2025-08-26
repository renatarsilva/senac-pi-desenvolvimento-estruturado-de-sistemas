var Raposa = /** @class */ (function () {
    function Raposa(novoNome, novaCor, novaIdade, novoPeso) {
        this.nome = "teste";
        this.cor = "";
        this.idade = 0;
        this.peso = 0;
        this.alimentacao = 0;
        this.velocidade = 0;
        this.sono = 0;
        this.nome = novoNome;
        this.cor = novaCor;
        this.idade = novaIdade;
        this.peso = novoPeso;
    }
    Raposa.prototype.correr = function (velocidade) {
        if (velocidade === undefined) {
            this.velocidade += 10;
        }
        else {
            this.velocidade += velocidade;
        }
    };
    Raposa.prototype.comer = function (peso) {
        if (peso !== undefined) {
            this.peso = peso;
        }
        if (this.peso <= 3) {
            this.alimentacao = 6;
        }
        else if (this.peso <= 5) {
            this.alimentacao = 4.5;
        }
        else {
            this.alimentacao = 2;
        }
    };
    Raposa.prototype.dormir = function (sono) {
        this.sono = sono;
    };
    return Raposa;
}());
var raposa01 = new Raposa("Luna", "Vermelha", 4, 3);
console.log("Nome:".concat(raposa01.nome, ", cor:").concat(raposa01.cor, ", idade:").concat(raposa01.idade, ", peso:").concat(raposa01.peso, "kg"));
raposa01.correr();
console.log("A raposa 1 corre a ".concat(raposa01.velocidade, "km/h"));
raposa01.comer();
console.log("A raposa 1 deve comer ".concat(raposa01.alimentacao, "kg de alimento por dia"));
raposa01.dormir(12);
console.log("A raposa1 deve dormir ".concat(raposa01.sono, " horas por dia \n"));
var raposa02 = new Raposa("Aurora", "Prateada", 2, 4.5);
console.log("Nome:".concat(raposa02.nome, ", cor:").concat(raposa02.cor, ", idade:").concat(raposa02.idade, ", peso:").concat(raposa02.peso, "kg "));
raposa02.correr(40);
console.log("A raposa 2 corre a ".concat(raposa02.velocidade, "km/h"));
raposa02.comer();
console.log("A raposa 2 deve comer ".concat(raposa02.alimentacao, "kg de alimento por dia "));
raposa02.dormir(10);
console.log("A raposa 2 deve dormir ".concat(raposa02.sono, " horas por dia \n"));
var raposa03 = new Raposa("Shadow", "Preta", 6, 7);
console.log("Nome:".concat(raposa03.nome, ", cor:").concat(raposa03.cor, ", idade:").concat(raposa03.idade, ", peso:").concat(raposa03.peso, "kg"));
raposa03.correr(38);
console.log("A raposa 3 corre a ".concat(raposa03.velocidade, "km/h"));
raposa03.comer();
console.log("A raposa 3 deve comer ".concat(raposa03.alimentacao, "kg de alimento por dia"));
raposa03.dormir(8);
console.log("A raposa 3 deve dormir ".concat(raposa03.sono, " horas por dia"));
