const person = {
    name: 'Ryan',
    address:{
        city: 'London'
    },
    location:[]
}

console.log("Archivo js2")
console.log(person)
// Sino exite undefined propiedad
console.log(person.address.city)

if (person.location){
    console.log("METODO LARGO");
  // Me da undefined
  console.log(person.location.citycity); //undefined

}
console.log("METODO CORTO")
// Metodo igua que anterio if pero mas corto
console.log(person.location?.city)