const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var lineW=3;
ctx.lineWidth=lineW;
let prevX=null;
let prevY=null;
let draw=false;

document.getElementById("ageInputId").oninput=function(){
	draw=null;
	lineW=document.getElementById("ageInputId").value;
	document.getElementById("ageOutputId").innerHTML=lineW;
	ctx.lineWidth=lineW;
	
}


const high=document.getElementsByClassName("high")[0];
const adtxt=document.getElementsByClassName("adtxt")[0];
const sve=document.getElementsByClassName("sve")[0];
const shre=document.getElementsByClassName("shre")[0]; 
const ersr=document.getElementsByClassName("ersr")[0];
const clre=document.getElementsByClassName("clre")[0];
high.style.background="red";
high.addEventListener("click",function(){
	if(high.style.background==="red"){
		high.style.background="green";
	}else{
		high.style.background="red";
	}
});
adtxt.addEventListener("click",function(){
	var a=prompt("Enter The Text To Be Inserted")
	canvas.appendChild(document.createTextNode(a));
	

});
sve.addEventListener("click",function(){
	let data=canvas.toDataURL("image/png");
	let a=document.createElement("a");
	a.href=data;
	a.download="sketch.png";
	a.click();
});
shre.addEventListener("click",function(){
	
});
ersr.addEventListener("click",function(){
	console.log("clicks")
});
clre.addEventListener("click",function(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});
const drop=document.getElementsByClassName("dropdown-toggle")[0];
var drop2=document.getElementsByClassName("dropdown-toggle")[0];
drop.addEventListener("mouseenter",function(){
	drop2.click()
})


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





window.addEventListener("mousemove",(e)=>{
	if(prevX===null||prevY===null||!draw){
		prevX=e.clientX;
		prevY=e.clientY;
		return
	}
	else if(high.style.background==="red"){
		ctx.globalAlpha=1;
		let currentX=e.clientX;
		let currentY=e.clientY;

		ctx.beginPath();
		ctx.moveTo(prevX,prevY);
		ctx.lineTo(currentX,currentY)
		ctx.stroke();

		prevX=currentX;
		prevY=currentY;
	}
	else if(high.style.background==="green"){

		let currentX=e.clientX;
		let currentY=e.clientY;
		ctx.globalAlpha=0.3;


		ctx.beginPath();
		ctx.moveTo(prevX,prevY);
		ctx.lineTo(currentX,currentY,10,20)
		ctx.stroke();

		prevX=currentX;
		prevY=currentY;
	}
})


