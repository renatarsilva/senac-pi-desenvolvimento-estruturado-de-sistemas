var Raposa = /** @class */ (function () {
    function Raposa(novoNome, novaCor, novaIdade, novoPeso) {
        this.nome = "teste";
        this.cor = "";
        this.idade = 0;
        this.peso = 0;
        this.alimentacao = 0;
        this.velocidade = 0;
        this.nome = novoNome;
        this.cor = novaCor;
        this.idade = novaIdade;
        this.peso = novoPeso;
    }
    Raposa.prototype.corrida = function (velocidade) {
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
    return Raposa;
}());
var raposa01 = new Raposa("Luna", "Vermelha", 4, 3);
console.log("Nome:".concat(raposa01.nome, ", cor:").concat(raposa01.cor, ", idade:").concat(raposa01.idade, ", peso:").concat(raposa01.peso));
raposa01.corrida();
console.log("Velocidade:".concat(raposa01.velocidade, "Km/h"));
raposa01.comer();
console.log("A raposa 1, deve comer ".concat(raposa01.alimentacao, " Kg por dia \n"));
var raposa02 = new Raposa("Aurora", "Prateada", 2, 4.5);
console.log("Nome:".concat(raposa02.nome, ", cor:").concat(raposa02.cor, ", idade:").concat(raposa02.idade, ", peso:").concat(raposa02.peso, " "));
raposa02.corrida(40);
console.log("Velocidade:".concat(raposa02.velocidade, "Km/h"));
raposa02.comer();
console.log("A raposa 2, deve comer ".concat(raposa02.alimentacao, " Kg por dia \n"));
var raposa03 = new Raposa("Shadow", "Preta", 6, 7);
console.log("Nome:".concat(raposa03.nome, ", cor:").concat(raposa03.cor, ", idade:").concat(raposa03.idade, ", peso:").concat(raposa03.peso));
raposa03.corrida(38);
console.log("Velocidade:".concat(raposa03.velocidade, "Km/h"));
raposa03.comer();
console.log("A raposa 3, deve comer ".concat(raposa03.alimentacao, " Kg por dia"));
