var bars=document.getElementById("bar");
function openNav() {
  console.log(bars);
  bars.classList.toggle("open");
}
function closeNav() {
  bars.classList.toggle("open");
}




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("client-mySlides");
  var dots = document.getElementsByClassName("client-dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" client-active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " client-active";
}

var comment=document.getElementById("client-comments2");
var updates=document.getElementById("client-comments1");
var clibutton=document.getElementsByClassName("client-button1");
var clibuttoncancel=document.getElementsByClassName("client-button3");

updates.innerHTML="";
function clientclick(){
//debugger;
comment.style.display="block";
//comment.classList.toggle("com-display");
};
function send(){
var newinput=document.getElementById("clicom");
var rev=document.getElementById("rev");
if(newinput.value==""){
rev.innerHTML="You didn't enter any review";
}
else{
updates.innerHTML+="<p>"+newinput.value+"</p>"+"<br>";
document.forms.clientform.reset();
//comment.classList.toggle("com-display");
comment.style.display="none";
}
}

function cancels(){
document.forms.clientform.reset();
//comment.classList.toggle("com-display");
comment.style.display="none";
}