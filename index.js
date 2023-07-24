const user = {
    name: 'Joe',
    age: 30
}

function printInfo(){
    return '<h1>Hola ' + user.name + '</h1>'
}

console.log(printInfo(user))

document.body.innerHTML = `<h2>texto añadido h2</h2>`