import {add,multiply,active,points,title} from './add.js'

console.log(active,points,title)
console.log(add(10,20))
console.log(multiply(10, 20));
// ///////////////////////////
// ///////////////////////////

// const user = {
//   name:"Fran",
//   lastname:"Fray"
// }
// const address = {
//   stret:"mainstreet list",
//   lastnacityme:"Bogota"
// }

// const userinfo = {
//   ...user,
//   ...address
// }

// console.log(user)
// console.log(address)
// console.log(userinfo)


// ///////////////////////////////
// ///////////////////////////////

// const names = ["Juan", "María", "Pedro"];
// const names2 = ["Juan2", "María2", "Pedro2"];

// console.log([...names, ...names2])

// ///////////////////////////////
// ///////////////////////////////

// const names = ["Juan", "María", "Pedro"];
// const names2 = ["Juan2", "María2", "Pedro2"];

// console.log(names)
// console.log(names2)
// console.log(names.concat(names2))

// for (let i = 0; i < nombres.length; i++) {
//   const element = nombres[i]
//   console.log(element);
// }

// MISMO RESULTADO QUE ARRIBA CON MAP mantiene arreglo original y crea uno nuevo con cambios
// const nameFilter = names.filter(function (name) {
  // Sino sale el nombre nos da undefined
  // if (name !== "Juan") {
  //   return name;
  // }
// });
// console.log(nameFilter);//(2) ['María', 'Pedro']
// Si esta solo muestra el nombre con ===