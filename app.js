// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo');
    if (amigo.value == "") {
        alert("Por favor, inserte un nombre.");
        console.log(amigo.value);
    } else {
        amigos.push(amigo.value);
        console.log(amigo.value, amigos);
        amigo.value = '';
        mostrarAmigoAgregado();
    }
}

function mostrarAmigoAgregado() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''
    for (let i = 0; i < amigos.length; i++) {
        const amigoAgregado = document.createElement('li');
        amigoAgregado.innerHTML = `${amigos[i]}`;
        listaAmigos.appendChild(amigoAgregado);
    }
}