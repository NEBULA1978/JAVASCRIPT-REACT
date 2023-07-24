const button = document.createElement('button')
button.innerText = 'Click me'

button.addEventListener('click', function(){
    alert('click')
})

document.body.append(button)