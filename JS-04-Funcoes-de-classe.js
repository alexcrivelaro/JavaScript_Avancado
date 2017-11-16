function Animal() {
    this.raca = "Cao";
    this.nome = "Lulu";
    this.idade = 20;
    this.peso = 10;

    this.urinar = function() {
        console.log("xiiiiiiiii.......");
    }

    this.comer = function(ganhaPeso) {
        console.log("hummm...");
        this.peso = this.peso + (ganhaPeso/2);
    }
}

var lulu = new Animal();
lulu.raca = "Gato";
lulu.nome = "Lulu";

var xuxu = new Animal();
xuxu.raca = "Cao";
xuxu.nome = "Xuxu";

