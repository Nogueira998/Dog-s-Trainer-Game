class Game {
    constructor(){
        this.playerDeck = []
        this.cpuDeck = []
        this.reserveDeck = []
        this.originalDeck = [
            {number:1},
            {number:2},
            {number:3},
            {number:4},
            {number:5},
            {number:6},
            {number:7},
            {number:8},
            {number:9},
            {number:10},
            {number:11},
            {number:12},
            {number:13},
            {number:14},
            {number:15},
            {number:16},
            {number:17},
            {number:18},
            {number:19},
            {number:20},
            {number:21},
            {number:22},
            {number:23},
            {number:24},
            {number:25},
            {number:26},
            {number:27},
            {number:28},
            {number:29},
            {number:30},
            {number:31},
            {number:32},
            {number:33},
        ]
    }

//Embaralha o deck criando uma array aleatória e subindo cartas para os baralhos de jogador, CPU e Reserva.
    shuffle (){
        const arrRandomNums = []
        while(arrRandomNums.length < this.originalDeck.length){
            let varNum = Math.floor(Math.random()*33)
            if(arrRandomNums.indexOf(varNum) === -1){
                arrRandomNums.push(varNum)
            }
        }
        console.log(arrRandomNums)
        //Baralho inicial Jogador
        for (let i = 0 ; i < 16;i++){
            this.playerDeck.push(this.originalDeck[arrRandomNums[i]])
        }
        //Baralho inicial CPU
        for(let i = 16; i < 32; i++){
            this.cpuDeck.push(this.originalDeck[arrRandomNums[i]])
        }
        //Baralho reserva inicial
        this.reserveDeck.push(this.originalDeck[arrRandomNums[32]])
      console.log(this.playerDeck)
      console.log(this.cpuDeck)
      console.log(this.reserveDeck)
    }

}

let teste = new Game()

teste.shuffle()




