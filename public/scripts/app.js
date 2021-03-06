

var turno=1;

var canvas=document.getElementById("viewport");
var bt=document.getElementById("btn");
var win=document.getElementById("ganador");
var squares;
var board=["","","","","","","","",""];
var mark="";
var cl;
function listen(element){
	
	if (squares[element].innerHTML=== "") {
	    if (turno===3) {
				return 1;
			}
	    if (turno===1) {
	    	mark="X";
	    	turno=2;
	    }else if (turno===2) {
	    	mark="O";
	    	turno=1;
	    }
	    
    squares[element].innerHTML=mark;
    board[element]=mark;
    checkWinner();
	}
	
}



bt.addEventListener("click",init);


function checkWinner(){


	if (board[0] !== "") {
		//revisar 1ra fila, diagonal, 1ra columna
		if (board[1]===board[0]) {
			if (board[2]===board[0]) {
				highlightWinner(0,1,2);
				return true;
			}
		}
		if (board[4]===board[0]) {
			if (board[8]===board[0]) {
				highlightWinner(0,4,8);
				return true;
			}
		}
		if (board[3]===board[0]) {
			if (board[6]===board[0]) {
				highlightWinner(0,3,6);
				return true;
			}
		}

	}
//revisar 2da columna
	if (board[1] !== "") {
		if (board[4]===board[1]) {
			if (board[7]===board[1]) {
				highlightWinner(1,4,7);
				return true;
			}
		}

	}
//revisar diagonal invertida y 3ra columna
	if (board[2] !== "") {
		if (board[4]===board[2]) {
			if (board[6]===board[2]) {
				highlightWinner(2,4,6);
				return true;
			}
		}
		if (board[5]===board[2]) {
			if (board[8]===board[2]) {
				highlightWinner(2,5,8);
				return true;
			}
		}
		
	}
//revisar 2da fila
	if (board[3] !== "") {
		if (board[4]===board[3]) {
			if (board[5]===board[3]) {
				highlightWinner(3,4,5);
				return true;
			}
		}
	}
//revisar 3ra fila
	if (board[6] !== "") {
		if (board[7]===board[6]) {
			if (board[8]===board[6]) {
				highlightWinner(6,7,8);
				return true;
			}
		}
	}
//revisar si hay empate
	for (var i = squares.length - 1; i >= 0; i--) {
		if (board[i]==="") {
			break;
		}
	}
	if (i === -1) {
		alert("¡Empate!");
		init();
	}
}

function highlightWinner(e1,e2,e3){
	squares[e1].style.color="green";
	squares[e2].style.color="green";
	squares[e3].style.color="green";
	
	win.innerHTML=("¡Gana el jugador de las "+mark+"'s !");
	turno=3;
	bt.style.visibility="visible";
	win.style.visibility="visible";


}

function init(){
	turno=1;
	var html="<div class='square s1'></div>";
	html+="<div class='square s2'></div>";
	html+="<div class='square s3'></div>";
	html+="<div class='square s4'></div>";
	html+="<div class='square s5'></div>";
	html+="<div class='square s6'></div>";
	html+="<div class='square s7'></div>";
	html+="<div class='square s8'></div>";
	html+="<div class='square s9'></div>";
	canvas.innerHTML=html;

	squares= document.getElementsByClassName("square");


	squares[0].addEventListener("click",function(){ listen(0);} );
	squares[1].addEventListener("click",function(){ listen(1);} );
	squares[2].addEventListener("click",function(){ listen(2);} );
	squares[3].addEventListener("click",function(){ listen(3);} );
	squares[4].addEventListener("click",function(){ listen(4);} );
	squares[5].addEventListener("click",function(){ listen(5);} );
	squares[6].addEventListener("click",function(){ listen(6);} );
	squares[7].addEventListener("click",function(){ listen(7);} );
	squares[8].addEventListener("click",function(){ listen(8);} );


	for (var i = squares.length - 1; i >= 0; i--) {
		board[i]="";
		squares[i].innerHTML="";
		squares[i].removeAttribute("style");
	}
	
	bt.style.visibility="hidden";
	win.style.visibility="hidden";
}
init();