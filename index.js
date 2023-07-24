// VOY MINUTO 46
const background = 'green';
const color = 'red';

// const result = `Esto son estilos ${background} ${color}`;

// console.log(result);

const button = document.createElement("button");
button.innerText = "Click me";
button.style='background:;color:white';
button.style = `background: ${background}; color:${color}`

const isAutorized = true;

button.addEventListener('click', () => {
  if (isAutorized) {
    return alert('Estas autorizado');
  } else {
    return alert('No estas autorizado');
  }
});

document.body.append(button);


// Corrección de la función arrow que devuelve un objeto
// const showObject = () => ({ name: 'Ryan' });

// console.log(showObject());



///////////////////////////////
///////////////////////////////


// SON LO MISMO ARROWS FUNCTIONS
// function add(x,y){
    //     return x + y
    // }
    
    // const add = (x,y) => {
        //     return x +y
        // }
        
        // SON LO MISMO ARROWS FUNCTIONS

// const showText = () => 'Hola mundo'
// const showNumber= () => 22
// const showBoolean= () => true
// const showArray= () => [1,2,3]

// // SON LO MIMO
// const showObject= () => {
//     return {name: 'Ryan'}
// }
// // const showObject= () => ({name:'Ryan'})

// // SON LO MISMO hacia arriba pero mas corto la de abajo


// console.log(showText())
// console.log(showNumber());
// console.log(showBoolean());
// console.log(showArray());
// console.log(showObject());

