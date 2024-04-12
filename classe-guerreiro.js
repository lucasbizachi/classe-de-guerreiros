class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia do fogo.";
                break;
            case "guerreiro":
                ataque = "espada flamejante.";
                break;
            case "monge":
                ataque = "artes marciais ancestrais.";
                break;
            case "ninja":
                ataque = "shuriken divina.";
                break;
            default:
                ataque = "não possui ataque definido.";
        }
        console.log(`O ${this.tipo} ${this.nome} de ${this.idade} anos, atacou usando ${ataque}`);
    }
}
const heroi1 = new Heroi("Bramwell", 250, "mago");
heroi1.atacar();

const heroi2 = new Heroi("Urokk", 35, "guerreiro");
heroi2.atacar();

const heroi3 = new Heroi("Huang Long", 28, "monge");
heroi3.atacar();

const heroi4 = new Heroi("Hanzo Takeshi", 46, "ninja");
heroi4.atacar();