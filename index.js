// SON LO MISMO ARROWS FUNCTIONS
// function add(x,y){
    //     return x + y
    // }
    
    // const add = (x,y) => {
        //     return x +y
        // }
        
        // SON LO MISMO ARROWS FUNCTIONS

const showText = () => 'Hola mundo'
const showNumber= () => 22
const showBoolean= () => true
const showArray= () => [1,2,3]

// SON LO MIMO
const showObject= () => {
    return {name: 'Ryan'}
}
// const showObject= () => ({name:'Ryan'})

// SON LO MISMO hacia arriba pero mas corto la de abajo


console.log(showText())
console.log(showNumber());
console.log(showBoolean());
console.log(showArray());
console.log(showObject());


const button = document.createElement('button')
button.innerText = 'Click me'


button.addEventListener('click', () => {
    alert('click')
})

document.body.append(button)