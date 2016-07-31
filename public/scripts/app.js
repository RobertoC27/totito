

var turno=1;

var canvas=document.getElementById("viewport");

var s1= document.getElementsByClassName("s1");
var s2= document.getElementsByClassName("s2");
var s3= document.getElementsByClassName("s3");
var s4= document.getElementsByClassName("s4");
var s5= document.getElementsByClassName("s5");
var s6= document.getElementsByClassName("s6");
var s7= document.getElementsByClassName("s7");
var s8= document.getElementsByClassName("s8");
var s9= document.getElementsByClassName("s9");
var squares= document.getElementsByClassName("squares");

s1[0].addEventListener("click",function() {

	if (s1[0].innerHTML=== "") {
    if (turno===1) {
    	s1[0].innerHTML="X";
    	turno=2;
    }else if (turno===2) {
    	s1[0].innerHTML="O";
    	turno=1;
    }
  }
});

s2[0].addEventListener("click",function() {

	if (s2[0].innerHTML=== "") {
    if (turno===1) {
    	s2[0].innerHTML="X";
    	turno=2;
    }else if (turno===2) {
    	s2[0].innerHTML="O";
    	turno=1;
    }
  }
});

s3[0].addEventListener("click",function() {

	if (s3[0].innerHTML=== "") {
    if (turno===1) {
    	s3[0].innerHTML="X";
    	turno=2;
    }else if (turno===2) {
    	s3[0].innerHTML="O";
    	turno=1;
    }
  }
});

s4[0].addEventListener("click",function() {

	if (s4[0].innerHTML=== "") {
    if (turno===1) {
    	s4[0].innerHTML="X";
    	turno=2;
    }else if (turno===2) {
    	s4[0].innerHTML="O";
    	turno=1;
    }
  }
});

s5[0].addEventListener("click",function() {

	if (s5[0].innerHTML=== "") {
    if (turno===1) {
    	s5[0].innerHTML="X";
    	turno=2;
    }else if (turno===2) {
    	s5[0].innerHTML="O";
    	turno=1;
    }
  }
});

s6[0].addEventListener("click",function() {

	if (s6[0].innerHTML=== "") {
    if (turno===1) {
    	s6[0].innerHTML="X";
    	turno=2;
    }else if (turno===2) {
    	s6[0].innerHTML="O";
    	turno=1;
    }
  }
});

s7[0].addEventListener("click",function() {

	if (s7[0].innerHTML=== "") {
    if (turno===1) {
    	s7[0].innerHTML="X";
    	turno=2;
    }else if (turno===2) {
    	s7[0].innerHTML="O";
    	turno=1;
    }
  }
});

s8[0].addEventListener("click",function() {

	if (s8[0].innerHTML=== "") {
    if (turno===1) {
    	s8[0].innerHTML="X";
    	turno=2;
    }else if (turno===2) {
    	s8[0].innerHTML="O";
    	turno=1;
    }
  }
});

s9[0].addEventListener("click",function() {

	if (s9[0].innerHTML=== "") {
    if (turno===1) {
    	s9[0].innerHTML="X";
    	turno=2;
    }else if (turno===2) {
    	s9[0].innerHTML="O";
    	turno=1;
    }
  }
});