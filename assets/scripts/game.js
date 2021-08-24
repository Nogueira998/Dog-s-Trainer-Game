class Game {
    constructor(){
        this.playerDeck = []
        this.cpuDeck = []
        this.reserveDeck = []
        this.originalDeck = [
            {num:1,brincar1:20,brincar2:95,passear1:50,passear2:65,petisco1:65,petisco2:35,bloqueio:false,texto:"O Cachorro quer fazer xixi no tapete",img:"./assets/images/1.jpg"},
            {num:2,brincar1:70,brincar2:70,passear1:70,passear2:70,petisco1:70,petisco2:70,bloqueio:false,texto:"O Cachorro quer fazer cocô no tapete",img:"./assets/images/2.jpg"},
            {num:3,brincar1:80,brincar2:35,passear1:35,passear2:25,petisco1:5,petisco2:70,bloqueio:false,texto:"O Cachorro quer rasgar o lixo",img:"./assets/images/3.jpg"},
            {num:4,brincar1:50,brincar2:50,passear1:50,passear2:50,petisco1:50,petisco2:50,bloqueio:false,texto:"O Cachorro quer morder o carteiro",img:"./assets/images/4.jpg"},
            {num:5,brincar1:10,brincar2:10,passear1:99,passear2:99,petisco1:5,petisco2:5,bloqueio:true,texto:"O Cachorro quer comer sua comida",img:"./assets/images/5.jpg"},
            {num:6,brincar1:60,brincar2:60,passear1:90,passear2:90,petisco1:30,petisco2:30,bloqueio:false,texto:"O Cachorro quer lamber sabão",img:"./assets/images/6.jpg"},
            {num:7,brincar1:99,brincar2:15,passear1:15,passear2:45,petisco1:90,petisco2:85,bloqueio:true,texto:"O Cachorro quer fugir da casa",img:"./assets/images/7.jpg"},
            {num:8,brincar1:99,brincar2:99,passear1:5,passear2:5,petisco1:10,petisco2:10,bloqueio:true,texto:"O Cachorro quer latir bem alto",img:"./assets/images/8.jpg"},
            {num:9,brincar1:20,brincar2:10,passear1:80,passear2:40,petisco1:40,petisco2:20,bloqueio:true,texto:"O Cachorro quer sair voando pela janela",img:"./assets/images/9.jpg"},
            {num:10,brincar1:45,brincar2:70,passear1:75,passear2:90,petisco1:40,petisco2:10,bloqueio:false,texto:"O Cachorro quer quebrar o abajur",img:"./assets/images/10.jpg"},
            {num:11,brincar1:5,brincar2:5,passear1:10,passear2:10,petisco1:99,petisco2:99,bloqueio:false,texto:"O Cachorro quer bagunçar as suas roupas",img:"./assets/images/11.jpg"},
            {num:12,brincar1:60,brincar2:60,passear1:60,passear2:60,petisco1:60,petisco2:60,bloqueio:false,texto:"O Cachorro quer beber água da privada",img:"./assets/images/12.jpg"},
            {num:13,brincar1:35,brincar2:80,passear1:65,passear2:80,petisco1:50,petisco2:20,bloqueio:true,texto:"O Cachorro quer comer seu sapato",img:"./assets/images/13.jpg"},
            {num:14,brincar1:90,brincar2:25,passear1:25,passear2:30,petisco1:80,petisco2:75,bloqueio:false,texto:"O Cachorro quer comer doces",img:"./assets/images/14.jpg"},
            {num:15,brincar1:85,brincar2:30,passear1:30,passear2:35,petisco1:75,petisco2:80,bloqueio:true,texto:"O Cachorro quer ficar escondido",img:"./assets/images/15.jpg"},
            {num:16,brincar1:95,brincar2:20,passear1:20,passear2:40,petisco1:85,petisco2:90,bloqueio:true,texto:"O Cachorro quer comer um passarinho",img:"./assets/images/16.jpg"},
            {num:17,brincar1:30,brincar2:85,passear1:60,passear2:75,petisco1:55,petisco2:25,bloqueio:false,texto:"O Cachorro quer derrubar as plantas",img:"./assets/images/17.jpg"},
            {num:18,brincar1:40,brincar2:40,passear1:40,passear2:40,petisco1:40,petisco2:40,bloqueio:false,texto:"O Cachorro quer rasgar o sofá",img:"./assets/images/18.jpg"},
            {num:19,brincar1:25,brincar2:90,passear1:55,passear2:70,petisco1:60,petisco2:30,bloqueio:true,texto:"O Cachorro quer arranhar a porta",img:"./assets/images/19.jpg"},
            {num:20,brincar1:10,brincar2:10,passear1:10,passear2:10,petisco1:10,petisco2:10,bloqueio:true,texto:"O Cachorro quer morder uma criança",img:"./assets/images/20.jpg"},
            {num:21,brincar1:90,brincar2:90,passear1:30,passear2:30,petisco1:60,petisco2:60,bloqueio:false,texto:"O Cachorro quer dormir o dia inteiro",img:"./assets/images/21.jpg"},
            {num:22,brincar1:50,brincar2:65,passear1:80,passear2:95,petisco1:35,petisco2:5,bloqueio:true,texto:"O Cachorro quer sentar em cima da mesa",img:"./assets/images/22.jpg"},
            {num:23,brincar1:10,brincar2:20,passear1:40,passear2:80,petisco1:20,petisco2:40,bloqueio:true,texto:"O Cachorro quer derrubar a TV",img:"./assets/images/23.jpg"},
            {num:24,brincar1:40,brincar2:75,passear1:70,passear2:85,petisco1:45,petisco2:15,bloqueio:false,texto:"O Cachorro quer morder outro",img:"./assets/images/24.jpg"},
            {num:25,brincar1:75,brincar2:40,passear1:40,passear2:20,petisco1:10,petisco2:65,bloqueio:true,texto:"O Cachorro quer comer um Cactus",img:"./assets/images/25.jpg"},
            {num:26,brincar1:5,brincar2:5,passear1:10,passear2:50,petisco1:95,petisco2:99,bloqueio:true,texto:"O Cachorro quer beber Whisky",img:"./assets/images/26.jpg"},
            {num:27,brincar1:10,brincar2:5,passear1:5,passear2:55,petisco1:99,petisco2:95,bloqueio:true,texto:"O Cachorro quer destruir o jardim",img:"./assets/images/27.jpg"},
            {num:28,brincar1:30,brincar2:60,passear1:60,passear2:99,petisco1:55,petisco2:45,bloqueio:false,texto:"O Cachorro quer lamber a tomada",img:"./assets/images/28.jpg"},
            {num:29,brincar1:60,brincar2:55,passear1:90,passear2:5,petisco1:25,petisco2:50,bloqueio:true,texto:"O Cachorro quer morder um gato",img:"./assets/images/29.jpg"},
            {num:30,brincar1:30,brincar2:30,passear1:60,passear2:60,petisco1:90,petisco2:90,bloqueio:false,texto:"O Cachorro quer atenção",img:"./assets/images/30.jpg"},
            {num:31,brincar1:15,brincar2:99,passear1:45,passear2:60,petisco1:70,petisco2:40,bloqueio:false,texto:"O Cachorro quer ficar correndo atrás do rabo",img:"./assets/images/31.jpg"},
            {num:32,brincar1:70,brincar2:45,passear1:99,passear2:15,petisco1:15,petisco2:60,bloqueio:true,texto:"O Cachorro quer esconder o seu celular",img:"./assets/images/32.jpg"},
            {num:33,brincar1:65,brincar2:50,passear1:95,passear2:10,petisco1:20,petisco2:55,bloqueio:true,texto:"O Cachorro quer escapar do banho",img:"./assets/images/33.jpg"},            
        ]
    }

    //Embaralha o deck criando uma array aleatória e subindo cartas para os baralhos de jogador, CPU e Reserva.
    shuffle (){
        
        const arrRandomNums = []
        let arrResultShuffle = []

        while(arrRandomNums.length < this.originalDeck.length){
            let varNum = Math.floor(Math.random() * this.originalDeck.length)
            if(arrRandomNums.indexOf(varNum) === -1){
                arrRandomNums.push(varNum)
            }
        }

        //Baralho inicial Jogador
        for (let i = 0 ; i < 16;i++){
            this.playerDeck.push(this.originalDeck[arrRandomNums[i]])
        }
        arrResultShuffle.push(this.playerDeck)

        //Baralho inicial CPU
        for(let i = 16; i < 32; i++){
            this.cpuDeck.push(this.originalDeck[arrRandomNums[i]])
        }
        arrResultShuffle.push(this.cpuDeck)

        //Baralho reserva inicial
        this.reserveDeck.push(this.originalDeck[arrRandomNums[32]])
        arrResultShuffle.push(this.reserveDeck)

        return arrResultShuffle
    }    
}

class Turn {
    constructor(option, playerDeck,cpuDeck,reserveDeck){
        this.option= option
        this.playerDeck = playerDeck
        this.cpuDeck = cpuDeck
        this.reserveDeck = reserveDeck
    }

    //Verifica quem ganhou e aumenta seu baralho com as cartas jogadas, em caso de empate anterior leva as cartas reservas também
    checkWin () {
        let brincarDif = this.playerDeck[0].brincar1 - this.cpuDeck[0].brincar2
        let passearDif = this.playerDeck[0].passear1 - this.cpuDeck[0].passear2
        let petiscoDif = this.playerDeck[0].petisco1 - this.cpuDeck[0].petisco2
        let arrResultTurn = []
        
        //Empate
        if((this.option === 1 && brincarDif === 0)||(this.option === 2 && passearDif === 0)||(this.option === 3 && petiscoDif === 0)) {
        this.reserveDeck.push(this.playerDeck[0])
        this.reserveDeck.push(this.cpuDeck[0])
        this.playerDeck.shift(this.playerDeck[0])
        this.cpuDeck.shift(this.cpuDeck[0])
        this.imgResult = "./assets/images/draw.png"
        
        //Jogador ganha
        } else if((this.option === 1 && brincarDif > 0)||(this.option === 2 && passearDif > 0)||(this.option === 3 && petiscoDif > 0)) {
        this.playerDeck.push(this.playerDeck[0])
        this.playerDeck.shift(this.playerDeck[0])
        this.playerDeck.push(this.cpuDeck[0])
        this.cpuDeck.shift(this.cpuDeck[0])
        this.imgResult = "./assets/images/good.png"

        for(let i = 0 ; i < this.reserveDeck.length ; i++){
        this.playerDeck.push(this.reserveDeck[i])
        this.reserveDeck.shift(this.reserveDeck[i])
        }

        //CPU ganha
        } else {
        this.cpuDeck.push(this.cpuDeck[0])
        this.cpuDeck.shift(this.cpuDeck[0])
        this.cpuDeck.push(this.playerDeck[0])
        this.playerDeck.shift(this.playerDeck[0])
        this.imgResult = "./assets/images/again.png"
        
        for(let i = 0 ; i < this.reserveDeck.length ; i++){
        this.cpuDeck.push(this.reserveDeck[i])
        this.reserveDeck.shift(this.reserveDeck[i])
        }
        }

        arrResultTurn = [this.playerDeck,this.cpuDeck,this.reserveDeck,this.imgResult]
        return arrResultTurn
    }
}

class Result {
    constructor(playerDeck,cpuDeck){
        this.playerDeck = playerDeck
        this.cpuDeck = cpuDeck
        this.result = []
    }

    updateScore (){
        let playerPoints = Math.floor((this.playerDeck.length/(this.playerDeck.length + this.cpuDeck.length))*100)
        let cpuPoints = Math.floor((this.cpuDeck.length/(this.playerDeck.length + this.cpuDeck.length))*100)
        const newStyleWidth = [`${playerPoints}%`,`${cpuPoints}%`]
        return newStyleWidth
    }
}