
// Iniciar as variáveis
let board = ['','','','','','','','','']; //Jogadas por player
let jogadas = []; //jogadas por vez e casa
let jogadasVencedoras = [ //jogadas vencedoras por player
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];
let vitorias=[];
let placar1 ;
let placar2 ;

localStorage.getItem("placar1") ? placar1 =parseInt(localStorage.getItem("placar1")) : placar1 = 0;

localStorage.getItem("placar2") ? placar2 =parseInt(localStorage.getItem("placar2")) : placar2 = 0;

let jogadasPlayer1 = []; // jogadas do player1
let jogadasPlayer2 = []; // jogadas do player2
let vezDosPlayers = 0; // rodadas realizadas
let vezDoPlayer1 = 0; // rodadas do player1
let vezDoPlayer2 = 0; // rodadas do player1
let playerDaVez = 'player1'; // player da vez
let mensagem;
let gameOver = false;

function fazerJogada(casaDoTabuleiro){

    if(board[casaDoTabuleiro] == '') {

        jogadas[vezDosPlayers] = casaDoTabuleiro;
        verVezDoJogador(casaDoTabuleiro);
        board[casaDoTabuleiro] = playerDaVez;
        mostrarJogada(SquareDaVez);
        mensagem = "Boa Jogada!";
        vezDosPlayers++;
       // console.log(board[casaDoTabuleiro]);
       // console.log(board);
    } else {
        mensagem = "Casa ocupada!"
    }

}

function verVezDoJogador(casaDoTabuleiro){
    jogadas.length%2 == 0 ? 
    playerDaVez = 'player1': playerDaVez = 'player2';
    if (playerDaVez && board[casaDoTabuleiro] == '') {
        playerDaVez == 'player1'? 
        (jogadasPlayer1[vezDoPlayer1]=position ,     vezDoPlayer1++)
        : (jogadasPlayer2[vezDoPlayer2]=position , 
        vezDoPlayer2++)

    }
    console.log('Jogada nº '+vezDosPlayers)
    console.log('Jogador da vez '+playerDaVez)
    console.log('Quadrante nº '+position)    
    console.log('Quadrantes escolhidos '+jogadas)
    console.log('Quadrante do jogador 1: '+jogadasPlayer1)
    console.log('Quadrante do jogador 2: '+jogadasPlayer2)
}

function verGanhador(){

    for (let i=0; i<jogadasVencedoras.length;i++){
        let seq = jogadasVencedoras[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        console.log('Pos1: '+board[pos1])
        console.log('Pos2: '+board[pos2])
        console.log('Pos3: '+board[pos3])

        if (board[pos1]==board[pos2]&&board[pos2]==board[pos3]&&board[pos1]!='') {
            alert(`${playerDaVez} venceu!`);
            gameOver = true;


            playerDaVez == 'player1'? placar1+=1:  placar2 +=1;

            playerDaVez == 'player1' ?
            localStorage.setItem("placar1", placar1) :
            localStorage.setItem("placar2", placar2)
            console.log(placar1);console.log(placar2);
        }


    }

}
let btn = document.getElementById("btn");
btn.addEventListener("click", reiniciar)

function reiniciar(){
    location.reload();
}