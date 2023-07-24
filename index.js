// SON LO MISMO ARROWS FUNCTIONS
// function add(x,y){
    //     return x + y
    // }
    
    // const add = (x,y) => {
        //     return x +y
        // }
        
        // SON LO MISMO ARROWS FUNCTIONS

const showText = () => 'Hola mundo'


console.log(showText())

const button = document.createElement('button')
button.innerText = 'Click me'


button.addEventListener('click', () => {
    alert('click')
})

document.body.append(button)