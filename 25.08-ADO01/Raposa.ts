class Raposa {
  nome: String = "";
  cor: String = "";
  idade: number = 0;
  peso: number = 0;
  alimentacao: number = 0;
  velocidade: number = 0;

  constructor(
    novoNome: String,
    novaCor: String,
    novaIdade: number,
    novoPeso: number
  ) {
    this.nome = novoNome;
    this.cor = novaCor;
    this.idade = novaIdade;
    this.peso = novoPeso;
  }

  run(velocidade?: number) {
    if (velocidade === undefined) {
      this.velocidade += 10;
    } else {
      this.velocidade += velocidade;
    }
  }

  eat(alimentacao?: number) {
    this.alimentacao += 5;
  }
}

const raposa01 = new Raposa("Luna", "Vermelha", 4, 6);
console.log(
  `Nome:${raposa01.nome}, cor:${raposa01.cor}, idade:${raposa01.idade}, peso:${raposa01.peso}`
);
raposa01.run();
console.log(raposa01.velocidade);

const raposa02 = new Raposa("Aurora", "Prateada", 2, 5);
console.log(
  `Nome:${raposa02.nome}, cor:${raposa02.cor}, idade:${raposa02.idade}, peso:${raposa02.peso}`
);
raposa02.run(40);
console.log(raposa02.velocidade);

const raposa03 = new Raposa("Shadow", "Preta", 6, 5);
console.log(
  `Nome:${raposa03.nome}, cor:${raposa03.cor}, idade:${raposa03.idade}, peso:${raposa03.peso}`
);
raposa02.run(38);
console.log(raposa02.velocidade);
