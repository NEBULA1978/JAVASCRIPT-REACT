const button = document.createElement('button')
button.innerText = 'Click me'


document.body.append(button)
button.addEventListener('click', function(){
    alert('click')
})