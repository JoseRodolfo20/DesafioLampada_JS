const ligada = document.querySelector('input.ligada')
const desligada = document.querySelector('input.desligada')
const img = document.querySelector('img.img')

function aindaQuebrada(){
    return img.src.indexOf('quebrada') > -1
}

ligada.addEventListener('click', ligar)
img.addEventListener('mouseenter', ligar)
function ligar(){
    if(!aindaQuebrada()){
      img.src = 'acessa.jpg'  
    } 
}

desligada.addEventListener('click', desliga)
img.addEventListener('mouseout', desliga)
function desliga(){
    if(!aindaQuebrada()){
        img.src = 'inteira.jpg'
    }
}

img.addEventListener('dblclick', quebrar)
function quebrar(){
    img.src = 'quebrada.jpg'
}
