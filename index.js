const user = {
    // Propiedades property no tiene fuciones
    name: 'Ryan',
    lastname: 30,
    age:20,
    addres: {
        country: 'Colombia',
        city:'Bogota',
        street: "Main street 123"
    },
    friends:['Brandom','Elena'],
    active: true,
    // Propiedades property no tiene fuciones hacia arriba

    // Metodos con funciones
    sendMail() {
        return 'sending email ...'
    }
}

console.log(user.addres.city);
console.log(user.friends);
console.log(user.active);
console.log(user.sendMail());


// Resultado
// 20
// friends
// : 
// Array(2)
// 0
// : 
// "Brandom"
// 1
// : 
// "Elena"
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)
// lastname
// : 
// 30
// name
// : 
// "Ryan"
// sendMail
// : 
// ƒ ()
// [[Prototype]]
// : 
// Object