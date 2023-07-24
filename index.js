const names = ["Juan", "María", "Pedro"];

// for (let i = 0; i < nombres.length; i++) {
//   const element = nombres[i]
//   console.log(element);
// }

// MISMO RESULTADO QUE ARRIBA CON MAP mantiene arreglo original y crea uno nuevo con cambios
const nameFound = names.find(function (name) {
  // Sino sale el nombre nos da undefined
  if (name === "Juan") {
    return name;
  }
});
console.log(nameFound)