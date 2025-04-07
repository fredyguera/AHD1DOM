function verificarPositivo() {
    const num = parseFloat(document.getElementById("num1").value);
    const res = num >= 0 ? "Es positivo" : "Es negativo";
    document.getElementById("resultado1").textContent = res;
  }

  function verificarEdad() {
    const edad = parseInt(document.getElementById("edad").value);
    const res = edad >= 18 ? "Mayor de edad" : "Menor de edad";
    document.getElementById("resultado2").textContent = res;
  }

  function compararNumeros() {
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    let res = "";
    if (n1 > n2) res = "El primero es mayor";
    else if (n1 < n2) res = "El segundo es mayor";
    else res = "Ambos son iguales";
    document.getElementById("resultado3").textContent = res;
  }

  function mostrarDia() {
    const dia = parseInt(document.getElementById("dia").value);
    let nombreDia = "";
    switch (dia) {
      case 1: nombreDia = "Lunes"; break;
      case 2: nombreDia = "Martes"; break;
      case 3: nombreDia = "Miércoles"; break;
      case 4: nombreDia = "Jueves"; break;
      case 5: nombreDia = "Viernes"; break;
      case 6: nombreDia = "Sábado"; break;
      case 7: nombreDia = "Domingo"; break;
      default: nombreDia = "Día inválido";
    }
    document.getElementById("resultado4").textContent = nombreDia;
  }

  // Bucles
  function contarUnoADiez() {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
      resultado += i + " ";
    }
    document.getElementById("bucle1").textContent = resultado;
  }

  function mostrarPares() {
    let resultado = "";
    for (let i = 2; i <= 20; i += 2) {
      resultado += i + " ";
    }
    document.getElementById("bucle2").textContent = resultado;
  }

  function mostrarTabla() {
    const num = parseInt(document.getElementById("tabla").value);
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
      resultado += `${num} x ${i} = ${num * i}\n`;
    }
    document.getElementById("bucle3").textContent = resultado;
  }

  function sumarHastaN() {
    const n = parseInt(document.getElementById("limite").value);
    let suma = 0;
    for (let i = 1; i <= n; i++) {
      suma += i;
    }
    document.getElementById("bucle4").textContent = "Suma total: " + suma;
  }