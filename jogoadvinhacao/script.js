var tambor_errado = Math.floor(Math.random() * 6) + 1;
var qtd_acerto = 0;
console.log(tambor_errado)


function escondetudo(){
    document.getElementById("tambor1").style = "display: none;";
        document.getElementById("tambor2").style = "display: none;";
        document.getElementById("tambor3").style = "display: none;";
        document.getElementById("tambor4").style = "display: none;";
        document.getElementById("tambor5").style = "display: none;";
        document.getElementById("tambor6").style = "display: none;";
}
function tambor1(){
    if (tambor_errado == 1){
        escondetudo();
        alert("Você perdeu");
       
    } else{
        qtd_acerto += 1;
        document.getElementById("tambor1").style = "display: none;";
        document.getElementById("acertos").textContent = qtd_acerto;
        if (qtd_acerto == 5){
            escondetudo();
            alert("Você ganhou");
        
        }
    }
};
function tambor2(){
    if (tambor_errado == 2){
        escondetudo();
        alert("Você perdeu");
       
    } else{
        qtd_acerto += 1;
        document.getElementById("tambor2").style = "display: none;";
        document.getElementById("acertos").textContent = qtd_acerto;
        if (qtd_acerto == 5){
            escondetudo();
            alert("Você ganhou");
           
        }
    }
};
function tambor3(){
    if (tambor_errado == 3){
        escondetudo();
        alert("Você perdeu");
     
    } else{
        qtd_acerto += 1;
        document.getElementById("tambor3").style = "display: none;";
        document.getElementById("acertos").textContent = qtd_acerto;
        if (qtd_acerto == 5){
            escondetudo();
            alert("Você ganhou");
           
        }
    }
};
function tambor4(){
    if (tambor_errado == 4){
        escondetudo();
        alert("Você perdeu");
        
    } else{
        qtd_acerto += 1;
        document.getElementById("tambor4").style = "display: none;";
        document.getElementById("acertos").textContent = qtd_acerto;
        if (qtd_acerto == 5){
            escondetudo();
            alert("Você ganhou");
            
        }
    }
};
function tambor5(){
    if (tambor_errado == 5){
        escondetudo();
        alert("Você perdeu");
        
    } else{
        qtd_acerto += 1;
        document.getElementById("tambor5").style = "display: none;";
        document.getElementById("acertos").textContent = qtd_acerto;
        if (qtd_acerto == 5){
            escondetudo();
            alert("Você ganhou");
            
        }
    }
};
function tambor6(){
    if (tambor_errado == 6){
        escondetudo();
        alert("Você perdeu");
        
    } else{
        qtd_acerto += 1;
        document.getElementById("tambor6").style = "display: none;";
        document.getElementById("acertos").textContent = qtd_acerto;
        if (qtd_acerto == 5){
            escondetudo();
            alert("Você ganhou");
            
        }
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



// function Contador() {
//     var continuar = true;
//     while (continuar) {
//         document.getElementById("acertos").textContent = qtd_acerto;
//         if (qtd_acerto == 5){
//             continuar = false;
//         }
//     }
// }

// // Inicia o menu quando a página carregar
// Contador();