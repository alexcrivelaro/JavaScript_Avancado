function acao() {
    document.write("Executou...<br>");
}

//setTimeout(acao, 2000); 
// - executa apenas uma vez - no console - clearTimeout(timer); - para a execução

//setInterval(acao, 2000); 
// - executa várias vezes - no console - clearInterval(timer); - para a execução

var timer = setInterval(acao, 2000);

