function Animal() {
    this.raca = "Cao";
    this.nome = "Lulu";
    this.idade = 20;
    this.peso = 10;

    this.urinar = function() {
        console.log("xiiiiiiiii.......");
    }

    this.comer = function(ganhaPeso) {
        for(var i=0;i<ganhaPeso;i++) {
            this.mastigar(i);
        } 

        console.log("hummm...");
        this.peso = this.peso + (ganhaPeso/2);
    }

    this.mastigar = function(i) {
        console.log(i + " - Nhoc...");
    }
}

var lulu = new Animal();
lulu.raca = "Gato";
lulu.nome = "Lulu";
lulu.comer(10);

var xuxu = new Animal();
xuxu.raca = "Cao";
xuxu.nome = "Xuxu";

