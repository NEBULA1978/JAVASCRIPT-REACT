const names = ["Juan", "María", "Pedro"];

// for (let i = 0; i < nombres.length; i++) {
//   const element = nombres[i]
//   console.log(element);
// }

// MISMO RESULTADO QUE ARRIBA CON MAP mantiene arreglo original y crea uno nuevo con cambios
const newNames = names.map(function(name) {
  return `Hola ${name}`
})
console.log(newNames)