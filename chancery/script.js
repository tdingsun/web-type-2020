var runningInference = false;
var temperature = 0.85;
const leftText = 'Cross Chancery is a Variable Typeface Designed by Tiger Dingsun.';
const chars = ['Aa', 'Bb', 'Cc', 'Dd', 'Ee', 'Ff', 'Gg', 'Hh', 'Ii', 'Jj', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp', 'Qq', 'Rr', 'Ss', 'Tt', 'Uu', 'Vv', 'Ww', 'Xx', 'Yy', 'Zz'];
var index = 1;
var width;
var height;

const speed = 1;
const wordSpeed = 250;

var wiggle_wdth = 100;
var wiggle_wght = 100;

var t;

$(document).ready(function(event){
	resize();
	makeLeft();
	setInterval(wiggle, 350);
	t = setTimeout(setupTimer, 2000);

});

$(window).resize(function(){
	resize();
});

$("#downarrow").click(function(e){
	$(".page").get(1).scrollIntoView();
});


$("#mousemap").mousemove(function(e){
	wght = rangeMap(e.pageX, 150, width - 150, 100, 1000);
	wdth = rangeMap(e.pageY, 150, height - 150, 100, 1000);
	$("#mousemap").css({
		"font-variation-settings": `'wght' ${wght}, 'wdth' ${wdth}`
	});
});

function rangeMap(num, in_min, in_max, out_min, out_max){
	return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function setupTimer(){
	clearTimeout(t);
	$("#showcase").text(chars[index]);
	index++;
	t = setInterval(timer, 3000);
}

function timer() {
	$("#showcase").text(chars[index]);
	index++;
	if(index >= 26){
		index = 0;
	}
}

var r1;
var r2;
function wiggle(){
	r1 = Math.random() * 100 - 50;
	r2 = Math.random() * 100 - 50;
	wiggle_wdth = Math.min(Math.max(100, wiggle_wdth + r1), 1000);
	wiggle_wght = Math.min(Math.max(100, wiggle_wght + r2), 1000);
	$('.wiggly').css({
		"font-variation-settings": `'wght' ${wiggle_wght}, 'wdth' ${wiggle_wdth}`
	});
}

$('.wiggly').click(function(e){
	wiggle_wdth = 100;
	wiggle_wght = 100;
	$('.wiggly').css({
		"font-variation-settings": `'wght' ${wiggle_wght}, 'wdth' ${wiggle_wdth}`
	});
})

function resize(){
	width = $(window).width();
	height = $(window).height();
}

function makeLeft() {
	for(let i = 0; i < leftText.length; i++){
		let span = $('<span class="leftchar"></span>');
		span.text(leftText[i]);
		span.css({
			'font-variation-settings': `'wght' ${i * (900/leftText.length) + 100}, 'wdth' 100`
		})
		$("#title").append(span);
	}
}
