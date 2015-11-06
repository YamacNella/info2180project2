/*
Camay Allen 620079027
Project 2 
INFO2180
*/
"use strict";
var place;
var posY;
var posX;

window.onload = function(){
	var puzzlearea = document.getElementById('puzzlearea');
	place = puzzlearea.getElementsByTagName('div');
	for (var f = 0; f < place.length; f++){
		place[f].className = 'puzzlepiece';
		place[f].style.left = (f%4*100)+'px';
		place[f].style.top = (parseInt(f/4)*100) + 'px';
		place[f].style.backgroundPosition= '-' + place[f].style.left + ' ' + '-' + place[f].style.top;
		place[f].onmouseover = function(){
			if (moveCheck(parseInt(this.innerHTML))){
				place[f].addClassName("movablepiece");
			}
		};
		place[f].onmouseout = function(){
			place[f].removeClassName("movablepiece");
		};

		place[f].onclick = function(){
			if (moveCheck(parseInt(this.innerHTML))){
				swap(this.innerHTML-1);
				if (finished()){
					var timer = window.setInterval("winner()",1000);
				}
				return;
			}
		};
	}

	posX = '300px';
	posY = '300px';

	var shufflebutton = document.getElementById('shufflebutton');
	shufflebutton.onclick = function(){
		for (var p = 0; p < 250; p++){
			var r = parseInt(Math.random()* 100) %4;
			if (r == 0){
				var temp = moveUp(posX, posY);
				if (temp != -1){
					swap(temp);
				}
			}
			if (r == 1){
				var temp = moveDown(posX, posY);
				if (temp != -1){
					swap(temp);
				}
			}
			if (r == 2){
				var temp = moveLeft(posX, posY);
				if (temp != -1){
					swap(temp);
				}
			}
			if (r == 3)
			{
				var temp = moveRight(posX, posY);
				if (temp != -1){
					swap(temp);
				}
			}
		}
	};
};

function swap(pos){
	var temp = place[pos].style.top;
	place[pos].style.top = posY;
	posY = temp;
	temp = place[pos].style.left;
	place[pos].style.left = posX;
	posX = temp;
};

function moveLeft(x, y){
	var xx = parseInt(x);
	var yy = parseInt(y);

	if (xx > 0){
		for (var l = 0; l < place.length; l++){
			if (parseInt(place[l].style.left) + 100 == xx && parseInt(place[l].style.top) == yy){
				return l;
			} 
		}
	}else{
		return -1;
	}
}

function moveRight(x, y){
	var xx = parseInt(x);
	var yy = parseInt(y);
	if (xx < 300){
		for (var r =0; r < place.length; r++){
			if (parseInt(place[r].style.left) - 100 == xx && parseInt(place[r].style.top) == yy){
				return r;
			}
		}
	}else{
		return -1;
	} 
};

function moveUp(x, y){
	var xx = parseInt(x);
	var yy = parseInt(y);
	if (yy > 0){
		for (var u = 0; u < place.length; u++){
			if (parseInt(place[u].style.top) + 100 == yy && parseInt(place[u].style.left) == xx){
				return u;
			}
		}; 
	}else{
		return -1;
	};
};

function moveDown(x, y){
	var xx = parseInt(x);
	var yy = parseInt(y);
	if (yy < 300){
		for (var d = 0; d < place.length; d++){
			if (parseInt(place[d].style.top) - 100 == yy && parseInt(place[d].style.left) == xx){
				return d;
			};
		};
	}else{
		return -1;
	};
};

function moveCheck(pos){
	if (moveLeft(posX, posY) == (pos-1)){
		return true;
	}

	if (moveDown(posX, posY) == (pos-1)){
		return true;
	}

	if (moveUp(posX, posY) == (pos-1)){
		return true;
	}

	if (moveRight(posX, posY) == (pos-1)){
		return true;
	}
};

function finished(){
	var fin = true;
	for (var c = 0; c < place.length; c++){
		var y = parseInt(place[c].style.top);
		var x = parseInt(place[c].style.left);
		if (x != (c%4*100) || y != parseInt(c/4)*100){
			fin = false;
			break;
		}
	}
	return fin;
};

function winner(){
	var delay = 100;
	var winner = document.getElementById('body');
	winner.image = winner.jpg;
	f.style.display="none";
	for(k = 1;k < delay; k++) // creates delay between blinks
		var dummy = 0;
	winner.style.display="block";
};
