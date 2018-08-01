function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = 'right';
}

function Coin() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}

function Game() {



    this.board = document.querySelectorAll('#board div');
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;



    this.index1 = function(x,y) {
        return x + (y * 10);
    }
    this.showFurry = function() {
        this.board[ this.index1(this.furry.x,this.furry.y) ].classList.add('furry');

    }
    this.showCoin = function () {
        this.board[ this.index1(this.coin.x, this.coin.y) ].classList.add('coin');
    }

    this.startGame = function () {
        this.idSetInterval = setInterval(function () {
           console.log('hura set interval')
        }, 250);
    }
}






document.addEventListener("DOMContentLoaded", function() {

    var game = new Game();
    game.showFurry();
    game.showCoin();
    game.startGame();

});
