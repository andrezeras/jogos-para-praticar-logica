let amigos = [];
let participantes = 4;

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value;

    if (amigo == '') {
        alert('Digite o nome do amigo secreto!');
        return;
    }

    if (amigos.includes(amigo)) {
        alert('Nome já adicionado, digite outro nome!');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo);

    if (lista.textContent == '') {
        lista.textContent = amigo;
    } else {
        lista.textContent += ', ' + amigo;
    }
    document.getElementById('nome-amigo').value = '';
}

function sortear() {

    if (amigos.length < participantes) {
        alert('Adicione mais participantes para o sorteio!');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + '-->' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML += amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
        
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}