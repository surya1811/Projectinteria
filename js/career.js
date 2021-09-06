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