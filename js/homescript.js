
var myindex=0;
carousel();
function carousel(){
var i;
var x=document.getElementsByClassName("myslides");
for(i=0;i<x.length;i++){
x[i].style.display="none";
}
myindex++;
if(myindex>x.length){
myindex=1;
}
x[myindex-1].style.display="block";
setTimeout(carousel,3000);
}
var bars=document.getElementById("bar");
function openNav() {
  console.log(bars);
  bars.classList.toggle("open");
}
function closeNav() {
  bars.classList.toggle("open");
}

/*$('#spans').click(function(){
$('#bar').slideToggle(1000,"swing");//linear
});*/

/*var home=document.getElementById("home");
var about=document.getElementById("aboutus");
var process=document.getElementById("process");
var faq=document.getElementById("faqs");
var clien=document.getElementById("clients");
about.style.display="none";
function home1(){
home.style.display="block";
about.style.display="none";
process.style.display="none";
clien.style.display="none";
faq.style.display="none";
}
function about1(){
home.style.display="none";
about.style.display="block";
process.style.display="none";
clien.style.display="none";
faq.style.display="none";
}

function process1(){
home.style.display="none";
about.style.display="none";
process.style.display="block";
clien.style.display="none";
faq.style.display="none";
}

function faqs1(){
home.style.display="none";
about.style.display="none";
process.style.display="none";
faq.style.display="block";
clien.style.display="none";
}

function client1(){
home.style.display="none";
about.style.display="none";
process.style.display="none";
faq.style.display="none";
clien.style.display="block";
}*/
