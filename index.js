const button = document.createElement('button')
button.innerText = 'Click me'

function handlerClick(){
    alert('click')
}

document.body.append(button)
button.addEventListener("click", handlerClick);