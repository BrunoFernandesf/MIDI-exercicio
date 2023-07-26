const listaTeclas = document.querySelectorAll('.tecla');

for (let cont = 0; cont < listaTeclas.length; cont++) {

    const tecla = listaTeclas[cont];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    };
}

function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
