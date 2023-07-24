const user = {
    name: 'Joe',
    age: 30
}

function printInfo(user){
    const {name,age} = user

    // return "<h1>Hola " + name + "</h1>";
    return "<h1>Hola " + name + "</h1>";
}

console.log(printInfo(user))

document.body.innerHTML = printInfo(user)