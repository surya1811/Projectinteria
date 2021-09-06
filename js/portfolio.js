var bars=document.getElementById("bar");
function openNav() {
  console.log(bars);
  bars.classList.toggle("open");
}
function closeNav() {
  bars.classList.toggle("open");
}






filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("portcolumn");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "portshow");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "portshow");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var pobtnContainer = document.getElementById("portfoliomyBtnContainer");
var btns = pobtnContainer.getElementsByClassName("portbtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


var portslideIndex = 1;
portshowSlides(portslideIndex);

function portplusSlides(n) {
  portshowSlides(portslideIndex += n);
}

function portcurrentSlide(n) {
  portshowSlides(portslideIndex = n);
}

function portshowSlides(n) {
  var i;
  var portslides = document.getElementsByClassName("port-mySlides");
  var portdots = document.getElementsByClassName("port-dot");
  if (n > portslides.length) {portslideIndex = 1}
  if (n < 1) {portslideIndex = portslides.length}
  for (i = 0; i < portslides.length; i++) {
      portslides[i].style.display = "none";
  }
  for (i = 0; i < portdots.length; i++) {
      portdots[i].className = portdots[i].className.replace(" port-active", "");
  }
  portslides[portslideIndex-1].style.display = "block";
  portdots[portslideIndex-1].className += " port-active";
}