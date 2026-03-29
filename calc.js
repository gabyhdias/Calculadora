function calculadora(){
    let texto = document.getElementById("valor1").value;
    let tudo = texto.split(/([+\-*/])/).map(item => item.trim());
    let resultado;

    const n1 = Number(tudo[0]);
    const operador = tudo[1];
    const n2 = Number(tudo[2]);

    if (operador === "+") {
      resultado = n1 + n2;
      document.getElementById("resultado").innerText = "Resultado: " + resultado;
    } else if (operador === "-"){
        resultado = n1 - n2;
        document.getElementById("resultado").innerText = "Resultado: " + resultado;
    } else if (operador === "*") {
        resultado = n1 * n2;
        document.getElementById("resultado").innerText = "Resultado: " + resultado;
    } else if (operador === "/"){
        resultado = n1 / n2;
        document.getElementById("resultado").innerText = "Resultado: " + resultado;
    } else {
        document.getElementById("resultado").innerText = "Resultado: Inválido";
    }
}