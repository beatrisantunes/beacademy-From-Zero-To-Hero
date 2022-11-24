function hello(name) {
    console.log(name)
}

function helloUser(n) {
    n('Beatris Antunes')
}

//helloUser(hello)

const callback = e => alert('Foi clicado')
window.addEventListener('click', callback)