class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      // Estrutura de decisão para definir o tipo de ataque com base no tipo do herói
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'não possui um ataque definido';
      }
  
      // Exibe a mensagem final com o tipo de herói e o ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de criação e uso dos objetos da classe Heroi
  const mago = new Heroi('Gandalf', 150, 'mago');
  const guerreiro = new Heroi('Arthur', 35, 'guerreiro');
  const monge = new Heroi('Lao', 40, 'monge');
  const ninja = new Heroi('Hanzo', 25, 'ninja');
  
  // Chamando o método atacar para cada herói
  mago.atacar();       // Saída: "O mago atacou usando magia"
  guerreiro.atacar();  // Saída: "O guerreiro atacou usando espada"
  monge.atacar();      // Saída: "O monge atacou usando artes marciais"
  ninja.atacar();      // Saída: "O ninja atacou usando shuriken"
  