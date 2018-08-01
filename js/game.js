var Furry = require('./furry.js');
var Coin = require('./coin.js');

function Game() {

    this.board = document.querySelectorAll('#board div');
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;

    var _this = this;

    this.index1 = function(x,y) {
        return x + (y * 10);
    };

    this.showFurry = function() {
        if(this.board[ this.index1(this.furry.x,this.furry.y) ] !== undefined){
            this.board[ this.index1(this.furry.x,this.furry.y) ].classList.add('furry');
        }
    };

    this.showCoin = function () {
        this.board[ this.index1(this.coin.x, this.coin.y) ].classList.add('coin');
    };

    this.hideVisibleFurry = function () {
        var toDelete = document.querySelector('.furry');
        if (toDelete != null){
            toDelete.classList.remove('furry');

        }
    };

    this.startGame = function () {
        this.idSetInterval = setInterval(function () {
            _this.moveFurry();
        }, 250);
    };

    this.moveFurry = function () {

        this.hideVisibleFurry();

        if(this.furry.direction === 'right') {
            this.furry.x++;
        }  if(this.furry.direction === 'left') {
            this.furry.x--;
        }  if(this.furry.direction === 'up') {
            this.furry.y--;
        }  if(this.furry.direction === 'down') {
            this.furry.y++;
        }

        this.GameOver();
        this.showFurry();
        this.checkCoinCollision();
    };

    this.turnFurry = function (event) {
        switch (event.which) {
            case 37:
                this.furry.direction = 'left';
                break;
            case 38:
                this.furry.direction = 'up';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40:
                this.furry.direction = 'down';
                break;
        }
    };

    document.addEventListener('keydown', function(event){
        _this.turnFurry(event);
    });

    this.checkCoinCollision = function () {
        if(this.furry.x === this.coin.x && this.furry.y === this.coin.y){
            var divCoin = document.querySelector('.coin');
            divCoin.classList.remove('coin');
            var points = document.querySelector('div strong');
            this.score++;
            points.innerHTML = this.score;

            this.coin = new Coin();
            this.showCoin();
        }
    };

    this.GameOver = function () {
        if (this.furry.x<0 || this.furry.x>9 || this.furry.y<0 || this.furry.y>9) {
            clearInterval(this.idSetInterval);

            var over = document.querySelector('#over');
            over.classList.remove('invisible');
            if(this.score === 1) {
                over.innerHTML = 'Game Over! You got ' + this.score + ' point!';
            } else {
                over.innerHTML = 'Game Over! You got ' + this.score + ' points!';
            }
            over.style.textAlign = 'center';
            over.style.lineHeight = '100vh';
            over.style.fontSize = '35px';

            this.hideVisibleFurry();
        }
    }
}

module.exports = Game;