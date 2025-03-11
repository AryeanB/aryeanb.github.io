const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
canvas.width=1150;
canvas.height=500;

var lineW=9;
ctx.lineWidth=lineW;
let prevX=null;
let prevY=null;
let draw=false;


const high=document.getElementsByClassName("high")[0];
const adtxt=document.getElementsByClassName("adtxt")[0];
const sve=document.getElementsByClassName("sve")[0];

const ersr=document.getElementsByClassName("ersr")[0];
const clre=document.getElementsByClassName("clre")[0];
high.style.background="red";
ersr.style.background="red";
high.addEventListener("click",function(){
	if(high.style.background==="red"){
		high.style.background="green";
	}else{
		high.style.background="red";
	}
});




adtxt.addEventListener("click",function(){
	adtxt.style.background="green"
	var a=prompt("Enter text to be inserted");
	ctx.lineWidth=lineW;
	ctx.font=`${document.getElementById('ageInputId').value * 4}px Arial`;
	console.log(a);
	window.addEventListener("mousemove",(e)=>{
	if(prevX===null||prevY===null||!draw){
		prevX=e.offsetX;
		prevY=e.offsetY+25;
		return}

	else if(adtxt.style.background==="green"){
		ctx.fillStyle=conColor.value;
		ctx.fillText(a,prevX,prevY);
		adtxt.style.background="red"
	}
})
});


	




sve.addEventListener("click",function(){
	let data=canvas.toDataURL("image/png");
	let a=document.createElement("a");
	a.href=data;
	a.download="sketch.png";
	a.click();
});


clre.addEventListener("click",function(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});


var bgcolor1=document.querySelector(".bgcolor1");
var bgcolor2=document.querySelector(".bgcolor2");
function setGradient(){
	canvas.style.background="linear-gradient(to right, "
	+bgcolor1.value
	+", "
	+bgcolor2.value
	+")";
}
bgcolor1.addEventListener("input",setGradient);
bgcolor2.addEventListener("input",setGradient);

const conColor=document.querySelector(".conColor");
function setConColor(){
	ctx.strokeStyle=conColor.value
}
conColor.addEventListener("input",setConColor);




window.addEventListener("mousedown",(e) => draw=true);
window.addEventListener("mouseup",(e) => draw=false);

document.getElementById("ageInputId").oninput=function(){
	draw=null;
	lineW=document.getElementById("ageInputId").value;
	document.getElementById("ageOutputId").innerHTML=lineW;
	ctx.lineWidth=lineW;
	
}	

window.addEventListener("mousemove",(e)=>{
	if(prevX===null||prevY===null||!draw){
		prevX=e.offsetX;
		prevY=e.offsetY+25;
		return}

	
	
	else if(high.style.background==="red" && ersr.style.background==="red"){

		ctx.globalAlpha=1;
		const currentX=e.offsetX;
		const currentY=e.offsetY+25;

		

		ctx.beginPath();
		ctx.moveTo(prevX,prevY);
		ctx.lineTo(currentX,currentY)
		ctx.stroke();
		prevX=currentX;
		prevY=currentY;

	}
	else if(high.style.background==="green" && ersr.style.background==="red"){

		let currentX=e.offsetX;
		let currentY=e.offsetY+25;
		ctx.globalAlpha=0.3;


		ctx.beginPath();
		ctx.moveTo(prevX,prevY);
		ctx.lineTo(currentX,currentY)
		ctx.stroke();

		prevX=currentX;
		prevY=currentY;
	}
	else if(ersr.style.background==="green"){
		ctx.globalAlpha=1;
		let currentX=e.offsetX;
		let currentY=e.offsetY+25;

		ctx.beginPath();
		ctx.moveTo(prevX,prevY);
		ctx.clearRect(currentX,currentY,10,10);
		ctx.stroke();

		prevX=currentX;
		prevY=currentY;
	}
})






ersr.addEventListener("click",function(){
	if(ersr.style.background==="red"){
		ersr.style.background="green";
	}else{
		ersr.style.background="red";
	}
});





	



