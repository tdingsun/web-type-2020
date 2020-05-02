class Ball {
	constructor(div, xdir, ydir) {
		this.div = div;
		this.xdir = xdir;
		this.ydir = ydir;
	}

	move() {
		var left = parseFloat(this.div.css("left"));
		var top = parseFloat(this.div.css("top"));
		var divheight = parseFloat(this.div.css("height"));
		var divwidth = parseFloat(this.div.css("width"));

		if(left <= margin || left >= (width - (margin + divwidth))){
			this.xdir *= -1;
			if(left <= margin){
				left = margin + 1;
			}
			if(left >= (width - (margin + divwidth))){
				left = (width - (margin + divwidth + 1));

			}
		}

		if(top <= margin || top >= (height - (margin + divheight))){
			if(top <= margin){
				top = margin + 1;
			}
			if(top >= (height - (margin + divheight))){
				top = (height - (margin + divheight + 1));
			}
			this.ydir *= -1;
		}

		this.div.css({
			left: left + this.xdir,
			top: top + this.ydir
		});
	}
}

const margin = 0;
const speed = 2;
var width;
var height;
var balls = [];

$(document).ready(function(){
    resize();
    setupBalls();
    requestAnimationFrame(moveBalls);
});

function resize(){
    width = $(window).width();
	height = $(window).height();
}

function moveBalls(){
    balls.forEach(function(ball, index){
        ball.move();
    })
    requestAnimationFrame(moveBalls);
}
function setupBalls(){
    var ball1 = new Ball($("#link-1"), speed * 1.25, -speed * 0.75);
    var ball2 = new Ball($("#link-2"), speed * 0.75, -speed * 1.25);
    var ball3 = new Ball($("#link-3"), speed * 0.33, -speed * 0.75);
    balls = [ball1, ball2, ball3];
}
