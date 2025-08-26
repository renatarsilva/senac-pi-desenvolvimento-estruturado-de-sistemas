class Raposa {
  nome: string = "teste";
  cor: string = "";
  idade: number = 0;
  peso: number = 0;
  alimentacao: number = 0;
  velocidade: number = 0;
  sono: number = 0;

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

  correr(velocidade?: number) {
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

  dormir(sono: number) {
    this.sono = sono;
  }
}

const raposa01 = new Raposa("Luna", "Vermelha", 4, 3);
console.log(
  `Nome:${raposa01.nome}, cor:${raposa01.cor}, idade:${raposa01.idade}, peso:${raposa01.peso}kg`
);
raposa01.correr();
console.log(`A raposa 1 corre a ${raposa01.velocidade}km/h`);

raposa01.comer();
console.log(
  `A raposa 1 deve comer ${raposa01.alimentacao}kg de alimento por dia`
);

raposa01.dormir(12);
console.log(`A raposa 1 deve dormir ${raposa01.sono} horas por dia \n`);

const raposa02 = new Raposa("Aurora", "Prateada", 2, 4.5);
console.log(
  `Nome:${raposa02.nome}, cor:${raposa02.cor}, idade:${raposa02.idade}, peso:${raposa02.peso}kg `
);
raposa02.correr(40);
console.log(`A raposa 2 corre a ${raposa02.velocidade}km/h`);

raposa02.comer();
console.log(
  `A raposa 2 deve comer ${raposa02.alimentacao}kg de alimento por dia `
);

raposa02.dormir(10);
console.log(`A raposa 2 deve dormir ${raposa02.sono} horas por dia \n`);

const raposa03 = new Raposa("Shadow", "Preta", 6, 7);
console.log(
  `Nome:${raposa03.nome}, cor:${raposa03.cor}, idade:${raposa03.idade}, peso:${raposa03.peso}kg`
);
raposa03.correr(38);
console.log(`A raposa 3 corre a ${raposa03.velocidade}km/h`);
raposa03.comer();
console.log(
  `A raposa 3 deve comer ${raposa03.alimentacao}kg de alimento por dia`
);

raposa03.dormir(8);
console.log(`A raposa 3 deve dormir ${raposa03.sono} horas por dia`);
