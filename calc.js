function somar(){
 let v1 = Number(document.getElementById("n1").valor); 
 let v2 = Number(document.getElementById("n2").valor);
 let result = v1 + v2;

document.getElementById("resultado").innerText = "RESULT: " + result;
}

function subtrair(){
    let v1 = Number(document.getElementById("n1").valor);
    let v2 = Number(document.getElementById("n2").valor);
    let result = v1 - v2;

    document.getElementById("result").innerText = "RESULT: " + result;
}

function multiplicar(){
    let v1 = Number(document.getElementById("n1").valor);
    let v2 = Number(document.getElementById("n2").valor);
    let result = v1 * v2;

    document.getElementById("result").innerText = "RESULT: " + result;
}

function dividir(){
    let v1 = Number(document.getElementById("n1").valor);
    let v2 = Number(document.getElementById("n2").valor);
    let result;

    if (v2 === 0){
        result = "Não pode dividir por zero!";
    } else {
        result = v1 / v2;
    }

    document.getElementById("result").innerText = "RESULT: " + result;
}