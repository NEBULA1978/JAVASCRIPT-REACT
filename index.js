const names = ["Juan", "María", "Pedro"];

// for (let i = 0; i < nombres.length; i++) {
//   const element = nombres[i]
//   console.log(element);
// }

// MISMO RESULTADO QUE ARRIBA CON FOR
const newNames = names.map(function(name) {
  console.log(name)
})
console.log(newNames)