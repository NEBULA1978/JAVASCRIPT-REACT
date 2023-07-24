const user = {
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
    sendMail: function(){
        return 'sending email ...'
    }
}

console.log(user.addres.city);


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