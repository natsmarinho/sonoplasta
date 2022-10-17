function TocaSom(seletorAudio){
    
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    } else{
        console.log('Elemento não encontrado ou seletor inválido.')
    }
};

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const som = tecla.classList[1];
    const audio = `#som_${som}`;

    tecla.onclick = function(){
        TocaSom(audio);
    };

    tecla.onkeydown = function(evento){
        if(evento.code === 'Enter' || evento.code === 'Space'){
            tecla.classList.add('ativa');
        };
    };

    tecla.onkeyup = function(evento){
        tecla.classList.remove('ativa');
    };
}
