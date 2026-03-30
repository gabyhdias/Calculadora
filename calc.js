function somar(){
 let valor1 = Number(document.getElementById("numero1").value); 
 let valor2 = Number(document.getElementById("numero2").value);
 let resultado = valor1 + valor2;

document.getElementById("resultado").innerText = "RESULTADO: " + resultado;
}

function subtrair(){
    let valor1 = Number(document.getElementById("numero1").value);
    let valor2 = Number(document.getElementById("numero2").value);
    let resultado = valor1 - valor2;

    document.getElementById("resultado").innerText = "RESULTADO: " + resultado;
}

function multiplicar(){
    let valor1 = Number(document.getElementById("numero1").value);
    let valor2 = Number(document.getElementById("numero2").value);
    let resultado = valor1 * valor2;

    document.getElementById("resultado").innerText = "RESULTADO: " + resultado;
}

function dividir(){
    let valor1 = Number(document.getElementById("numero1").value);
    let valor2 = Number(document.getElementById("numero2").value);
    let resultado;

    if (valor2 === 0){
        resultado = "Não pode dividir por zero!";
    } else {
        resultado = valor1 / valor2;
    }

    document.getElementById("resultado").innerText = "RESULTADO: " + resultado;
}