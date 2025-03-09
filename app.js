// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let amigoSorteado = document.getElementById('resultado');

function agregarAmigo() {
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
    listaAmigos.innerHTML = ''
    for (let i = 0; i < amigos.length; i++) {
        const amigoAgregado = document.createElement('li');
        amigoAgregado.innerHTML = `${amigos[i]}`;
        listaAmigos.appendChild(amigoAgregado);
    }
}

function sortearAmigo() {
    let amigoSeleccionado = Math.floor(Math.random() * amigos.length);
    if (amigos == '') {
        alert("No hay amigos para sortear, ingresa al menos un amigo primero.");
        console.log(amigos);
    } else {
        amigoSorteado.innerHTML = `${amigos[amigoSeleccionado]}`;
        listaAmigos.innerHTML = '';
    }
}

function refrescar() {
    listaAmigos.innerHTML = '';
    amigos = [];
    amigo.value = '';
    amigoSorteado.innerHTML = '';
}
