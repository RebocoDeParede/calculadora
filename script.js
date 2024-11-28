let entrada =""

function adicionarEntrada(valor){
    entrada += valor;
    atualizarDisplay();
}

function calcularResultado(){
    const display = document.getElementById("display");
    try{
        const resultado = eval(entrada);
        entrada = resultado.toString();
        atualizarDisplay();
    } catch {
        limparEntrada
    }
}

function limparEntrada(){
    entrada = "";
    atualizarDisplay();
}

function atualizarDisplay(){
    const display = document.getElementById("display");
    display.textContent = entrada || "0";
}