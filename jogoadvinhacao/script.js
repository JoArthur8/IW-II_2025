var tambor_errado = Math.floor(Math.random() * 6) + 1;
console.log(tambor_errado)

function tambor1(){
    if (tambor_errado == 1){
        alert("Você perdeu");
    }
};
function tambor2(){
    if (tambor_errado == 2){
        alert("Você perdeu");
    }
};
function tambor3(){
    if (tambor_errado == 3){
        alert("Você perdeu");
    }
};
function tambor4(){
    if (tambor_errado == 4){
        alert("Você perdeu");
    }
};
function tambor5(){
    if (tambor_errado == 5){
        alert("Você perdeu");
    }
};
function tambor6(){
    if (tambor_errado == 6){
        alert("Você perdeu");
    }
};

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("tambor1").addEventListener("click",tambor1);
    document.getElementById("tambor2").addEventListener("click",tambor2);
    document.getElementById("tambor3").addEventListener("click",tambor3);
    document.getElementById("tambor4").addEventListener("click",tambor4);
    document.getElementById("tambor5").addEventListener("click",tambor5);
    document.getElementById("tambor6").addEventListener("click",tambor6);
});