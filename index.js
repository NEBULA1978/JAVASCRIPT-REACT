function hello(){
    return function(){
        return 'Hola Mundo'
    }
    
}
// Llamamos a una funcion y otra
console.log(hello()())//Hola Mundo