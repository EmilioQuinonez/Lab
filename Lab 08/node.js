const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const prom = (array) => {
  let acum = 0;
  for (let i = 0; i < array.length; i++) {
    acum += array[i];
  }
  return acum / array.length;
};

console.log("El promedio es: ", prom(array));

const FileSystem = require("fs");
FileSystem.writeFileSync("lab_8.txt", "Profe pongame 100");

const num = 12345;

const suma = (num) => {
  let str = num.toString().split("");
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  return sum;
};

console.log("La suma de los numeros es: ", suma(num));
