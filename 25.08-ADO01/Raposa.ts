class Raposa {
  nome: string = "teste";
  cor: string = "";
  idade: number = 0;
  peso: number = 0;
  alimentacao: number = 0;
  velocidade: number = 0;

  constructor(
    novoNome: string,
    novaCor: string,
    novaIdade: number,
    novoPeso: number
  ) {
    this.nome = novoNome;
    this.cor = novaCor;
    this.idade = novaIdade;
    this.peso = novoPeso;
  }

  corrida(velocidade?: number) {
    if (velocidade === undefined) {
      this.velocidade += 10;
    } else {
      this.velocidade += velocidade;
    }
  }

  comer(peso?: number) {
    if (peso !== undefined) {
      this.peso = peso;
    }

    if (this.peso <= 3) {
      this.alimentacao = 6;
    } else if (this.peso <= 5) {
      this.alimentacao = 4.5;
    } else {
      this.alimentacao = 2;
    }
  }
}

const raposa01 = new Raposa("Luna", "Vermelha", 4, 3);
console.log(
  `Nome:${raposa01.nome}, cor:${raposa01.cor}, idade:${raposa01.idade}, peso:${raposa01.peso}`
);
raposa01.corrida();
console.log(`Velocidade:${raposa01.velocidade}Km/h`);

raposa01.comer();
console.log(`A raposa 1, deve comer ${raposa01.alimentacao} Kg por dia \n`);

const raposa02 = new Raposa("Aurora", "Prateada", 2, 4.5);
console.log(
  `Nome:${raposa02.nome}, cor:${raposa02.cor}, idade:${raposa02.idade}, peso:${raposa02.peso} `
);
raposa02.corrida(40);
console.log(`Velocidade:${raposa02.velocidade}Km/h`);

raposa02.comer();
console.log(`A raposa 2, deve comer ${raposa02.alimentacao} Kg por dia \n`);

const raposa03 = new Raposa("Shadow", "Preta", 6, 7);
console.log(
  `Nome:${raposa03.nome}, cor:${raposa03.cor}, idade:${raposa03.idade}, peso:${raposa03.peso}`
);
raposa03.corrida(38);
console.log(`Velocidade:${raposa03.velocidade}Km/h`);
raposa03.comer();
console.log(`A raposa 3, deve comer ${raposa03.alimentacao} Kg por dia`);
