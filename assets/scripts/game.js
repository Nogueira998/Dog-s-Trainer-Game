class Game {
    constructor(){
        this.playerDeck = []
        this.cpuDeck = []
        this.reserveDeck = []
        this.originalDeck = [
            {num:1,brincar1:20,brincar2:95,passear1:50,passear2:65,petisco1:65,petisco2:35,bloqueio:false,texto:"O Cachorro quer fazer xixi no tapete",img:"./"},
            {num:2,brincar1:70,brincar2:70,passear1:70,passear2:70,petisco1:70,petisco2:70,bloqueio:false,texto:"O Cachorro quer fazer cocô no tapete",img:"./"},
            {num:3,brincar1:80,brincar2:35,passear1:35,passear2:25,petisco1:5,petisco2:70,bloqueio:false,texto:"O Cachorro quer rasgar o lixo",img:"./"},
            {num:4,brincar1:50,brincar2:50,passear1:50,passear2:50,petisco1:50,petisco2:50,bloqueio:false,texto:"O Cachorro quer morder o carteiro",img:"./"},
            {num:5,brincar1:10,brincar2:10,passear1:99,passear2:99,petisco1:5,petisco2:5,bloqueio:true,texto:"O Cachorro quer comer sua comida",img:"./"},
            {num:6,brincar1:60,brincar2:60,passear1:90,passear2:90,petisco1:30,petisco2:30,bloqueio:false,texto:"O Cachorro quer lamber sabão",img:"./"},
            {num:7,brincar1:99,brincar2:15,passear1:15,passear2:45,petisco1:90,petisco2:85,bloqueio:true,texto:"O Cachorro quer fugir da casa",img:"./"},
            {num:8,brincar1:99,brincar2:99,passear1:5,passear2:5,petisco1:10,petisco2:10,bloqueio:true,texto:"O Cachorro quer latir bem alto",img:"./"},
            {num:9,brincar1:20,brincar2:10,passear1:80,passear2:40,petisco1:40,petisco2:20,bloqueio:true,texto:"O Cachorro quer sair voando pela janela",img:"./"},
            {num:10,brincar1:45,brincar2:70,passear1:75,passear2:90,petisco1:40,petisco2:10,bloqueio:false,texto:"O Cachorro quer quebrar o abajur",img:"./"},
            {num:11,brincar1:5,brincar2:5,passear1:10,passear2:10,petisco1:99,petisco2:99,bloqueio:false,texto:"O Cachorro quer bagunçar as suas roupas",img:"./"},
            {num:12,brincar1:60,brincar2:60,passear1:60,passear2:60,petisco1:60,petisco2:60,bloqueio:false,texto:"O Cachorro quer beber água da privada",img:"./"},
            {num:13,brincar1:35,brincar2:80,passear1:65,passear2:80,petisco1:50,petisco2:20,bloqueio:true,texto:"O Cachorro quer comer seu sapato",img:"./"},
            {num:14,brincar1:90,brincar2:25,passear1:25,passear2:30,petisco1:80,petisco2:75,bloqueio:false,texto:"O Cachorro quer sair voando pela janela",img:"./"},
            {num:15,brincar1:85,brincar2:30,passear1:30,passear2:35,petisco1:75,petisco2:80,bloqueio:true,texto:"O Cachorro quer ficar escondido",img:"./"},
            {num:16,brincar1:95,brincar2:20,passear1:20,passear2:40,petisco1:85,petisco2:90,bloqueio:true,texto:"O Cachorro quer comer um passarinho",img:"./"},
            {num:17,brincar1:30,brincar2:85,passear1:60,passear2:75,petisco1:55,petisco2:25,bloqueio:false,texto:"O Cachorro quer derrubar as plantas",img:"./"},
            {num:18,brincar1:40,brincar2:40,passear1:40,passear2:40,petisco1:40,petisco2:40,bloqueio:false,texto:"O Cachorro quer rasgar o sofá",img:"./"},
            {num:19,brincar1:25,brincar2:90,passear1:55,passear2:70,petisco1:60,petisco2:30,bloqueio:true,texto:"O Cachorro quer arranhar a porta",img:"./"},
            {num:20,brincar1:10,brincar2:10,passear1:10,passear2:10,petisco1:10,petisco2:10,bloqueio:true,texto:"O Cachorro quer morder uma criança",img:"./"},
            {num:21,brincar1:90,brincar2:90,passear1:30,passear2:30,petisco1:60,petisco2:60,bloqueio:false,texto:"O Cachorro quer dormir o dia inteiro",img:"./"},
            {num:22,brincar1:50,brincar2:65,passear1:80,passear2:95,petisco1:35,petisco2:5,bloqueio:true,texto:"O Cachorro quer sentar em cima da mesa",img:"./"},
            {num:23,brincar1:10,brincar2:20,passear1:40,passear2:80,petisco1:20,petisco2:40,bloqueio:true,texto:"O Cachorro quer derrubar a TV",img:"./"},
            {num:24,brincar1:40,brincar2:75,passear1:70,passear2:85,petisco1:45,petisco2:15,bloqueio:false,texto:"O Cachorro quer morder outro",img:"./"},
            {num:25,brincar1:75,brincar2:40,passear1:40,passear2:20,petisco1:10,petisco2:65,bloqueio:true,texto:"O Cachorro quer comer um Cactus",img:"./"},
            {num:26,brincar1:5,brincar2:5,passear1:10,passear2:50,petisco1:95,petisco2:99,bloqueio:true,texto:"O Cachorro quer beber Whisky",img:"./"},
            {num:27,brincar1:10,brincar2:5,passear1:5,passear2:55,petisco1:99,petisco2:95,bloqueio:true,texto:"O Cachorro quer destruir o jardim",img:"./"},
            {num:28,brincar1:30,brincar2:60,passear1:60,passear2:99,petisco1:55,petisco2:45,bloqueio:false,texto:"O Cachorro quer lamber a tomada",img:"./"},
            {num:29,brincar1:60,brincar2:55,passear1:90,passear2:5,petisco1:25,petisco2:50,bloqueio:true,texto:"O Cachorro quer morder um gato",img:"./"},
            {num:30,brincar1:30,brincar2:30,passear1:60,passear2:60,petisco1:90,petisco2:90,bloqueio:false,texto:"O Cachorro quer atenção",img:"./"},
            {num:31,brincar1:15,brincar2:99,passear1:45,passear2:60,petisco1:70,petisco2:40,bloqueio:false,texto:"O Cachorro quer ficar correndo atrás do rabo",img:"./"},
            {num:32,brincar1:70,brincar2:45,passear1:99,passear2:15,petisco1:15,petisco2:60,bloqueio:true,texto:"O Cachorro quer esconder o seu celular",img:"./"},
            {num:33,brincar1:65,brincar2:50,passear1:95,passear2:10,petisco1:20,petisco2:55,bloqueio:true,texto:"O Cachorro quer escapar do banho",img:"./"},
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




