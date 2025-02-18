function Tabla() {
  const num = parseInt(prompt("Ingresa un número: "));
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

function sumaRandom() {
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  let resultadoCorrecto = num1 + num2;

  let inicioTiempo = performance.now();
  let respuestaUsuario = parseInt(prompt(`¿Cuánto es ${num1} + ${num2}?`));
  let finTiempo = performance.now();

  let tiempoTranscurrido = ((finTiempo - inicioTiempo) / 1000).toFixed(2);

  if (respuestaUsuario === resultadoCorrecto) {
    alert(`Correcto! Tardaste ${tiempoTranscurrido} segundos.`);
  } else {
    alert(
      `Incorrecto. La respuesta era ${resultadoCorrecto}. Tardaste ${tiempoTranscurrido} segundos.`
    );
  }
}
