function saudacao() {
    alert("Olá, bem vindo à aula");
}
function mostrarMensagem(){
    alert("JavaScript é divertido!")
}
function mudartexto(){
    document.getElementById("exercicio02b").textContent = "Texto atualizado com JavaScript";
}
function mudarcor(){
    document.getElementById("body").style = "background-color: red;";
}
function mudarcortexto(){
    document.getElementById("cortexto").style = "color: red;";
}
function printaralert(nome) {
    alert("Olá, " + nome.value);
}
function inserirTexto(){
    document.getElementById("div-exer6").innerHTML = "Uau! Um novo texto";
}
function escondetexto(){
    document.getElementById("texto10").style = "display: none;";   
}
function printQntDigts(){
    texto = document.getElementById("exercicio08").innerHTML;
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        contador++;
    }
    document.getElementById("resposta-ex8").innerHTML = contador;
}
var contador2 = 0;
function mudarTamanhoFonte(){
    document.getElementById(texto-ex09).style = "font-size: "+contador+2+"px;";
}
function escondetexto2(){
    if (document.getElementById("texto10").style == "display: none;"){
        document.getElementById("texto10").style = "display: auto;";
    }else{
        document.getElementById("texto10").style = "display: none;";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaosaudacao").addEventListener("click",saudacao);
    document.getElementById("exercicio01").addEventListener("click",mostrarMensagem);
    document.getElementById("exercicio02a").addEventListener("click",mudartexto);
    document.getElementById("exercicio03").addEventListener("click",mudarcor);
    document.getElementById("exercicio05").addEventListener("click",escondetexto);
    document.getElementById("exercicio06").addEventListener("click",inserirTexto);
    document.getElementById("exercicio07").addEventListener("click",mudarcortexto);
    document.getElementById("btnexercicio08").addEventListener("click",printQntDigts);
    document.getElementById("exercicio09").addEventListener("click",mudarTamanhoFonte);
    document.getElementById("exercicio10").addEventListener("click",escondetexto2);
});