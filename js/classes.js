// class Quadrado {
//    constructor(largura, altura){
//        this.largura = largura;
//        this.altura = altura;
//    } 
//    area(){
//        return this.largura * this.altura;
//    }

//    verificaQuadrado(){
//        return this.largura == this.altura;
//    }
// }

// var q = new Quadrado(100,10);

// console.log(q.area());
// console.log(q.verificaQuadrado());

// class Pessoa {
//     constructor(nome, idade, altura){
//         this.nome = nome;
//         this.idade = idade;
//         this.altura = altura;
//     }

//     get(){
//         return this.nome +', '+ this.idade +', '+ this.altura;
//     }
// }

// var p = new Pessoa('Aurea', 34, '1.74');

// alert(p.get());

class Empresa{
    constructor(nome, cnpj, setor){
        this.nome = nome;
        this.cnpj = cnpj;
        this.setor = setor;
    }

    setNome(nome){
        this.nome = nome;
    }
    getNome(){
        return this.nome;
    }

    setCnpj(cnpj){
        this.cnpj = cnpj;
    }
    getCnpj(){
        return this.cnpj;
    }

    setSetor(setor){
        this.setor = setor;
    }
    getSetor(){
        return this.setor;
    }
}

var e = new Empresa('MS Code', '123456789', 'Tecnologia');

e.setNome('Capital Code');
e.setCnpj('987654321');
e.setSetor('Sistemas');

console.log(e.getNome() +', '+ e.getCnpj() +', '+ e.getSetor());