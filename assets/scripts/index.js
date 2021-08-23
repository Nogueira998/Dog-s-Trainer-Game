const btnStartElement = document.getElementById("start");
const firstScreenElement = document.querySelector(".firstScreen");
const secondScreenElement = document.querySelector(".secondScreen");
const thirdScreenElement = document.querySelector(".thirdScreen");
const textBloqElement = document.getElementById("text-bloq")
const btnBrincarElement = document.getElementById("btn-brincar")
const btnPassearElement = document.getElementById("btn-passear")
const btnPetiscoElement = document.getElementById("btn-petisco")
const imgDogElement = document.querySelector(".img-dog")
const imgResultElement = document.querySelector("#result-img")
const okElement = document.getElementById("OK")
let gameOver = false

const game = new Game ()
const shuffle = game.shuffle()
let deckPlayer = shuffle[0]
let cpuDeck = shuffle[1]
let reserveDeck = shuffle[2]

window.alert("Esse cachorro é muito arteiro e você precisa ensinar a ele bons modos. Para isso, escolha uma das atividades disponíveis para evitar que ele faça algo errado. Boa sorte treinador!!!")

//Próxima tela
btnStartElement.addEventListener("click", function() {
  if(firstScreenElement.style.display === "flex") {
    firstScreenElement.style.display = "none";
    secondScreenElement.style.display = "flex"
    play()
  } else {
    firstScreenElement.style.display = "flex";
  }
});

//Opção Brincar
btnBrincarElement.addEventListener("click", function() {
    btnGo(1)
    });    

//Opção Passear
btnPassearElement.addEventListener("click", function() {
    btnGo(2)
    });

//Opção Petisco
btnPetiscoElement.addEventListener("click", function() {
    btnGo(3)
    });

//Prepara jogada
function play(){
    let option = 0
    //Antes de jogar verificar se algum botão será bloqueado
    if(cpuDeck[0].bloqueio === true){
        option = Math.floor(Math.random() * 3) + 1
        if(option === 1){
            btnBrincarElement.disabled = true
            btnPassearElement.disabled = false
            btnPetiscoElement.disabled = false
            textBloqElement.innerText = "Você não está conseguindo encontrar um brinquedo!"
        } else if (option === 2){
            btnBrincarElement.disabled = false
            btnPassearElement.disabled = true
            btnPetiscoElement.disabled = false
            textBloqElement.innerText = "Está chovendo muito lá fora!"
        } else {
            btnBrincarElement.disabled = false
            btnPassearElement.disabled = false
            btnPetiscoElement.disabled = true
            textBloqElement.innerText = "Acabaram os petiscos!"
        }
    } else {
        option = 0
        btnBrincarElement.disabled = false
        btnPassearElement.disabled = false
        btnPetiscoElement.disabled = false
        textBloqElement.innerText = ""
    }

    //Atualiza tela
    document.getElementById("text").innerText = deckPlayer[0].texto
    imgDogElement.setAttribute('src', deckPlayer[0].img) 
    const point = new Result(deckPlayer,cpuDeck)
    const score = point.updateScore()
    document.getElementById('player-points').style.width = score[0]
    document.getElementById('cpu-points').style.width = score[1]
    document.getElementById('player-points').innerText = score[0]
    document.getElementById('cpu-points').innerText = score[1]

    console.log(deckPlayer[0].brincar1 - cpuDeck[0].brincar2)
    console.log(deckPlayer[0].passear1 - cpuDeck[0].passear2)
    console.log(deckPlayer[0].petisco1 - cpuDeck[0].petisco2)
    
}

function gameOverCheck () {
    if(deckPlayer.length<=0){
        imgResultElement.setAttribute("src","./assets/images/gameover.png")
        secondScreenElement.style.display = "none"
        thirdScreenElement.style.display = "flex"
        gameOver = true
    } else if(cpuDeck.length<=0){
        imgResultElement.setAttribute("src","./assets/images/win.png")
        secondScreenElement.style.display = "none"
        thirdScreenElement.style.display = "flex"
        gameOver = true
    }
}


//Retorna jogo depois de mensagem
okElement.addEventListener("click", function() {
    thirdScreenElement.style.display = "none";
    if(gameOver === true){
        firstScreenElement.style.display = "flex"
        btnStartElement.innerText="Recomeçar"
        const refreshPage = () => {
        location.reload();
        }
        btnStartElement.addEventListener('click', refreshPage)
    } else {
        secondScreenElement.style.display = "flex"
        play()
    }
  });

let contador = 0

function btnGo(option){
    const turn = new Turn(option,deckPlayer,cpuDeck,reserveDeck)
    const result = turn.checkWin()
    deckPlayer = result[0]
    cpuDeck = result[1]
    reserveDeck = result[2]
    imgResultElement.setAttribute("src",result[3])
    secondScreenElement.style.display = "none"
    thirdScreenElement.style.display = "flex"
    console.log(gameOver)
    gameOverCheck()
}







  


