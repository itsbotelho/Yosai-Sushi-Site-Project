document.getElementById
const modalMapa = document.getElementById('mapa');
const btnAbrir = document.getElementById('abrirMapa');
const btnFechar = document.getElementById('fecharMapa');

btnAbrir.addEventListener('click', () => {modalMapa.showModal();});
btnFechar.addEventListener('click', () => {modalMapa.close();});
modalMapa.addEventListener('click', (event) => {if (event.target === modalMapa){modalMapa.close();}})