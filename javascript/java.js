function Tabla() {
  let num = parseInt(prompt("Ingresa un número: "));
  let res = "<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";
  let Tabla = document.getElementById("Tabla");

  for (let i = 1; i <= num; i++) {
    let cuadrado = i ** 2;
    let cubo = i ** 3;
    let fila = `<tr><td>${i}</td><td>${cuadrado}</td><td>${cubo}</td></tr>`;
    res += fila;
  }
  Tabla.innerHTML = res;
}

function SumaNum() {
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  let res = num1 + num2;

  let inicioTiempo = performance.now();
  let respuesta = parseInt(prompt(`¿Cuánto es ${num1} + ${num2}?`));
  let finTiempo = performance.now();

  let tiempo = ((finTiempo - inicioTiempo) / 1000).toFixed(2);

  let texto = document.getElementById("texto");
  if (respuesta == res) {
    texto.innerHTML =
      "Correcto, tardaste " + tiempo + " segundos en contestar.";
  } else {
    texto.innerHTML =
      "Incorrecto. Tardaste " + tiempo + " segundos en contestar.";
  }
}

function contador() {
  const input = prompt("Ingresa un arreglo de números:");
  let arr = input.split(" ");
  let negativos = arr.filter((num) => num < "0").length;
  let ceros = arr.filter((num) => num === "0").length;
  let positivos = arr.filter((num) => num > "0").length;
  let texto1 = document.getElementById("texto1");
  texto1.innerHTML =
    "Hay " +
    negativos +
    " números negativos," +
    ceros +
    " ceros y " +
    positivos +
    " números positivos.";
}

function promedio(matriz) {
  const resp = {};
  let i = 0;
  matriz.forEach((arreglo) => {
    resp[i] = 0;
    arreglo.forEach((a) => {
      resp[i] += a;
    });
    resp[i] /= arreglo.length;
    i++;
  });
  return resp;
}

function inverso() {
  const num = parseInt(prompt("Ingresa número que deseas invertir: "));
  let fun = num.toString().split("").reverse().join("");
  let invertir = Number(fun);
  let texto2 = document.getElementById("texto2");
  texto2.innerHTML = "El número inverido es " + invertir + ".";
}
