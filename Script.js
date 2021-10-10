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
  if (name === 'Glaucous' || name === 'Honeydew' ) {
    var genetics = "Cool Light I";
  } else if (name === 'Lavender' || name === 'Pale' || name === 'Sky' ) {
    var genetics = "Cool Light II";
  } else if (name === 'Opal' ) {
    var genetics = "Cool Light III";
  } else if (name === 'Blue' || name === 'Khaki' ) {
    var genetics = "Cool Medium I";
  } else if (name === 'Diorite' || name === 'Galena' || name === 'Maltese') {
    var genetics = "Cool Medium II";
  } else if (name === 'Grulla' ) {
    var genetics = "Cool Medium III";
  } else if (name === 'Marengo' || name === 'Skarn' ) {
    var genetics = "Cool Dark I";
  } else if (name === 'Denim' || name === 'Lilac' || name === 'Nocturne') {
    var genetics = "Cool Dark II";
  } else if (name === 'Serpentine' ) {
    var genetics = "Cool Dark III";
  } else if (name === 'Apricot' || name === 'Beige' || name === 'Cream Lighter' || name === 'Shell' ) {
    var genetics = "Muted Light I";
  } else if (name === 'Almond' || name === 'Buff' || name === 'Feldspar' || name === 'Isabel' || name === 'Peach' ) {
    var genetics = "Muted Light II";
  } else if (name === 'Teardrop' || name === 'Zircon' ) {
    var genetics = "Muted Light III";
  } else if (name === 'Cream' || name === 'Cream Darker' || name === 'Honey' || name === 'Willow' ) {
    var genetics = "Muted Medium I";
  } else if (name === 'Antler' || name === 'Blonde' || name === 'Sandy' || name === 'Tuff' || name === 'Vanilla' ) {
    var genetics = "Muted Medium II";
  } else if (name === 'Lily' || name === 'Pearl' ) {
    var genetics = "Muted Medium III";
  } else if (name === 'Caramel' || name === 'Chestnut' || name === 'Chocolate' || name === 'Dark Brown' ) {
    var genetics = "Muted Dark I";
  } else if (name === 'Cocoa' || name === 'Ebony' || name === 'Oroide' || name === 'Pecan' || name === 'Sepia' ) {
    var genetics = "Muted Dark II";
  } else if (name === 'Seal' || name === 'Bronze' ) {
    var genetics = "Muted Dark III";
  } else if (name === 'Goldenrod' || name === 'Gold Lighter' || name === 'Magnolia' || name === 'Tumbleweed' ) {
    var genetics = "Warm Light I";
  } else if (name === 'Arkose' || name === 'Calcite' || name === 'Ducat' || name === 'Jacinthe' || name === 'Yellow' ) {
    var genetics = "Warm Light II";
  } else if (name === 'Piasa' || name === 'Tombac' ) {
    var genetics = "Warm Light III";
  } else if (name === 'Brass' || name === 'Gold' || name === 'Gold Darker' || name === 'Red' ) {
    var genetics = "Warm Medium I";
  } else if (name === 'Doubloon' || name === 'Rust' || name === 'Saffron' || name === 'Sulphur' || name === 'Tawny' ) {
    var genetics = "Warm Medium II";
  } else if (name === 'Fox' || name === 'Mojave' || name === 'Wulfenite' ) {
    var genetics = "Warm Medium III";
  } else if (name === 'Amber' || name === 'Brown' || name === 'Henna' || name === 'Liver' ) {
    var genetics = "Warm Dark I";
  } else if (name === 'Auburn' || name === 'Dinar' || name === 'Dravite' || name === 'Russet' || name === 'Sarder' ) {
    var genetics = "Warm Dark II";
  } else if (name === 'Pyrope' || name === 'Realgar' ) {
    var genetics = "Warm Dark III";
  } else if (name === 'Dust' || name === 'Quartz' || name === 'Snow' || name === 'White' ) {
    var genetics = "Monochrome Light I";
  } else if (name === 'Melchior' || name === 'Nepheline' || name === 'Rime' || name === 'Siqoq' || name === 'Titanium' ) {
    var genetics = "Monochrome Light II";
  } else if (name === 'Argent' || name === 'Chromium' ) {
    var genetics = "Monochrome Light III";
  } else if (name === 'Ashen' || name === 'Birch' || name === 'Gray Lighter' || name === 'Howlite' ) {
    var genetics = "Monochrome Medium I";
  } else if (name === 'Acanthite' || name === 'Chert' || name === 'Silver' || name === 'Steele' || name === 'Sterling' ) {
    var genetics = "Monochrome Medium II";
  } else if (name === 'Flint' || name === 'Striped Flint' ) {
    var genetics = "Monochrome Medium III";
  } else if (name === 'Black' || name === 'Gray' || name === 'Gray Darker' || name === 'Jet' ) {
    var genetics = "Monochrome Dark I";
  } else if (name === 'Biotite' || name === 'Obsidian' || name === 'Onyx' || name === 'Pewter' || name === 'Sphalerite' ) {
    var genetics = "Monochrome Dark II";
  } else if (name === 'Iridium' || name === 'Slate' ) {
    var genetics = "Monochrome Dark III";
  } else if (name === 'Selene' ) {
    var genetics = "Special Light *";
  } else if (name === 'Luna' || name === 'Moonlight' ) {
    var genetics = "Special Medium *";
  } else if (name === 'Losna' ) {
    var genetics = "Special Dark *";
    
  } else {
  var genetics = "undefined";
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
  if (name === 'Glaucous' || name === 'Honeydew' ) {
    var genetics = "Cool Light I";
  } else if (name === 'Lavender' || name === 'Pale' || name === 'Sky' ) {
    var genetics = "Cool Light II";
  } else if (name === 'Opal' ) {
    var genetics = "Cool Light III";
  } else if (name === 'Blue' || name === 'Khaki' ) {
    var genetics = "Cool Medium I";
  } else if (name === 'Diorite' || name === 'Galena' || name === 'Maltese') {
    var genetics = "Cool Medium II";
  } else if (name === 'Grulla' ) {
    var genetics = "Cool Medium III";
  } else if (name === 'Marengo' || name === 'Skarn' ) {
    var genetics = "Cool Dark I";
  } else if (name === 'Denim' || name === 'Lilac' || name === 'Nocturne') {
    var genetics = "Cool Dark II";
  } else if (name === 'Serpentine' ) {
    var genetics = "Cool Dark III";
  } else if (name === 'Apricot' || name === 'Beige' || name === 'Cream Lighter' || name === 'Shell' ) {
    var genetics = "Muted Light I";
  } else if (name === 'Almond' || name === 'Buff' || name === 'Feldspar' || name === 'Isabel' || name === 'Peach' ) {
    var genetics = "Muted Light II";
  } else if (name === 'Teardrop' || name === 'Zircon' ) {
    var genetics = "Muted Light III";
  } else if (name === 'Cream' || name === 'Cream Darker' || name === 'Honey' || name === 'Willow' ) {
    var genetics = "Muted Medium I";
  } else if (name === 'Antler' || name === 'Blonde' || name === 'Sandy' || name === 'Tuff' || name === 'Vanilla' ) {
    var genetics = "Muted Medium II";
  } else if (name === 'Lily' || name === 'Pearl' ) {
    var genetics = "Muted Medium III";
  } else if (name === 'Caramel' || name === 'Chestnut' || name === 'Chocolate' || name === 'Dark Brown' ) {
    var genetics = "Muted Dark I";
  } else if (name === 'Cocoa' || name === 'Ebony' || name === 'Oroide' || name === 'Pecan' || name === 'Sepia' ) {
    var genetics = "Muted Dark II";
  } else if (name === 'Seal' || name === 'Bronze' ) {
    var genetics = "Muted Dark III";
  } else if (name === 'Goldenrod' || name === 'Gold Lighter' || name === 'Magnolia' || name === 'Tumbleweed' ) {
    var genetics = "Warm Light I";
  } else if (name === 'Arkose' || name === 'Calcite' || name === 'Ducat' || name === 'Jacinthe' || name === 'Yellow' ) {
    var genetics = "Warm Light II";
  } else if (name === 'Piasa' || name === 'Tombac' ) {
    var genetics = "Warm Light III";
  } else if (name === 'Brass' || name === 'Gold' || name === 'Gold Darker' || name === 'Red' ) {
    var genetics = "Warm Medium I";
  } else if (name === 'Doubloon' || name === 'Rust' || name === 'Saffron' || name === 'Sulphur' || name === 'Tawny' ) {
    var genetics = "Warm Medium II";
  } else if (name === 'Fox' || name === 'Mojave' || name === 'Wulfenite' ) {
    var genetics = "Warm Medium III";
  } else if (name === 'Amber' || name === 'Brown' || name === 'Henna' || name === 'Liver' ) {
    var genetics = "Warm Dark I";
  } else if (name === 'Auburn' || name === 'Dinar' || name === 'Dravite' || name === 'Russet' || name === 'Sarder' ) {
    var genetics = "Warm Dark II";
  } else if (name === 'Pyrope' || name === 'Realgar' ) {
    var genetics = "Warm Dark III";
  } else if (name === 'Dust' || name === 'Quartz' || name === 'Snow' || name === 'White' ) {
    var genetics = "Monochrome Light I";
  } else if (name === 'Melchior' || name === 'Nepheline' || name === 'Rime' || name === 'Siqoq' || name === 'Titanium' ) {
    var genetics = "Monochrome Light II";
  } else if (name === 'Argent' || name === 'Chromium' ) {
    var genetics = "Monochrome Light III";
  } else if (name === 'Ashen' || name === 'Birch' || name === 'Gray Lighter' || name === 'Howlite' ) {
    var genetics = "Monochrome Medium I";
  } else if (name === 'Acanthite' || name === 'Chert' || name === 'Silver' || name === 'Steele' || name === 'Sterling' ) {
    var genetics = "Monochrome Medium II";
  } else if (name === 'Flint' || name === 'Striped Flint' ) {
    var genetics = "Monochrome Medium III";
  } else if (name === 'Black' || name === 'Gray' || name === 'Gray Darker' || name === 'Jet' ) {
    var genetics = "Monochrome Dark I";
  } else if (name === 'Biotite' || name === 'Obsidian' || name === 'Onyx' || name === 'Pewter' || name === 'Sphalerite' ) {
    var genetics = "Monochrome Dark II";
  } else if (name === 'Iridium' || name === 'Slate' ) {
    var genetics = "Monochrome Dark III";
  } else if (name === 'Selene' ) {
    var genetics = "Special Light *";
  } else if (name === 'Luna' || name === 'Moonlight' ) {
    var genetics = "Special Medium *";
  } else if (name === 'Losna' ) {
    var genetics = "Special Dark *";
    
  } else {
  var genetics = "undefined";
  }
  document.getElementById("base2genetics").innerHTML = genetics;
}


function getResults() {

 var sel = document.getElementById("base1select")
  var name= sel.options[sel.selectedIndex].text;
  if (name === 'Acanthite' ) {
    var genetics1 = "Monochrome Medium II"
  } else if (name === 'Almond' ) {
    var genetics1 = "Muted Light II";
  } else {
  var genetics1 = "undefined";
  }
  
  var sel2 = document.getElementById("base2select")
  var name2= sel2.options[sel2.selectedIndex].text;
  if (name2 === 'Glaucous' || 'Honeydew' ) {
    var genetics2 = "Cool Light I"
  } else if (name2 === 'Lavender' || 'Pale' || 'Sky' ) {
    var genetics2 = "Cool Light II";
  } else if (name2 === 'Opal' ) {
    var genetics2 = "Cool Light III";
  } else {
  var genetics2 = "undefined";
  }
  
if (genetics1 !== "undefined" && genetics2 !== "undefined") {
  if (genetics1 === "undefined" || genetics2 === "undefined") {
    document.getElementById ("Invalid").style.display = 'block';
  }
  if (genetics1 === "Monochrome Medium II" && genetics2 === "Muted Light II") {
    document.getElementById ("CoolLightI").style.display = 'block';
    document.getElementById ("Monochrome").style.display = 'none';
    document.getElementById ("Invalid").style.display = 'none';
  } else if (genetics1 === "Muted Light II" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("Monochrome").style.display = 'block';
    document.getElementById ("CoolLightI").style.display = 'none';
    document.getElementById ("Invalid").style.display = 'none';
  }
}
}