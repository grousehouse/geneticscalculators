function openCalculator(e,t){for(var n,l=document.getElementsByClassName("tabcontent"),a=0;a<l.length;a++)l[a].style.display="none";for(n=document.getElementsByClassName("tablinks"),a=0;a<n.length;a++)n[a].className=n[a].className.replace(" active","");document.getElementById(t).style.display="block",e.currentTarget.className+=" active"}

function swapName1(){ 
  var sel = document.getElementById("base1select")
  var text= sel.options[sel.selectedIndex].text;
  document.getElementById("base1name").innerHTML = text;
}

function swapImage1(){
  var image = document.getElementById("base1image");
  var dropd = document.getElementById("base1select");
  image.src = dropd.value;
}

function swapGenetics1() {
  var sel = document.getElementById("base1select")
  var name= sel.options[sel.selectedIndex].text;
  if (name === 'Acanthite' ) {
    var genetics = "Monochrome Medium II";
  } else if (name === "Almond") {
    var genetics = "Muted Light II"
  }
  document.getElementById("base1genetics").innerHTML = genetics;
}

function swapName2(){ 
  var sel = document.getElementById("base2select")
  var text= sel.options[sel.selectedIndex].text;
  document.getElementById("base2name").innerHTML = text;
}

function swapImage2(){
  var image = document.getElementById("base2image");
  var dropd = document.getElementById("base2select");
  image.src = dropd.value;
}

function swapGenetics2() {
  var sel = document.getElementById("base2select")
  var name= sel.options[sel.selectedIndex].text;
  if (name === 'Acanthite' ) {
    var genetics = "Monochrome Medium II"
  }
  document.getElementById("base2genetics").innerHTML = genetics;
}