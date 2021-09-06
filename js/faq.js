
var bars=document.getElementById("bar");
function openNav() {
  console.log(bars);
  bars.classList.toggle("open");
}
function closeNav() {
  bars.classList.toggle("open");
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/*var q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10;
q1=document.getElementById("q1");
q2=document.getElementById("q2");
q3=document.getElementById("q3");
q4=document.getElementById("q4");
q5=document.getElementById("q5");
q6=document.getElementById("q6");
q7=document.getElementById("q7");
q8=document.getElementById("q8");
q9=document.getElementById("q9");
q10=document.getElementById("q10");
a1=document.getElementById("a1");
a2=document.getElementById("a2");
a3=document.getElementById("a3");
a4=document.getElementById("a4");
a5=document.getElementById("a5");
a6=document.getElementById("a6");
a7=document.getElementById("a7");
a8=document.getElementById("a8");
a9=document.getElementById("a9");
a10=document.getElementById("a10");
q1.onclick=function(){
a1.style.display="block";
a1.style.backgroundColor="#ddd";
//a1.classList.toggle("displayf");
a1.style.fontWeight="500";
a1.style.fontSize="15px";
q1.style.fontSize="20px";
};
q2.onclick=function(){
a2.classList.toggle('faqdisplay');
q2.style.fontSize="20px";
};
q3.onclick=function(){
a3.classList.toggle('faqdisplay');
q3.style.fontSize="20px";
};
q4.onclick=function(){
a4.classList.toggle('faqdisplay');
q4.style.fontSize="20px";
};
q5.onclick=function(){
a5.classList.toggle('faqdisplay');
q5.style.fontSize="20px";
};
q6.onclick=function(){
a6.classList.toggle('faqdisplay');
q6.style.fontSize="20px";
};
q7.onclick=function(){
a7.classList.toggle('faqdisplay');
q7.style.fontSize="20px";
};
q8.onclick=function(){
a8.classList.toggle('faqdisplay');
q8.style.fontSize="20px";
};
q9.onclick=function(){
a9.classList.toggle('faqdisplay');
q9.style.fontSize="20px";
};
q10.onclick=function(){
a10.classList.toggle('faqdisplay');
q10.style.fontSize="20px";
};*/


var button1,button2,button3,button4;
button1=document.getElementById("but1");
button2=document.getElementById("but2");
button3=document.getElementById("but3");
button4=document.getElementById("but4");
var division=document.getElementById("answer");
button1.onclick=function(){
division.innerHTML="";
division.innerHTML+="<br><h1>Who are your typical clients?</h1>";
division.innerHTML+="<p>Our clientele come from all walks of life with one common thread: they want to make their home a sanctuary, experience the benefits of interior design, and achieve an environment that is healing and peaceful. Their homes come in every size from condos to mansions, but they all have that same-shared goal.<br> Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.</p>";
}
button2.onclick=function(){
division.innerHTML="";
division.innerHTML+="<br><h1>Do you offer free consultations?</h1>";
division.innerHTML+="<p>As much as we wish every service could be complimentary (free mani/pedi anyone?!) we have to charge a fee for initial consultations due to the amount of time and energy put into the site visit and proposals we put forth. Even if you don't continue to work with us after the consultation, most clients have thanked us regardless. The ideas presented during our initial consultation save you in terms of your time going forward, and help you by avoiding costly mistakes had you gone without seeking advice from a professional.<br> Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables.</p>";
}
button3.onclick=function(){
division.innerHTML="";
division.innerHTML+="<br><h1>How long does it take?</h1>";
division.innerHTML+="<p>Each project is different from a simple Feng Shui consultation to a whole house renovation so obviously the time it takes varies. We can give you an estimated completion time when you begin your project and adjust along the way as circumstances dictate. If you have an event or deadline, we address that at the very beginning.<br>Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications.</p>";
}

button4.onclick=function(){
division.innerHTML="";
division.innerHTML+="<br><h1>Do you have a particular style?</h1>";
division.innerHTML+="<p>Our style is about making your space functional, healthy and comfortable to suit your lifestyle whether casual or formal, we design rooms that reflect your individual style and are as low maintenance as possible. But, we love to design spaces infused with color and encourage all of our clients to add color into their lives as it uplifts our mood.<br>Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate integrated processes through technically sound intellectual capital.</p>";
}