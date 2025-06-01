const tapas = [
    "Patatas Bravas",
    "Tortilla Española",
    "Gambas al Ajillo",
    "Pimientos de Padrón",
    "Chorizo al Vino",
    "Croquetas",
    "Pulpo a la Gallega",
    "Ensaladilla Rusa"
];


function crearBalon(tapa) {
    const balon = document.createElement('div');
    balon.className = 'balon';
    balon.innerText = tapa;
    balon.style.left = Math.random() * 100 + 'vw';
    balon.style.top = Math.random() * 100 + 'vh';
    balon.onclick = () => seleccionarTapa(tapa);
    return balon;
}


function mostrarTapas() {
    const menu = document.getElementById('menu');
    const numBaloons = 10; // Número de globos a mostrar


    for (let i = 0; i < numBaloons; i++) {
        const tapa = tapas[Math.floor(Math.random() * tapas.length)];
        const balon = crearBalon(tapa);
        menu.appendChild(balon);
    }
}


function seleccionarTapa(tapa) {
    alert(`Has seleccionado: ${tapa}`);
    // Aquí puedes agregar más lógica, como cerrar los globos o mostrar más información.
}


mostrarTapas();