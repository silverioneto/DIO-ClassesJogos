class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let arma = '';
        if(this.tipo == 'mago'){
            arma = "magia";
        } else if (this.tipo == 'guerreiro'){
            arma = "espada";
        } else if (this.tipo == 'monge'){
            arma = "artes marciais";
        } else if (this.tipo == 'ninja'){
            arma = "shuriken";
        } 
        return `O ${this.tipo} atacou usando ${arma}`;
    }


}

novoHeroi = new heroi('net0',32,'monge');
console.log(novoHeroi.atacar());

