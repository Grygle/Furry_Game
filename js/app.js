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

    var _this = this;


    this.index1 = function(x,y) {
        return x + (y * 10);
    }

    this.showFurry = function() {
        this.board[ this.index1(this.furry.x,this.furry.y) ].classList.add('furry');

    }

    this.showCoin = function () {
        this.board[ this.index1(this.coin.x, this.coin.y) ].classList.add('coin');
    }

    this.hideVisibleFurry = function () {
        var toDelete = document.querySelector('.furry');
        toDelete.classList.remove('furry');
    }

    this.startGame = function () {
        this.idSetInterval = setInterval(function () {
            _this.moveFurry();
        }, 250);
    }

    this.moveFurry = function () {
        this.hideVisibleFurry();
        if(this.furry.direction === 'right'){
            this.furry.x += 1;
        } else if(this.furry.direction === 'left'){
            this.furry.x -= 1;
        } else if(this.furry.direction === 'up') {
            this.furry.y += 1;
        } else {
            this.furry.y -= 1;
        }
        this.showFurry();
    }
}


document.addEventListener("DOMContentLoaded", function() {

    var game = new Game();
    game.showFurry();
    game.showCoin();
    game.startGame();

});
