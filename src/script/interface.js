

document.addEventListener('DOMContentLoaded',()=>{

    let square = document.querySelectorAll(".square");

    square.forEach(square =>{
        square.addEventListener('click', handleClick);
    })

})
function handleClick(event){
    
    if(jogadas.length<board.length && !gameOver) {

            SquareDaVez = event.target
            position = SquareDaVez.id 
            SquareDaVez.class = 'players';
            fazerJogada(position);
            setTimeout(verGanhador(),1000);
            console.log(mensagem)

        } else {
            mensagem = 'Jogue novamente!'
            console.log(mensagem)

        }

}
if (gameOver) {
    setTimeout(placarNovo(),1000);
    
}

function mostrarJogada(i){
    i.innerHTML = `<div class='players' id=${playerDaVez}></div>`
}

function placarNovo(){
    _placar1 = document.getElementById('placar1')    
    _placar2 = document.getElementById('placar2')
    _sp1 = document.getElementById('sp1')    
    _sp2 = document.getElementById('sp2')
    sp1 =  localStorage.getItem("placar1")
    sp2 =  localStorage.getItem("placar2")
    _sp1.innerHTML = !sp1 ? placar1 : sp1
    _sp2.innerHTML = !sp2 ? placar2 : sp2
    //_placar1.innerHTML = !placar1Novo ? placar1 : placar1Novo
    //_placar2.innerHTML = !placar2Novo ? placar2 : placar2Novo

}

placarNovo()

