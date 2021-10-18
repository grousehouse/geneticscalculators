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

 var sel1 = document.getElementById("base1select")
  var name1= sel1.options[sel1.selectedIndex].text;
  if (name1 === 'Glaucous' || name === 'Honeydew' ) {
    var genetics1 = "Cool Light I";
  } else if (name1 === 'Lavender' || name1 === 'Pale' || name1 === 'Sky' ) {
    var genetics1 = "Cool Light II";
  } else if (name1 === 'Opal' ) {
    var genetics1 = "Cool Light III";
  } else if (name1 === 'Blue' || name1 === 'Khaki' ) {
    var genetics1 = "Cool Medium I";
  } else if (name1 === 'Diorite' || name1 === 'Galena' || name1 === 'Maltese') {
    var genetics1 = "Cool Medium II";
  } else if (name1 === 'Grulla' ) {
    var genetics1 = "Cool Medium III";
  } else if (name1 === 'Marengo' || name1 === 'Skarn' ) {
    var genetics1 = "Cool Dark I";
  } else if (name1 === 'Denim' || name1 === 'Lilac' || name1 === 'Nocturne') {
    var genetics1 = "Cool Dark II";
  } else if (name1 === 'Serpentine' ) {
    var genetics1 = "Cool Dark III";
  } else if (name1 === 'Apricot' || name1 === 'Beige' || name1 === 'Cream Lighter' || name1 === 'Shell' ) {
    var genetics1 = "Muted Light I";
  } else if (name1 === 'Almond' || name1 === 'Buff' || name1 === 'Feldspar' || name1 === 'Isabel' || name === 'Peach' ) {
    var genetics1 = "Muted Light II";
  } else if (name1 === 'Teardrop' || name1 === 'Zircon' ) {
    var genetics1 = "Muted Light III";
  } else if (name1 === 'Cream' || name1 === 'Cream Darker' || name1 === 'Honey' || name1 === 'Willow' ) {
    var genetics1 = "Muted Medium I";
  } else if (name1 === 'Antler' || name1 === 'Blonde' || name1 === 'Sandy' || name1 === 'Tuff' || name1 === 'Vanilla' ) {
    var genetics1 = "Muted Medium II";
  } else if (name1 === 'Lily' || name1 === 'Pearl' ) {
    var genetics1 = "Muted Medium III";
  } else if (name1 === 'Caramel' || name1 === 'Chestnut' || name1 === 'Chocolate' || name1 === 'Dark Brown' ) {
    var genetics1 = "Muted Dark I";
  } else if (name1 === 'Cocoa' || name1 === 'Ebony' || name1 === 'Oroide' || name1 === 'Pecan' || name1 === 'Sepia' ) {
    var genetics1 = "Muted Dark II";
  } else if (name1 === 'Seal' || name1 === 'Bronze' ) {
    var genetics1 = "Muted Dark III";
  } else if (name1 === 'Goldenrod' || name1 === 'Gold Lighter' || name1 === 'Magnolia' || name1 === 'Tumbleweed' ) {
    var genetics1 = "Warm Light I";
  } else if (name1 === 'Arkose' || name1 === 'Calcite' || name1 === 'Ducat' || name1 === 'Jacinthe' || name1 === 'Yellow' ) {
    var genetics1 = "Warm Light II";
  } else if (name1 === 'Piasa' || name1 === 'Tombac' ) {
    var genetics1 = "Warm Light III";
  } else if (name1 === 'Brass' || name1 === 'Gold' || name1 === 'Gold Darker' || name1 === 'Red' ) {
    var genetics1 = "Warm Medium I";
  } else if (name1 === 'Doubloon' || name1 === 'Rust' || name1 === 'Saffron' || name1 === 'Sulphur' || name1 === 'Tawny' ) {
    var genetics1 = "Warm Medium II";
  } else if (name1 === 'Fox' || name1 === 'Mojave' || name1 === 'Wulfenite' ) {
    var genetics1 = "Warm Medium III";
  } else if (name1 === 'Amber' || name1 === 'Brown' || name1 === 'Henna' || name1 === 'Liver' ) {
    var genetics1 = "Warm Dark I";
  } else if (name1 === 'Auburn' || name1 === 'Dinar' || name1 === 'Dravite' || name1 === 'Russet' || name1 === 'Sarder' ) {
    var genetics1 = "Warm Dark II";
  } else if (name1 === 'Pyrope' || name1 === 'Realgar' ) {
    var genetics1 = "Warm Dark III";
  } else if (name1 === 'Dust' || name1 === 'Quartz' || name1 === 'Snow' || name1 === 'White' ) {
    var genetics1 = "Monochrome Light I";
  } else if (name1 === 'Melchior' || name1 === 'Nepheline' || name1 === 'Rime' || name1 === 'Siqoq' || name1 === 'Titanium' ) {
    var genetics1 = "Monochrome Light II";
  } else if (name1 === 'Argent' || name1 === 'Chromium' ) {
    var genetics1 = "Monochrome Light III";
  } else if (name1 === 'Ashen' || name1 === 'Birch' || name1 === 'Gray Lighter' || name1 === 'Howlite' ) {
    var genetics1 = "Monochrome Medium I";
  } else if (name1 === 'Acanthite' || name1 === 'Chert' || name1 === 'Silver' || name1 === 'Steele' || name1 === 'Sterling' ) {
    var genetics1 = "Monochrome Medium II";
  } else if (name1 === 'Flint' || name1 === 'Striped Flint' ) {
    var genetics1 = "Monochrome Medium III";
  } else if (name1 === 'Black' || name1 === 'Gray' || name1 === 'Gray Darker' || name1 === 'Jet' ) {
    var genetics1 = "Monochrome Dark I";
  } else if (name1 === 'Biotite' || name1 === 'Obsidian' || name1 === 'Onyx' || name1 === 'Pewter' || name1 === 'Sphalerite' ) {
    var genetics1 = "Monochrome Dark II";
  } else if (name1 === 'Iridium' || name1 === 'Slate' ) {
    var genetics1 = "Monochrome Dark III";
  } else if (name1 === 'Selene' ) {
    var genetics1 = "Special Light *";
  } else if (name1 === 'Luna' || name1 === 'Moonlight' ) {
    var genetics1 = "Special Medium *";
  } else if (name1 === 'Losna' ) {
    var genetics1 = "Special Dark *";
    
  } else {
  var genetics1 = "undefined";
  }

  
var sel = document.getElementById("base2select")
  var name2 = sel.options[sel.selectedIndex].text;
  if (name2 === 'Glaucous' || name2 === 'Honeydew' ) {
    var genetics2 = "Cool Light I";
  } else if (name2 === 'Lavender' || name2 === 'Pale' || name2 === 'Sky' ) {
    var genetics2 = "Cool Light II";
  } else if (name2 === 'Opal' ) {
    var genetics2 = "Cool Light III";
  } else if (name2 === 'Blue' || name2 === 'Khaki' ) {
    var genetics2 = "Cool Medium I";
  } else if (name2 === 'Diorite' || name2 === 'Galena' || name2 === 'Maltese') {
    var genetics2 = "Cool Medium II";
  } else if (name2 === 'Grulla' ) {
    var genetics2 = "Cool Medium III";
  } else if (name2 === 'Marengo' || name2 === 'Skarn' ) {
    var genetics2 = "Cool Dark I";
  } else if (name2 === 'Denim' || name2 === 'Lilac' || name2 === 'Nocturne') {
    var genetics2 = "Cool Dark II";
  } else if (name2 === 'Serpentine' ) {
    var genetics2 = "Cool Dark III";
  } else if (name2 === 'Apricot' || name2 === 'Beige' || name2 === 'Cream Lighter' || name2 === 'Shell' ) {
    var genetics2 = "Muted Light I";
  } else if (name2 === 'Almond' || name2 === 'Buff' || name2 === 'Feldspar' || name2 === 'Isabel' || name2 === 'Peach' ) {
    var genetics2 = "Muted Light II";
  } else if (name2 === 'Teardrop' || name2 === 'Zircon' ) {
    var genetics2 = "Muted Light III";
  } else if (name2 === 'Cream' || name2 === 'Cream Darker' || name2 === 'Honey' || name2 === 'Willow' ) {
    var genetics2 = "Muted Medium I";
  } else if (name2 === 'Antler' || name2 === 'Blonde' || name2 === 'Sandy' || name2 === 'Tuff' || name2 === 'Vanilla' ) {
    var genetics2 = "Muted Medium II";
  } else if (name2 === 'Lily' || name2 === 'Pearl' ) {
    var genetics2 = "Muted Medium III";
  } else if (name2 === 'Caramel' || name2 === 'Chestnut' || name2 === 'Chocolate' || name2 === 'Dark Brown' ) {
    var genetics2 = "Muted Dark I";
  } else if (name2 === 'Cocoa' || name2 === 'Ebony' || name2 === 'Oroide' || name2 === 'Pecan' || name2 === 'Sepia' ) {
    var genetics2 = "Muted Dark II";
  } else if (name2 === 'Seal' || name2 === 'Bronze' ) {
    var genetics2 = "Muted Dark III";
  } else if (name2 === 'Goldenrod' || name2 === 'Gold Lighter' || name2 === 'Magnolia' || name2 === 'Tumbleweed' ) {
    var genetics2 = "Warm Light I";
  } else if (name2 === 'Arkose' || name2 === 'Calcite' || name2 === 'Ducat' || name2 === 'Jacinthe' || name2 === 'Yellow' ) {
    var genetics2 = "Warm Light II";
  } else if (name2 === 'Piasa' || name2 === 'Tombac' ) {
    var genetics2 = "Warm Light III";
  } else if (name2 === 'Brass' || name2 === 'Gold' || name2 === 'Gold Darker' || name2 === 'Red' ) {
    var genetics2 = "Warm Medium I";
  } else if (name2 === 'Doubloon' || name2 === 'Rust' || name2 === 'Saffron' || name2 === 'Sulphur' || name2 === 'Tawny' ) {
    var genetics2 = "Warm Medium II";
  } else if (name2 === 'Fox' || name2 === 'Mojave' || name2 === 'Wulfenite' ) {
    var genetics2 = "Warm Medium III";
  } else if (name2 === 'Amber' || name2 === 'Brown' || name2 === 'Henna' || name2 === 'Liver' ) {
    var genetics2 = "Warm Dark I";
  } else if (name2 === 'Auburn' || name2 === 'Dinar' || name2 === 'Dravite' || name2 === 'Russet' || name2 === 'Sarder' ) {
    var genetics2 = "Warm Dark II";
  } else if (name2 === 'Pyrope' || name2 === 'Realgar' ) {
    var genetics2 = "Warm Dark III";
  } else if (name2 === 'Dust' || name2 === 'Quartz' || name2 === 'Snow' || name2 === 'White' ) {
    var genetics2 = "Monochrome Light I";
  } else if (name2 === 'Melchior' || name2 === 'Nepheline' || name2 === 'Rime' || name2 === 'Siqoq' || name2 === 'Titanium' ) {
    var genetics2 = "Monochrome Light II";
  } else if (name2 === 'Argent' || name2 === 'Chromium' ) {
    var genetics2 = "Monochrome Light III";
  } else if (name2 === 'Ashen' || name2 === 'Birch' || name2 === 'Gray Lighter' || name2 === 'Howlite' ) {
    var genetics2 = "Monochrome Medium I";
  } else if (name2 === 'Acanthite' || name2 === 'Chert' || name2 === 'Silver' || name2 === 'Steele' || name2 === 'Sterling' ) {
    var genetics2 = "Monochrome Medium II";
  } else if (name2 === 'Flint' || name2 === 'Striped Flint' ) {
    var genetics2 = "Monochrome Medium III";
  } else if (name2 === 'Black' || name2 === 'Gray' || name2 === 'Gray Darker' || name2 === 'Jet' ) {
    var genetics2 = "Monochrome Dark I";
  } else if (name2 === 'Biotite' || name2 === 'Obsidian' || name2 === 'Onyx' || name2 === 'Pewter' || name2 === 'Sphalerite' ) {
    var genetics2 = "Monochrome Dark II";
  } else if (name2 === 'Iridium' || name2 === 'Slate' ) {
    var genetics2 = "Monochrome Dark III";
  } else if (name2 === 'Selene' ) {
    var genetics2 = "Special Light *";
  } else if (name2 === 'Luna' || name2 === 'Moonlight' ) {
    var genetics2 = "Special Medium *";
  } else if (name2 === 'Losna' ) {
    var genetics2 = "Special Dark *";
    
  } else {
  var genetics2 = "undefined";
  }
  
if (genetics1 !== "undefined" && genetics2 !== "undefined") {
  <!-- Undefined -->
var divsToHide = document.getElementsByClassName('resultConditional');
    for(var i = 0; i < divsToHide.length; i++) {
      divsToHide[i].style.display = 'none';
    }
  if (genetics1 === "undefined" || genetics2 === "undefined") {
    document.getElementById ("Invalid").style.display = 'block';
  }

  
  <!-- Cool Light I -->

  else if (genetics1 === "Cool Light I" && genetics2 === "Cool Light I") {
    document.getElementById ("CLI").style.display = 'block';
  } 
  
  <!-- Cool Light I + Cool Light II --> 

  else if (genetics1 === "Cool Light I" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLII").style.display = 'block';
  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICLII").style.display = 'block';
  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLII").style.display = 'block';
    
  }

  <!-- All Cool Light --> 

  else if (genetics1 === "Cool Light I" && genetics2 === "Cool Light III") {
    document.getElementById ("CL").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Cool Light I") {
    document.getElementById ("CL").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Cool Light III") {
    document.getElementById ("CL").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Cool Light II") {
    document.getElementById ("CL").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Cool Light III") {
    document.getElementById ("CL").style.display = 'block';
    
  }

  <!-- Cool Light I + Cool Medium I --> 

  else if (genetics1 === "Cool Light I" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLICMI").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Medium I" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICMI").style.display = 'block';
    
  }

  <!-- Cool Light I + Cool Light II + Cool Medium I + Cool Medium II --> 

  else if (genetics1 === "Cool Light I" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLICLIICMICMII").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Medium II" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICLIICMICMII").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLICLIICMICMII").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Medium I" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIICMICMII").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLICLIICMICMII").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Medium II" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIICMICMII").style.display = 'block';
    
  }

  <!-- Cool Light + Cool Medium --> 
 
  else if (genetics1 === "Cool Medium II" && genetics2 === "Cool Light III") {
    document.getElementById ("CLCM").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Medium I" && genetics2 === "Cool Light III") {
    document.getElementById ("CLCM").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Cool Medium III") {
    document.getElementById ("CLCM").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Cool Light I") {
    document.getElementById ("CLCM").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Cool Light II") {
    document.getElementById ("CLCM").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Cool Medium III") {
    document.getElementById ("CLCM").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Cool Medium III") {
    document.getElementById ("CLCM").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLCM").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLCM").style.display = 'block';
    
  }

  <!-- Cool Light I + Cool Medium I + Cool Dark I --> 

  else if (genetics1 === "Cool Light I" && genetics2 === "Cool Dark I") {
    document.getElementById ("CLICMICDI").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Dark I" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICMICDI").style.display = 'block';
    
  }

  <!-- Cool Light I + Cool Light II + Cool Medium I + Cool Medium II + Cool Dark I + Cool Dark II --> 

  else if (genetics1 === "Cool Medium II" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLICLIICMICMIICDICDII").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Medium II" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLICLIICMICMIICDICDII").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Cool Dark II") {
    document.getElementById ("CLICLIICMICMIICDICDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICLIICMICMIICDICDII").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Cool Dark I") {
    document.getElementById ("CLICLIICMICMIICDICDII").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Dark I" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIICMICMIICDICDII").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Cool Dark II") {
    document.getElementById ("CLICLIICMICMIICDICDII").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIICMICMIICDICDII").style.display = 'block';
    
  }

  <!-- All Cool --> 

  else if (genetics1 === "Cool Medium II" && genetics2 === "Cool Medium III") {
    document.getElementById ("Cool").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Cool Dark III") {
    document.getElementById ("Cool").style.display = 'block';
    
  }

 else if (genetics1 === "Cool Medium I" && genetics2 === "Cool Medium III") {
    document.getElementById ("Cool").style.display = 'block';
    
  }

 else if (genetics1 === "Cool Medium I" && genetics2 === "Cool Medium I") {
    document.getElementById ("Cool").style.display = 'block';
    
  }

 else if (genetics1 === "Cool Medium III" && genetics2 === "Cool Medium I") {
    document.getElementById ("Cool").style.display = 'block';
    
  }

 else if (genetics1 === "Cool Medium III" && genetics2 === "Cool Medium II") {
    document.getElementById ("Cool").style.display = 'block';
    
  }

 else if (genetics1 === "Cool Medium III" && genetics2 === "Cool Medium III") {
    document.getElementById ("Cool").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Cool Dark III") {
    document.getElementById ("Cool").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Cool Dark I") {
    document.getElementById ("Cool").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Cool Dark II") {
    document.getElementById ("Cool").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Cool Dark III") {
    document.getElementById ("Cool").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && genetics2 === "Cool Light III") {
    document.getElementById ("Cool").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Cool Light III") {
    document.getElementById ("Cool").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Cool Light I") {
    document.getElementById ("Cool").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Cool Light II") {
    document.getElementById ("Cool").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Cool Light III") {
    document.getElementById ("Cool").style.display = 'block';
    
  }

  <!-- Cool Light I + Muted Light I + Monochrome Light I --> 

  else if (genetics1 === "Cool Light I" && genetics2 === "Muted Light I") {
    document.getElementById ("CLIMuLIMoLI").style.display = 'block';
    
  }

  else if (genetics1 === "Muted Light I" && genetics2 === "Cool Light I") {
    document.getElementById ("CLIMuLIMoLI").style.display = 'block';
    
  }

  <!-- Cool Light I + Cool Light II + Muted Light I + Muted Light II + Monochrome Light I + Monochrome Light II --> 

  else if (genetics1 === "Cool Light I" && genetics2 === "Muted Light II") {
    document.getElementById ("CLICLIIMuLIMuLIIMoLIMoLII").style.display = 'block';
    
  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICLIIMuLIMuLIIMoLIMoLII").style.display = 'block';
    
  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Muted Light I") {
    document.getElementById ("CLICLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light I" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Muted Light II") {
    document.getElementById ("CLICLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  <!-- Cool Light + Muted Light + Monochrome Light --> 

  else if (genetics1 === "Cool Light I" && genetics2 === "Muted Light III") {
    document.getElementById ("CLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Cool Light I") {
    document.getElementById ("CLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Muted Light III") {
    document.getElementById ("CLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Cool Light II") {
    document.getElementById ("CLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Muted Light I") {
    document.getElementById ("CLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Muted Light I" && genetics2 === "Cool Light III") {
    document.getElementById ("CLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Muted Light II") {
    document.getElementById ("CLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Cool Light III") {
    document.getElementById ("CLMuLMoL").style.display = 'block';

  }

    else if (genetics1 === "Cool Light III" && genetics2 === "Muted Light III") {
    document.getElementById ("CLMuLMoL").style.display = 'block';

  }

    else if (genetics1 === "Muted Light III" && genetics2 === "Cool Light III") {
    document.getElementById ("CLMuLMoL").style.display = 'block';

  }

  <!-- Cool Light I + Cool Medium I + Muted Light I + Muted Medium I + Monochrome Light I + Monochrome Medium I --> 

  else if (genetics1 === "Cool Medium I" && genetics2 === "Muted Light I") {
    document.getElementById ("CLICMIMuLIMuMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Muted Medium I") {
    document.getElementById ("CLICMIMuLIMuMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICMIMuLIMuMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Muted Light I" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLICMIMuLIMuMIMoLIMoMI").style.display = 'block';

  }

  <!-- Cool Light I + Cool Light II + Cool Medium I + Cool Medium II + Muted Light I + Muted Light II + Muted Medium I + Muted Medium II + Monochrome Light I + Monochrome Light II + Monochrome Medium I + Monochrome Medium II --> 

  else if (genetics1 === "Cool Medium II" && genetics2 === "Muted Light II") {
    document.getElementById ("CLICLIICMICMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium II" && genetics2 === "Muted Light I") {
    document.getElementById ("CLICLIICMICMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium I" && genetics2 === "Muted Light II") {
    document.getElementById ("CLICLIICMICMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }
 
  else if (genetics1 === "Cool Light I" && genetics2 === "Muted Medium II") {
    document.getElementById ("CLICLIICMICMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICLIICMICMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Muted Medium I") {
    document.getElementById ("CLICLIICMICMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIICMICMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Muted Medium II") {
    document.getElementById ("CLICLIICMICMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIICMICMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light I" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLICLIICMICMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLICLIICMICMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium II" && genetics2 === "Muted Light II") {
    document.getElementById ("CLICLIICMICMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium I" && genetics2 === "Muted Light II") {
    document.getElementById ("CLICLIICMICMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLICLIICMICMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  <!-- Cool Light + Cool Medium + Muted Light + Muted Medium + Monochrome Light + Monochrome Medium --> 

 else if (genetics1 === "Cool Medium III" && genetics2 === "Muted Light I") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

 else if (genetics1 === "Cool Medium III" && genetics2 === "Muted Light II") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

 else if (genetics1 === "Cool Medium III" && genetics2 === "Muted Light III") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }
 else if (genetics1 === "Cool Medium II" && genetics2 === "Muted Light III") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

 else if (genetics1 === "Cool Medium I" && genetics2 === "Muted Light III") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Muted Medium III") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Cool Light I") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Muted Medium III") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Cool Light II") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Muted Medium I") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Cool Light III") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Muted Medium II") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Cool Light III") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

    else if (genetics1 === "Cool Light III" && genetics2 === "Muted Medium III") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

    else if (genetics1 === "Muted Light I" && genetics2 === "Cool Medium III") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Cool Medium III") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Cool Medium III") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Cool Light III") {
    document.getElementById ("CLCMMuLMuMMoLMoM").style.display = 'block';

  }

  <!-- Cool Light I + Cool Medium I + Cool Dark I + Muted Light I + Muted Medium I + Muted Dark I + Monochrome Light I + Monochrome Medium I + Monochrome Dark I --> 

 else if (genetics1 === "Cool Medium I" && genetics2 === "Muted Medium I") {
    document.getElementById ("CLICMICDIMuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Muted Dark I") {
    document.getElementById ("CLICMICDIMuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICMICDIMuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && genetics2 === "Muted Light I") {
    document.getElementById ("CLICMICDIMuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Muted Light I" && genetics2 === "Cool Dark I") {
    document.getElementById ("CLICMICDIMuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLICMICDIMuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICMICDIMuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  <!-- Cool Light I + Cool Light II + Cool Medium I + Cool Medium II + Cool Dark I + Cool Dark II + Muted Light I + Muted Light II + Muted Medium I + Muted Medium II + Muted Dark I + Muted Dark II + Monochrome Light I + Monochrome Light II + Monochrome Medium I + Monochrome Medium II + Monochrome Dark I + Monochrome Dark II --> 

  else if (genetics1 === "Cool Medium II" && genetics2 === "Muted Medium II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium II" && genetics2 === "Muted Medium I") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium I" && genetics2 === "Muted Medium II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Muted Dark II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }
 
  else if (genetics1 === "Cool Light II" && genetics2 === "Muted Dark I") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Muted Dark II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';
 
  }

  else if (genetics1 === "Cool Dark I" && genetics2 === "Muted Light II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Muted Light I") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Muted Light II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  } 

  else if (genetics1 === "Muted Light I" && genetics2 === "Cool Dark II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  } 

  else if (genetics1 === "Muted Light II" && genetics2 === "Cool Dark I") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && genetics2 === "Muted Light II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Cool Dark II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Muted Light II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

 else if (genetics1 === "Muted Medium I" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

 else if (genetics1 === "Muted Medium II" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

 else if (genetics1 === "Muted Medium II" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

 else if (genetics1 === "Muted Dark I" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

 else if (genetics1 === "Muted Dark II" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

 else if (genetics1 === "Muted Dark II" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

 
  <!-- All Cool + All Muted + All Monochrome --> 

  else if (genetics1 === "Cool Medium III" && genetics2 === "Muted Medium I") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Muted Medium II") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }
  else if (genetics1 === "Cool Medium III" && genetics2 === "Muted Medium III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium II" && genetics2 === "Muted Medium III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium I" && genetics2 === "Muted Medium III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && genetics2 === "Muted Light III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Muted Dark III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Cool Light I") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }
  
  else if (genetics1 === "Cool Light II" && genetics2 === "Muted Dark III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Cool Light II") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Muted Dark I") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Cool Light III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Muted Dark II") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Cool Light III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Cool Light III" && genetics2 === "Muted Dark III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Cool Dark II" && genetics2 === "Muted Light III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Cool Dark III" && genetics2 === "Muted Light I") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Cool Dark III" && genetics2 === "Muted Light II") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Cool Dark III" && genetics2 === "Muted Light III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Light I" && genetics2 === "Cool Dark III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Light II" && genetics2 === "Cool Dark III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Light III" && genetics2 === "Cool Dark I") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Light III" && genetics2 === "Cool Dark II") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Light III" && genetics2 === "Cool Dark III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Medium I" && genetics2 === "Cool Medium III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Medium II" && genetics2 === "Cool Medium III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Medium III" && genetics2 === "Cool Medium I") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Medium III" && genetics2 === "Cool Medium II") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Medium III" && genetics2 === "Cool Medium III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Dark I" && genetics2 === "Cool Light III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Dark II" && genetics2 === "Cool Light III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Dark III" && genetics2 === "Cool Light I") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Dark III" && genetics2 === "Cool Light II") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Dark III" && genetics2 === "Cool Light III") {
    document.getElementById ("CoolMutedMonochrome").style.display = 'block';

  }
 
  <!-- Cool Light I + Warm Light I + Muted Light I + Monochrome Light I --> 

  else if (genetics1 === "Cool Light I" && genetics2 === "Warm Light I") {
    document.getElementById ("CLIWLIMuLIMoLI").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Cool Light I") {
    document.getElementById ("CLIWLIMuLIMoLI").style.display = 'block';

  }

  else if (genetics1 === "Muted Light I" && genetics2 === "Muted Light I") {
    document.getElementById ("CLIWLIMuLIMoLI").style.display = 'block';

  }
 
  <!-- Cool Light I + Cool Light II + Warm Light I + Warm Light II + Muted Light I + Muted Light II + Monochrome Light I + Monochrome Light II --> 

  else if (genetics1 === "Cool Light I" && genetics2 === "Warm Light II") {
    document.getElementById ("CLICLIIWLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICLIIWLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';
 
  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Warm Light I") {
    document.getElementById ("CLICLIIWLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIIWLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Warm Light II") {
    document.getElementById ("CLICLIIWLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIIWLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light I" && genetics2 === "Muted Light II") {
    document.getElementById ("CLICLIIWLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Muted Light I") {
    document.getElementById ("CLICLIIWLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Muted Light II") {
    document.getElementById ("CLICLIIWLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }
 
  <!-- All Light --> 

  else if (genetics1 === "Cool Light I" && genetics2 === "Warm Light III") {
    document.getElementById ("Light").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Cool Light I") {
    document.getElementById ("Light").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Warm Light III") {
    document.getElementById ("Light").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Cool Light II") {
    document.getElementById ("Light").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Cool Light III") {
    document.getElementById ("Light").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Warm Light I") {
    document.getElementById ("Light").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Cool Light III") {
    document.getElementById ("Light").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Warm Light II") {
    document.getElementById ("Light").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Cool Light III") {
    document.getElementById ("Light").style.display = 'block';

  }
 
  else if (genetics1 === "Cool Light III" && genetics2 === "Warm Light III") {
    document.getElementById ("Light").style.display = 'block';

  }

  else if (genetics1 === "Muted Light I" && genetics2 === "Muted Light III") {
    document.getElementById ("Light").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Muted Light III") {
    document.getElementById ("Light").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Muted Light I") {
    document.getElementById ("Light").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Muted Light II") {
    document.getElementById ("Light").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Muted Light III") {
    document.getElementById ("Light").style.display = 'block';

  }
 
  <!-- Cool Light I + Cool Medium I + Warm Light I + Warm Medium I + Muted Light I + Muted Medium I + Monochrome Light I + Monochrome Medium I --> 

  else if (genetics1 === "Cool Medium I" && genetics2 === "Warm Light I") {
    document.getElementById ("CLICMIWLIWMIMuLIMuMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Warm Medium I") {
    document.getElementById ("CLICMIWLIWMIMuLIMuMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICMIWLIWMIMuLIMuMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Muted Light I" && genetics2 === "Muted Medium I") {
    document.getElementById ("CLICMIWLIWMIMuLIMuMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Muted Light I") {
    document.getElementById ("CLICMIWLIWMIMuLIMuMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLICMIWLIWMIMuLIMuMIMoLIMoMI").style.display = 'block';

  }
 
  <!-- Cool Light I + Cool Light II + Cool Medium I + Cool Medium II + Warm Light I + Warm Light II + Warm Medium I + Warm Medium II + Muted Light I + Muted Light II + Muted Medium I + Muted Medium II + Monochrome Light I + Monochrome Light II + Monochrome Medium I + Monochrome Medium II --> 

   else if (genetics1 === "Cool Medium II" && genetics2 === "Warm Light I") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

   else if (genetics1 === "Cool Medium II" && genetics2 === "Warm Light II") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

   else if (genetics1 === "Cool Medium I" && genetics2 === "Warm Light II") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Warm Medium II") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }
  
  else if (genetics1 === "Cool Light II" && genetics2 === "Warm Medium I") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }
  
  else if (genetics1 === "Cool Light II" && genetics2 === "Warm Medium II") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  } 

  else if (genetics1 === "Muted Light I" && genetics2 === "Muted Medium II") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Muted Light II") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Muted Medium I") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Muted Medium II") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Muted Light II") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Muted Light I") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Muted Light II") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLICLIICMICMIIWLIWLIIWMIWMIIMuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }


  <!-- Cool Light + Cool Medium + Warm Light + Warm Medium + Muted Light + Muted Medium + Monochrome Light + Monochrome Medium --> 

   else if (genetics1 === "Cool Medium II" && genetics2 === "Warm Light III") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';
  }

   else if (genetics1 === "Cool Medium III" && genetics2 === "Warm Light I") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';
  }

   else if (genetics1 === "Cool Medium III" && genetics2 === "Warm Light II") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';
  }

   else if (genetics1 === "Cool Medium III" && genetics2 === "Warm Light III") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';
  }

   else if (genetics1 === "Cool Medium I" && genetics2 === "Warm Light III") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';
 
  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Warm Medium III") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Cool Light I") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }
  
  else if (genetics1 === "Cool Light II" && genetics2 === "Warm Medium III") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Cool Light II") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Cool Light III") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Warm Medium I") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Cool Light III") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Warm Medium II") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Cool Light III") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }
  
 else if (genetics1 === "Cool Light III" && genetics2 === "Warm Medium III") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }
 
 else if (genetics1 === "Muted Light I" && genetics2 === "Muted Medium III") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Muted Light I") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Muted Medium III") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Muted Medium I") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Muted Medium II") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Muted Medium III") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Muted Light III") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Muted Light III") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Muted Light I") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Muted Light II") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Muted Light III") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Cool Medium III") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Cool Medium III") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Cool Medium III") {
    document.getElementById ("CLCMWLWMMuLMuMMoLMoM").style.display = 'block';

  }
 
  <!-- Cool Light I + Cool Medium I + Cool Dark I + Warm Light I + Warm Medium I + Warm Dark I + Muted Light I + Muted Medium I + Muted Dark I + Monochrome Light I + Monochrome Medium I + Monochrome Dark I --> 

   else if (genetics1 === "Cool Medium I" && genetics2 === "Warm Medium I") {
    document.getElementById ("CLICMICDIWLIWMIWDIMuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Warm Dark I") {
    document.getElementById ("CLICMICDIWLIWMIWDIMuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICMICDIWLIWMIWDIMuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && genetics2 === "Warm Light I") {
    document.getElementById ("CLICMICDIWLIWMIWDIMuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Muted Light I" && genetics2 === "Muted Dark I") {
    document.getElementById ("CLICMICDIWLIWMIWDIMuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Muted Light I") {
    document.getElementById ("CLICMICDIWLIWMIWDIMuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Muted Medium I") {
    document.getElementById ("CLICMICDIWLIWMIWDIMuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Cool Dark I") {
    document.getElementById ("CLICMICDIWLIWMIWDIMuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLICMICDIWLIWMIWDIMuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }
 
  <!-- Cool Light I + Cool Light II + Cool Medium I + Cool Medium II + Cool Dark I + Cool Dark II + Warm Light I + Warm Light II + Warm Medium I + Warm Medium II + Warm Dark I + Warm Dark II + Muted Light I + Muted Light II + Muted Medium I + Muted Medium II + Muted Dark I + Muted Dark II + Monochrome Light I + Monochrome Light II + Monochrome Medium I + Monochrome Medium II + Monochrome Dark I + Monochrome Dark II --> 

   else if (genetics1 === "Cool Medium II" && genetics2 === "Warm Medium I") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

   else if (genetics1 === "Cool Medium II" && genetics2 === "Warm Medium II") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

   else if (genetics1 === "Cool Medium I" && genetics2 === "Warm Medium II") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Warm Dark II") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Warm Dark I") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Warm Dark II") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && genetics2 === "Warm Light II") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Warm Light I") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Warm Light II") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light I" && genetics2 === "Muted Dark II") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Muted Light I") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Muted Dark I") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Muted Dark II") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Muted Medium II") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Muted Medium I") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Muted Medium II") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Muted Light II") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Muted Light I") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Muted Light II") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Cool Dark II") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Cool Dark I") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Cool Dark II") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLICLIICMICMIICDICDIIWLIWLIIWMIWMIIWDIWDIIMuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

 
  <!-- All Cool + All Warm + All Muted + All Monochrome --> 

   else if (genetics1 === "Cool Medium II" && genetics2 === "Warm Medium III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

   else if (genetics1 === "Cool Medium III" && genetics2 === "Warm Medium I") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

   else if (genetics1 === "Cool Medium III" && genetics2 === "Warm Medium II") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

   else if (genetics1 === "Cool Medium III" && genetics2 === "Warm Medium III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

   else if (genetics1 === "Cool Medium I" && genetics2 === "Warm Medium III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Warm Dark III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Cool Light I") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Warm Dark III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Cool Light II") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Cool Light III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Warm Dark I") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Cool Light III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Warm Dark II") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Cool Light III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }
 
 else if (genetics1 === "Cool Light III" && genetics2 === "Warm Dark III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Cool Dark I" && genetics2 === "Warm Light III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Cool Dark II" && genetics2 === "Warm Light III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Cool Dark III" && genetics2 === "Warm Light I") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Cool Dark III" && genetics2 === "Warm Light II") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Cool Dark III" && genetics2 === "Warm Light III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Light I" && genetics2 === "Muted Dark III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Dark III" && genetics2 === "Muted Light I") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Light II" && genetics2 === "Muted Dark III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Light III" && genetics2 === "Muted Dark I") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Light III" && genetics2 === "Muted Dark II") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Light III" && genetics2 === "Muted Dark III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Medium I" && genetics2 === "Muted Medium III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  } 

 else if (genetics1 === "Muted Medium II" && genetics2 === "Muted Medium III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Medium III" && genetics2 === "Muted Medium I") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Medium III" && genetics2 === "Muted Medium II") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Medium III" && genetics2 === "Muted Medium III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Dark I" && genetics2 === "Muted Light III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Dark III" && genetics2 === "Muted Light I") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Dark III" && genetics2 === "Muted Light II") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Muted Dark III" && genetics2 === "Muted Light III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Warm Light I" && genetics2 === "Cool Dark III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Warm Light II" && genetics2 === "Cool Dark III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Warm Light III" && genetics2 === "Cool Dark I") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Warm Light III" && genetics2 === "Cool Dark II") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Warm Light III" && genetics2 === "Cool Dark III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Warm Medium I" && genetics2 === "Cool Medium III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Warm Medium II" && genetics2 === "Cool Medium III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Warm Medium III" && genetics2 === "Cool Medium III") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Warm Medium III" && genetics2 === "Cool Medium II") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Warm Medium III" && genetics2 === "Cool Medium I") {
    document.getElementById ("CoolWarmMutedMonochrome").style.display = 'block';

  }
 
  <!-- Cool Light I + Monochrome Light I --> 

  else if (genetics1 === "Cool Light I" && genetics2 === "Monochrome Light I") {
    document.getElementById ("CLIMoLI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Cool Light I") {
    document.getElementById ("CLIMoLI").style.display = 'block';

  }
 
  <!-- Cool Light I + Cool Light II + Monochrome Light I + Monochrome Light II --> 

  else if (genetics1 === "Cool Light I" && genetics2 === "Monochrome Light II") {
    document.getElementById ("CLICLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICLIIMoLIMoLII").style.display = 'block';

  }
  
  else if (genetics1 === "Cool Light II" && genetics2 === "Monochrome Light I") {
    document.getElementById ("CLICLIIMoLIMoLII").style.display = 'block';    
  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Monochrome Light II") {
    document.getElementById ("CLICLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIIMoLIMoLII").style.display = 'block';

  }
 
  <!-- Cool Light + Monochrome Light --> 

  else if (genetics1 === "Cool Light I" && genetics2 === "Monochrome Light III") {
    document.getElementById ("CLMoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Cool Light I") {
    document.getElementById ("CLMoL").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Monochrome Light III") {
    document.getElementById ("CLMoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Cool Light II") {
    document.getElementById ("CLMoL").style.display = 'block';
  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Cool Light III") {
    document.getElementById ("CLMoL").style.display = 'block';
  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Monochrome Light I") {
    document.getElementById ("CLMoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Cool Light III") {
    document.getElementById ("CLMoL").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Monochrome Light II") {
    document.getElementById ("CLMoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Cool Light III") {
    document.getElementById ("CLMoL").style.display = 'block';

  }

 else if (genetics1 === "Cool Light III" && genetics2 === "Monochrome Light III") {
    document.getElementById ("CLMoL").style.display = 'block';
  }
 
  <!-- Cool Light I + Cool Medium I + Monochrome Light I + Monochrome Medium I --> 

   else if (genetics1 === "Cool Medium I" && genetics2 === "Monochrome Light I") {
    document.getElementById ("CLICMIMoLIMoMI").style.display = 'block';
  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("CLICMIMoLIMoMI").style.display = 'block';
  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICMIMoLIMoMI").style.display = 'block';
  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLICMIMoLIMoMI").style.display = 'block';
  }
 
  <!-- Cool Light I + Cool Light II + Cool Medium I + Cool Medium II + Monochrome Light I + Monochrome Light II + Monochrome Medium I + Monochrome Medium II --> 

   else if (genetics1 === "Cool Medium II" && genetics2 === "Monochrome Light I") {
    document.getElementById ("CLICLIICMICMIIMoLIMoLIIMoMIMoMII").style.display = 'block';
  }
   
  else if (genetics1 === "Cool Medium II" && genetics2 === "Monochrome Light II") {
    document.getElementById ("CLICLIICMICMIIMoLIMoLIIMoMIMoMII").style.display = 'block';
  }

   else if (genetics1 === "Cool Medium I" && genetics2 === "Monochrome Light II") {
    document.getElementById ("CLICLIICMICMIIMoLIMoLIIMoMIMoMII").style.display = 'block';
  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("CLICLIICMICMIIMoLIMoLIIMoMIMoMII").style.display = 'block';
  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICLIICMICMIIMoLIMoLIIMoMIMoMII").style.display = 'block';
  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("CLICLIICMICMIIMoLIMoLIIMoMIMoMII").style.display = 'block';
  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIICMICMIIMoLIMoLIIMoMIMoMII").style.display = 'block';
  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("CLICLIICMICMIIMoLIMoLIIMoMIMoMII").style.display = 'block';
  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIICMICMIIMoLIMoLIIMoMIMoMII").style.display = 'block';
  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLICLIICMICMIIMoLIMoLIIMoMIMoMII").style.display = 'block';
  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLICLIICMICMIIMoLIMoLIIMoMIMoMII").style.display = 'block';
  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLICLIICMICMIIMoLIMoLIIMoMIMoMII").style.display = 'block';
  }
 
  <!-- Cool Light + Cool Medium + Monochrome Light + Monochrome Medium --> 

  else if (genetics1 === "Cool Medium II" && genetics2 === "Monochrome Light III") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Monochrome Light I") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Monochrome Light II") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Monochrome Light III") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';

  }

   else if (genetics1 === "Cool Medium I" && genetics2 === "Monochrome Light III") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';
  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';
  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Cool Light I") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';
  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';
  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Cool Light II") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';
  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Cool Light III") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';
  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';
  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Cool Light III") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';
  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';
  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Cool Light III") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';
  }

 else if (genetics1 === "Cool Light III" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';
  }

 else if (genetics1 === "Monochrome Light I" && genetics2 === "Cool Medium III") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';
  }

 else if (genetics1 === "Monochrome Light II" && genetics2 === "Cool Medium III") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';
  }

 else if (genetics1 === "Monochrome Light III" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';
  }

 else if (genetics1 === "Monochrome Light III" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';
  }

 else if (genetics1 === "Monochrome Light III" && genetics2 === "Cool Medium III") {
    document.getElementById ("CLCMMoLMoM").style.display = 'block';
  }
 
  <!-- Cool Light I + Cool Medium I + Cool Dark I + Monochrome Light I + Monochrome Medium I + Monochrome Dark I --> 

   else if (genetics1 === "Cool Medium I" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("CLICMICDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("CLICMICDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICMICDIMoLIMoMIMoDI").style.display = 'block';

  } 

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Cool Dark I") {
    document.getElementById ("CLICMICDIMoLIMoMIMoDI").style.display = 'block';

  } 

  else if (genetics1 === "Cool Dark I" && genetics2 === "Monochrome Light I") {
    document.getElementById ("CLICMICDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLICMICDIMoLIMoMIMoDI").style.display = 'block';

  }
 
  <!-- Cool Light I + Cool Light II + Cool Medium I + Cool Medium II + Cool Dark I + Cool Dark II + Monochrome Light I + Monochrome Light II + Monochrome Medium I + Monochrome Medium II + Monochrome Dark I + Monochrome Dark II --> 

  else if (genetics1 === "Cool Medium II" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("CLICLIICMICMIICDICDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium II" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

   else if (genetics1 === "Cool Medium I" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Cool Light I") {
    document.getElementById ("CLICLIICMICMIICDICDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("CLICLIICMICMIICDICDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Cool Light II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  } 

  else if (genetics1 === "Cool Dark I" && genetics2 === "Monochrome Light II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Monochrome Light I") {
    document.getElementById ("CLICLIICMICMIICDICDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Monochrome Light II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Cool Dark II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Cool Dark I") {
    document.getElementById ("CLICLIICMICMIICDICDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Cool Dark II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Cool Medium I") {
    document.getElementById ("CLICLIICMICMIICDICDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Cool Medium II") {
    document.getElementById ("CLICLIICMICMIICDICDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }
 
  <!-- All Cool + All Monochrome --> 

  else if (genetics1 === "Cool Medium II" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

   else if (genetics1 === "Cool Medium I" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Cool Light I" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Cool Light I") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Cool Light II") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Cool Light III") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Cool Light III") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Cool Light III") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Cool Light III" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Cool Dark I" && genetics2 === "Monochrome Light III") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Cool Dark II" && genetics2 === "Monochrome Light III") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Cool Dark III" && genetics2 === "Monochrome Light I") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Cool Dark III" && genetics2 === "Monochrome Light II") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Cool Dark III" && genetics2 === "Monochrome Light III") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Monochrome Light I" && genetics2 === "Cool Dark III") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Monochrome Light II" && genetics2 === "Cool Dark III") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Monochrome Light III" && genetics2 === "Cool Dark I") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Monochrome Light III" && genetics2 === "Cool Dark II") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Monochrome Light III" && genetics2 === "Cool Dark III") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Monochrome Medium I" && genetics2 === "Cool Medium III") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Monochrome Medium II" && genetics2 === "Cool Medium III") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Monochrome Medium III" && genetics2 === "Cool Medium I") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Monochrome Medium III" && genetics2 === "Cool Medium II") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

 else if (genetics1 === "Monochrome Medium III" && genetics2 === "Cool Medium III") {
    document.getElementById ("CoolMonochrome").style.display = 'block';

  }

  <!-- Cool Medium I + Cool Dark I --> 

  else if (genetics1 === "Cool Medium I" && genetics2 === "Cool Dark I") {
    document.getElementById ("CMICDI").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && genetics2 === "Cool Medium I") {
    document.getElementById ("CMICDI").style.display = 'block';

  }
 
  <!-- Cool Medium I + Cool Medium II + Cool Dark I + Cool Dark II --> 

  else if (genetics1 === "Cool Dark I" && genetics2 === "Cool Medium II") {
    document.getElementById ("CMICMIICDICDII").style.display = 'block';

  }


  else if (genetics1 === "Cool Medium II" && genetics2 === "Cool Dark I") {
    document.getElementById ("CMICMIICDICDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium II" && genetics2 === "Cool Dark II") {
    document.getElementById ("CMICMIICDICDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium I" && genetics2 === "Cool Dark II") {
    document.getElementById ("CMICMIICDICDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Cool Medium I") {
    document.getElementById ("CMICMIICDICDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Cool Medium II") {
    document.getElementById ("CMICMIICDICDII").style.display = 'block';

  }

  <!-- Cool Medium + Cool Dark --> 

  else if (genetics1 === "Cool Medium II" && genetics2 === "Cool Dark III") {
    document.getElementById ("CMCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Cool Dark I") {
    document.getElementById ("CMCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Cool Dark I") {
    document.getElementById ("CMCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Cool Dark I") {
    document.getElementById ("CMCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && genetics2 === "Cool Medium III") {
    document.getElementById ("CMCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium I" && genetics2 === "Cool Dark III") {
    document.getElementById ("CMCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Cool Medium III") {
    document.getElementById ("CMCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Cool Medium I") {
    document.getElementById ("CMCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Cool Medium II") {
    document.getElementById ("CMCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Cool Medium III") {
    document.getElementById ("CMCD").style.display = 'block';

  }

  <!-- Cool Medium I + Cool Dark I + Muted Medium I + Muted Dark I + Monochrome Medium I + Monochrome Dark I --> 

  else if (genetics1 === "Cool Medium I" && genetics2 === "Muted Dark I") {
    document.getElementById ("CMICDIMuMIMuDIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && genetics2 === "Muted Medium I") {
    document.getElementById ("CMICDIMuMIMuDIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Cool Dark I") {
    document.getElementById ("CMICDIMuMIMuDIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Cool Medium I") {
    document.getElementById ("CMICDIMuMIMuDIMoMIMoDI").style.display = 'block';

  }

  <!-- Cool Medium I + Cool Medium II + Cool Dark I + Cool Dark II + Muted Medium I + Muted Medium II + Muted Dark I + Muted Dark II + Monochrome Medium I + Monochrome Medium II + Monochrome Dark I + Monochrome Dark II --> 

  else if (genetics1 === "Cool Medium II" && genetics2 === "Muted Dark I") {
    document.getElementById ("CMICMIICDICDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium II" && genetics2 === "Muted Dark II") {
    document.getElementById ("CMICMIICDICDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium I" && genetics2 === "Muted Dark II") {
    document.getElementById ("CMICMIICDICDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && genetics2 === "Muted Medium II") {
    document.getElementById ("CMICMIICDICDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Muted Medium I") {
    document.getElementById ("CMICMIICDICDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Muted Medium II") {
    document.getElementById ("CMICMIICDICDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Cool Dark II") {
    document.getElementById ("CMICMIICDICDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Cool Dark I") {
    document.getElementById ("CMICMIICDICDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Cool Dark II") {
    document.getElementById ("CMICMIICDICDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Cool Medium II") {
    document.getElementById ("CMICMIICDICDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Cool Medium I") {
    document.getElementById ("CMICMIICDICDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Cool Medium II") {
    document.getElementById ("CMICMIICDICDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  <!-- Cool Medium + Cool Dark + Muted Medium + Muted Dark + Monochrome Medium + Monochrome Dark --> 

  else if (genetics1 === "Cool Medium II" && genetics2 === "Muted Dark III") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Muted Dark I") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Muted Dark II") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Muted Dark III") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium I" && genetics2 === "Muted Dark III") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && genetics2 === "Muted Medium III") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Muted Medium III") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Muted Medium I") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Muted Medium II") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Muted Medium III") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Cool Dark III") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Cool Dark III") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Cool Dark I") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Cool Dark II") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Cool Dark III") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Cool Medium III") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Cool Medium III") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Cool Medium I") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Cool Medium II") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Cool Medium III") {
    document.getElementById ("CMCDMuMMuDMoMMoD").style.display = 'block';

  }
   
  <!-- Cool Medium I + Cool Dark I + Warm Medium I + Warm Dark I + Muted Medium I + Muted Dark I + Monochrome Medium I + Monochrome Dark I --> 

  else if (genetics1 === "Cool Medium I" && genetics2 === "Warm Dark I") {
    document.getElementById ("CMICDIWMIWDIMuMIMuDIMoMIMoDI").style.display = 'block';

  }
  
  else if (genetics1 === "Cool Dark I" && genetics2 === "Warm Medium I") {
    document.getElementById ("CMICDIWMIWDIMuMIMuDIMoMIMoDI").style.display = 'block';

  }

 else if (genetics1 === "Muted Medium I" && genetics2 === "Muted Dark I") {
    document.getElementById ("CMICDIWMIWDIMuMIMuDIMoMIMoDI").style.display = 'block';

  }

 else if (genetics1 === "Muted Dark I" && genetics2 === "Muted Medium I") {
    document.getElementById ("CMICDIWMIWDIMuMIMuDIMoMIMoDI").style.display = 'block';

  }

 else if (genetics1 === "Warm Medium I" && genetics2 === "Cool Dark I") {
    document.getElementById ("CMICDIWMIWDIMuMIMuDIMoMIMoDI").style.display = 'block';

  }

 else if (genetics1 === "Warm Dark I" && genetics2 === "Cool Medium I") {
    document.getElementById ("CMICDIWMIWDIMuMIMuDIMoMIMoDI").style.display = 'block';

  }

   <!-- Cool Medium I + Cool Medium II + Cool Dark I + Cool Dark II + Warm Medium I + Warm Medium II + Warm Dark I + Warm Dark II + Muted Medium I + Muted Medium II + Muted Dark I + Muted Dark II + Monochrome Medium I + Monochrome Medium II + Monochrome Dark I + Monochrome Dark II --> 

  else if (genetics1 === "Cool Medium II" && genetics2 === "Warm Dark I") {
    document.getElementById ("CMICMIICDICDIIWMIWMIIWDIWDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium II" && genetics2 === "Warm Dark II") {
    document.getElementById ("CMICMIICDICDIIWMIWMIIWDIWDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium I" && genetics2 === "Warm Dark II") {
    document.getElementById ("CMICMIICDICDIIWMIWMIIWDIWDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  } 

  else if (genetics1 === "Cool Dark I" && genetics2 === "Warm Medium II") {
    document.getElementById ("CMICMIICDICDIIWMIWMIIWDIWDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }
 
  else if (genetics1 === "Cool Dark II" && genetics2 === "Warm Medium I") {
    document.getElementById ("CMICMIICDICDIIWMIWMIIWDIWDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Warm Medium II") {
    document.getElementById ("CMICMIICDICDIIWMIWMIIWDIWDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }
 
  else if (genetics1 === "Muted Medium I" && genetics2 === "Muted Dark II") {
    document.getElementById ("CMICMIICDICDIIWMIWMIIWDIWDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }
 
  else if (genetics1 === "Muted Medium II" && genetics2 === "Muted Dark I") {
    document.getElementById ("CMICMIICDICDIIWMIWMIIWDIWDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Muted Dark II") {
    document.getElementById ("CMICMIICDICDIIWMIWMIIWDIWDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Muted Medium II") {
    document.getElementById ("CMICMIICDICDIIWMIWMIIWDIWDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Muted Medium I") {
    document.getElementById ("CMICMIICDICDIIWMIWMIIWDIWDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Muted Medium II") {
    document.getElementById ("CMICMIICDICDIIWMIWMIIWDIWDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Cool Dark II") {
    document.getElementById ("CMICMIICDICDIIWMIWMIIWDIWDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  } 

  else if (genetics1 === "Warm Medium II" && genetics2 === "Cool Dark I") {
    document.getElementById ("CMICMIICDICDIIWMIWMIIWDIWDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Cool Dark II") {
    document.getElementById ("CMICMIICDICDIIWMIWMIIWDIWDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Cool Medium II") {
    document.getElementById ("CMICMIICDICDIIWMIWMIIWDIWDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  } 

  else if (genetics1 === "Warm Dark II" && genetics2 === "Cool Medium I") {
    document.getElementById ("CMICMIICDICDIIWMIWMIIWDIWDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Cool Medium II") {
    document.getElementById ("CMICMIICDICDIIWMIWMIIWDIWDIIMuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

    <!-- Cool Medium + Cool Dark + Warm Medium + Warm Dark + Muted Medium + Muted Dark + Monochrome Medium + Monochrome Dark --> 

  else if (genetics1 === "Cool Medium II" && genetics2 === "Warm Dark III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Warm Dark I") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Warm Dark II") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Warm Dark III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium I" && genetics2 === "Warm Dark III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && genetics2 === "Warm Medium III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Warm Medium III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Warm Medium I") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Warm Medium II") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Warm Medium III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Muted Dark III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Muted Dark III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Muted Dark I") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Muted Dark II") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Muted Dark III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Muted Medium III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Muted Medium III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Muted Medium III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Muted Medium III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Muted Medium III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Cool Dark III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Cool Dark III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Cool Dark I") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Cool Dark II") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Cool Dark III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Cool Medium III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Cool Medium III") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Cool Medium I") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Cool Medium II") {
    document.getElementById ("CMCDWMWDMuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Cool Medium III") {
    document.getElementById ("CLCDWLWDMuLMuDMoLMoD").style.display = 'block';

  }

  <!-- Cool Medium I + Cool Dark I + Monochrome Medium I + Monochrome Dark I --> 

  else if (genetics1 === "Cool Medium I" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("CMICDIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("CMICDIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Cool Dark I") {
    document.getElementById ("CMICDIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Cool Medium I") {
    document.getElementById ("CMICDIMoMIMoDI").style.display = 'block';

  }

   <!-- Cool Medium I + Cool Medium II + Cool Dark I + Cool Dark II + Monochrome Medium I + Monochrome Medium II + Monochrome Dark I + Monochrome Dark II --> 

 else if (genetics1 === "Cool Medium II" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("CMICMIICDICDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

 else if (genetics1 === "Cool Medium II" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("CMICMIICDICDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium I" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("CMICMIICDICDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("CMICMIICDICDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("CMICMIICDICDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("CMICMIICDICDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Cool Dark II") {
    document.getElementById ("CMICMIICDICDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Cool Dark I") {
    document.getElementById ("CMICMIICDICDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Cool Dark II") {
    document.getElementById ("CMICMIICDICDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Cool Medium II") {
    document.getElementById ("CMICMIICDICDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Cool Medium I") {
    document.getElementById ("CMICMIICDICDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Cool Medium II") {
    document.getElementById ("CMICMIICDICDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

    <!-- Cool Medium + Cool Dark + Monochrome Medium + Monochrome Dark --> 

  else if (genetics1 === "Cool Medium II" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium I" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Cool Dark III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Cool Dark III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Cool Dark I") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Cool Dark II") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Cool Dark III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Cool Medium III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Cool Medium III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Cool Medium I") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Cool Medium II") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Cool Medium III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

   <!-- Cool Dark I --> 

  else if (genetics1 === "Cool Dark I" && genetics2 === "Cool Dark I") {
    document.getElementById ("CDI").style.display = 'block';

  }

   <!-- Cool Dark I + Cool Dark II --> 

  else if (genetics1 === "Cool Dark I" && genetics2 === "Cool Dark II") {
    document.getElementById ("CDICDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Cool Dark I") {
    document.getElementById ("CDICDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Cool Dark II") {
    document.getElementById ("CDICDII").style.display = 'block';

  }


   <!-- Cool Dark --> 

  else if (genetics1 === "Cool Dark I" && genetics2 === "Cool Dark III") {
    document.getElementById ("CD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Cool Dark I") {
    document.getElementById ("CD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Cool Dark III") {
    document.getElementById ("CD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Cool Dark I") {
    document.getElementById ("CD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Cool Dark II") {
    document.getElementById ("CD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Cool Dark III") {
    document.getElementById ("CD").style.display = 'block';

  }

   <!-- Cool Dark I + Muted Dark I + Monochrome Dark I --> 

  else if (genetics1 === "Cool Dark I" && genetics2 === "Muted Dark I") {
    document.getElementById ("CDIMuDIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Cool Dark I") {
    document.getElementById ("CDIMuDIMoDI").style.display = 'block';

  }

   <!-- Cool Dark I + Cool Dark II + Muted Dark I + Muted Dark II + Monochrome Dark I + Monochrome Dark II --> 

  else if (genetics1 === "Cool Dark I" && genetics2 === "Muted Dark II") {
    document.getElementById ("CDICDIIMuDIMuDIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Cool Dark I") {
    document.getElementById ("CDICDIIMuDIMuDIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Muted Dark I") {
    document.getElementById ("CDICDIIMuDIMuDIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Muted Dark II") {
    document.getElementById ("CDICDIIMuDIMuDIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Cool Dark II") {
    document.getElementById ("CDICDIIMuDIMuDIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Cool Dark I") {
    document.getElementById ("CDICDIIMuDIMuDIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Cool Dark II") {
    document.getElementById ("CDICDIIMuDIMuDIMoDIMoDII").style.display = 'block';

  }

   <!-- Cool Dark + Muted Dark + Monochrome Dark --> 

  else if (genetics1 === "Cool Dark I" && genetics2 === "Muted Dark III") {
    document.getElementById ("CDMuDMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Cool Dark I") {
    document.getElementById ("CDMuDMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Muted Dark III") {
    document.getElementById ("CDMuDMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Muted Dark I") {
    document.getElementById ("CDMuDMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Muted Dark II") {
    document.getElementById ("CDMuDMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Muted Dark III") {
    document.getElementById ("CDMuDMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Cool Dark III") {
    document.getElementById ("CDMuDMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Cool Dark I") {
    document.getElementById ("CDMuDMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Cool Dark II") {
    document.getElementById ("CDMuDMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Cool Dark III") {
    document.getElementById ("CDMuDMoD").style.display = 'block';

  }


   <!-- Cool Dark I + Warm Dark I + Muted Dark I + Monochrome Dark I --> 

  else if (genetics1 === "Cool Dark I" && genetics2 === "Warm Dark I") {
    document.getElementById ("CDIWDIMuDIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Cool Dark I") {
    document.getElementById ("CDIWDIMuDIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Muted Dark I") {
    document.getElementById ("CDIWDIMuDIMoDI").style.display = 'block';

  }

   <!-- Cool Dark I + Cool Dark II + Warm Dark I + Warm Dark II + Muted Dark I + Muted Dark II + Monochrome Dark I + Monochrome Dark II --> 

  else if (genetics1 === "Cool Dark I" && genetics2 === "Warm Dark II") {
    document.getElementById ("CDICDIIWDIWDIIMuDIMuDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Cool Dark I") {
    document.getElementById ("CDICDIIWDIWDIIMuDIMuDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Warm Dark I") {
    document.getElementById ("CDICDIIWDIWDIIMuDIMuDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Warm Dark II") {
    document.getElementById ("CDICDIIWDIWDIIMuDIMuDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Muted Dark II") {
    document.getElementById ("CDICDIIWDIWDIIMuDIMuDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Muted Dark I") {
    document.getElementById ("CDICDIIWDIWDIIMuDIMuDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Muted Dark II") {
    document.getElementById ("CDICDIIWDIWDIIMuDIMuDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Cool Dark II") {
    document.getElementById ("CDICDIIWDIWDIIMuDIMuDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Cool Dark I") {
    document.getElementById ("CDICDIIWDIWDIIMuDIMuDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Cool Dark II") {
    document.getElementById ("CDICDIIWDIWDIIMuDIMuDIIMoDIMoDII").style.display = 'block';

  }

   <!-- All Dark --> 

  else if (genetics1 === "Cool Dark I" && genetics2 === "Warm Dark III") {
    document.getElementById ("Dark").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Cool Dark I") {
    document.getElementById ("Dark").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Warm Dark III") {
    document.getElementById ("Dark").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Warm Dark I") {
    document.getElementById ("Dark").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Warm Dark II") {
    document.getElementById ("Dark").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Warm Dark III") {
    document.getElementById ("Dark").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Muted Dark III") {
    document.getElementById ("Dark").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Muted Dark III") {
    document.getElementById ("Dark").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Muted Dark I") {
    document.getElementById ("Dark").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Muted Dark II") {
    document.getElementById ("Dark").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Muted Dark III") {
    document.getElementById ("Dark").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Cool Dark III") {
    document.getElementById ("Dark").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Cool Dark III") {
    document.getElementById ("Dark").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Cool Dark I") {
    document.getElementById ("Dark").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Cool Dark II") {
    document.getElementById ("Dark").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Cool Dark III") {
    document.getElementById ("Dark").style.display = 'block';

  }

   <!-- Cool Dark I + Monochrome Dark I --> 

  else if (genetics1 === "Cool Dark I" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("CDIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Cool Dark I") {
    document.getElementById ("CDIMoDI").style.display = 'block';

  }

   <!-- Cool Dark I + Cool Dark II + Monochrome Dark I + Monochrome Dark II --> 

  else if (genetics1 === "Cool Dark I" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("CDICDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Cool Dark I") {
    document.getElementById ("CDICDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Cool Dark II") {
    document.getElementById ("CDICDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("CDICDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("CDICDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Cool Dark II") {
    document.getElementById ("CDICDIIMoDIMoDII").style.display = 'block';

  }

   <!-- Cool Dark + Monochrome Dark --> 

  else if (genetics1 === "Cool Dark I" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("CDMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Cool Dark I") {
    document.getElementById ("CDMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Cool Dark II") {
    document.getElementById ("CDMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Cool Dark III") {
    document.getElementById ("CDMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("CDMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("CDMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("CDMoD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("CDMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Cool Dark III") {
    document.getElementById ("CDMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Cool Dark III") {
    document.getElementById ("CDMoD").style.display = 'block';

  }

  <!-- Warm Light I + Muted Light I + Monochrome Light I --> 

  else if (genetics1 === "Muted Light I" && genetics2 === "Warm Light I") {
    document.getElementById ("WLIMuLIMoLI").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Muted Light I") {
    document.getElementById ("WLIMuLIMoLI").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Monochrome Light I") {
    document.getElementById ("WLIMuLIMoLI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Warm Light I") {
    document.getElementById ("WLIMuLIMoLI").style.display = 'block';

  }

   <!-- Warm Light I + Warm Light II + Muted Light I + Muted Light II + Monochrome Light I + Monochrome Light II --> 

  else if (genetics1 === "Muted Light I" && genetics2 === "Warm Light II") {
    document.getElementById ("WLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Muted Light I") {
    document.getElementById ("WLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Warm Light I") {
    document.getElementById ("WLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Warm Light II") {
    document.getElementById ("WLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Muted Light II") {
    document.getElementById ("WLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Monochrome Light II") {
    document.getElementById ("WLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Warm Light I") {
    document.getElementById ("WLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Muted Light I") {
    document.getElementById ("WLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Muted Light II") {
    document.getElementById ("WLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Monochrome Light I") {
    document.getElementById ("WLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Monochrome Light II") {
    document.getElementById ("WLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Warm Light II") {
    document.getElementById ("WLIWLIIMuLIMuLIIMoLIMoLII").style.display = 'block';

  }

   <!-- Warm Light + Muted Light + Monochrome Light --> 

  else if (genetics1 === "Muted Light I" && genetics2 === "Warm Light III") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Muted Light I") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Warm Light III") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Warm Light I") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Warm Light II") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Warm Light III") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Muted Light III") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Monochrome Light III") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Muted Light III") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Monochrome Light III") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Muted Light I") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Muted Light II") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Muted Light III") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Monochrome Light I") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Monochrome Light II") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Monochrome Light III") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Warm Light III") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Warm Light III") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Warm Light I") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Warm Light II") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Warm Light III") {
    document.getElementById ("WLMuLMoL").style.display = 'block';

  }

   <!-- Muted Light I + Muted Medium I + Warm Light I + Warm Medium I + Monochrome Light I + Monochrome Medium I --> 

  else if (genetics1 === "Muted Light I" && genetics2 === "Warm Medium I") {
    document.getElementById ("MuLIMuMIWLIWMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Muted Light I") {
    document.getElementById ("MuLIMuMIWLIWMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Warm Light I") {
    document.getElementById ("MuLIMuMIWLIWMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Muted Medium I") {
    document.getElementById ("MuLIMuMIWLIWMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MuLIMuMIWLIWMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Warm Light I") {
    document.getElementById ("MuLIMuMIWLIWMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Muted Light I") {
    document.getElementById ("MuLIMuMIWLIWMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MuLIMuMIWLIWMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Warm Medium I") {
    document.getElementById ("MuLIMuMIWLIWMIMoLIMoMI").style.display = 'block';

  }

   <!-- Muted Light I + Muted Light II + Muted Medium I + Muted Medium II + Warm Light I + Warm Light II + Warm Medium I + Warm Medium II + Monochrome Light I + Monochrome Light II + Monochrome Medium I + Monochrome Medium II --> 

  else if (genetics1 === "Muted Light I" && genetics2 === "Warm Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Muted Light I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Warm Medium I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Warm Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Warm Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Warm Light I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Warm Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Muted Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Warm Light I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Warm Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Muted Medium I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Muted Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Muted Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Muted Light I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Muted Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Warm Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Warm Medium I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Warm Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Warm Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIWLIWLIIWMIWMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }


   <!-- Muted Light, Muted Medium, Warm Light, Warm Medium, Monochrome Light, Monochrome Medium --> 

  else if (genetics1 === "Muted Light I" && genetics2 === "Warm Medium III") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Muted Light I") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Warm Medium III") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Warm Medium I") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Warm Medium II") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Warm Medium III") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Warm Light III") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Warm Light III") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Warm Light I") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Warm Light II") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Warm Light III") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Muted Medium III") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Muted Medium III") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Muted Medium I") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Muted Medium II") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Muted Medium III") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Muted Light III") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Muted Light III") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Muted Light I") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Muted Light II") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Muted Light III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Monochrome Light I") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Monochrome Light II") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Monochrome Light III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Warm Medium III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Warm Medium III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Warm Medium I") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Warm Medium II") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Warm Medium III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Warm Light III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Warm Light III") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Warm Light I") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Warm Light II") {
    document.getElementById ("CMCDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Warm Light III") {
    document.getElementById ("MuLMuMWLWMMoLMoM").style.display = 'block';

  }

   <!-- Muted Light I + Muted Medium I + Muted Dark I + Warm Light I + Warm Medium I + Warm Dark I + Monochrome Light I + Monochrome Medium I + Monochrome Dark I --> 

  else if (genetics1 === "Muted Light I" && genetics2 === "Warm Dark I") {
    document.getElementById ("MuLIMuMIMuDIWLIWMIWDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Muted Light I") {
    document.getElementById ("MuLIMuMIMuDIWLIWMIWDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Warm Medium I") {
    document.getElementById ("MuLIMuMIMuDIWLIWMIWDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Warm Light I") {
    document.getElementById ("MuLIMuMIMuDIWLIWMIWDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Muted Dark I") {
    document.getElementById ("MuLIMuMIMuDIWLIWMIWDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MuLIMuMIMuDIWLIWMIWDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Warm Light I") {
    document.getElementById ("MuLIMuMIMuDIWLIWMIWDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Muted Medium I") {
    document.getElementById ("MuLIMuMIMuDIWLIWMIWDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MuLIMuMIMuDIWLIWMIWDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MuLIMuMIMuDIWLIWMIWDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Warm Dark I") {
    document.getElementById ("MuLIMuMIMuDIWLIWMIWDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Warm Medium I") {
    document.getElementById ("MuLIMuMIMuDIWLIWMIWDIMoLIMoMIMoDI").style.display = 'block';

  }

   <!-- Muted Light I + Muted Light II + Muted Medium I + Muted Medium II + Muted Dark I + Muted Dark II + Warm Light I + Warm Light II + Warm Medium I + Warm Medium II + Warm Dark I + Warm Dark II + Monochrome Light I + Monochrome Light II + Monochrome Medium I + Monochrome Medium II + Monochrome Dark I + Monochrome Dark II --> 

  else if (genetics1 === "Muted Light I" && genetics2 === "Warm Dark II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Muted Light I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Warm Dark I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Warm Dark II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Warm Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Warm Medium I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Warm Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Warm Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Warm Light I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Warm Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Muted Dark II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Muted Dark I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Muted Dark II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Muted Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Muted Medium I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Muted Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Muted Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Muted Light I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Muted Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Warm Dark II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Warm Dark I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Warm Dark II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Warm Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Warm Medium I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Warm Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Warm Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Warm Light I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Warm Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIWLIWLIIWMIWMIIWDIWDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

   <!-- All Muted + All Warm + All Monochrome --> 

  else if (genetics1 === "Muted Light I" && genetics2 === "Warm Dark III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Muted Light I") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Warm Dark III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Warm Dark I") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Warm Dark II") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Warm Dark III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Warm Medium III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Warm Medium III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Warm Medium I") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Warm Medium II") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Warm Medium III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Warm Light III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Warm Light III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Warm Light I") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Warm Light II") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Warm Light III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Muted Dark III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Muted Dark III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Muted Dark I") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Muted Dark II") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Muted Dark III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Muted Medium III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Muted Medium III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Muted Medium I") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Muted Medium II") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Muted Medium III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Muted Light III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Muted Light III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Muted Light I") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Muted Light II") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Muted Light III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Warm Dark III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Warm Dark III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Warm Dark III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Warm Dark II") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Warm Dark I") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Warm Medium III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Warm Medium III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Warm Medium I") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Warm Medium II") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Warm Medium III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Warm Light III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Warm Light III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Warm Light I") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Warm Light II") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Warm Light III") {
    document.getElementById ("MutedWarmMonochrome").style.display = 'block';

  }

   <!-- Muted Light I + Monochrome Light I --> 

  else if (genetics1 === "Muted Light I" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MuLIMoLI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Muted Light I") {
    document.getElementById ("MuLIMoLI").style.display = 'block';

  }

   <!-- Muted Light I + Muted Light II + Monochrome Light I + Monochrome Light II --> 

  else if (genetics1 === "Muted Light I" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Muted Light I") {
    document.getElementById ("MuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Muted Light II") {
    document.getElementById ("MuLIMuLIIMoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Muted Light II") {
    document.getElementById ("MuLIMuLIIMoLIMoLII").style.display = 'block';

  }

   <!-- Muted Light + Monochrome Light --> 

  else if (genetics1 === "Muted Light I" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Muted Light I") {
    document.getElementById ("MuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Muted Light II") {
    document.getElementById ("MuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Muted Light III") {
    document.getElementById ("MuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Muted Light III") {
    document.getElementById ("MuLMoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Muted Light III") {
    document.getElementById ("MuLMoL").style.display = 'block';

  }

  <!-- Muted Light I + Muted Medium I + Monochrome Light I + Monochrome Medium I --> 

  else if (genetics1 === "Muted Light I" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MuLIMuMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Muted Light I") {
    document.getElementById ("MuLIMuMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MuLIMuMIMoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Muted Medium I") {
    document.getElementById ("MuLIMuMIMoLIMoMI").style.display = 'block';

  }

   <!-- Muted Light I + Muted Light II + Muted Medium I + Muted Medium II + Monochrome Light I + Monochrome Light II + Monochrome Medium I + Monochrome Medium II --> 

  else if (genetics1 === "Muted Light I" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Muted Light I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Muted Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Muted Medium I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Muted Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Muted Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Muted Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMoLIMoLIIMoMIMoMII").style.display = 'block';

  }

   <!-- Muted Light + Muted Medium + Monochrome Light + Monochrome Medium --> 


  else if (genetics1 === "Muted Light I" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Muted Light I") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Muted Light II") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Muted Light III") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Muted Medium III") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Muted Medium III") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Muted Medium I") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Muted Medium II") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Muted Medium III") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Muted Light III") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Muted Light III") {
    document.getElementById ("MuLMuMMoLMoM").style.display = 'block';

  }

  <!-- Muted Light I + Muted Medium I + Muted Dark I + Monochrome Light I + Monochrome Medium I + Monochrome Dark I --> 

  else if (genetics1 === "Muted Light I" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Muted Light I") {
    document.getElementById ("MuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Muted Dark I") {
    document.getElementById ("MuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Muted Medium I") {
    document.getElementById ("MuLIMuMIMuDIMoLIMoMIMoDI").style.display = 'block';

  }

   <!-- Muted Light I + Muted Light II + Muted Medium I + Muted Medium II + Muted Dark I + Muted Dark II + Monochrome Light I + Monochrome Light II + Monochrome Medium I + Monochrome Medium II + Monochrome Dark I + Monochrome Dark II --> 

  else if (genetics1 === "Muted Light I" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Muted Light I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Muted Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Muted Dark II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Muted Dark I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Muted Dark II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Muted Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Muted Medium I") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Muted Medium II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Muted Light II") {
    document.getElementById ("MuLIMuLIIMuMIMuMIIMuDIMuDIIMoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

   <!-- All Muted + All Monochrome --> 

  else if (genetics1 === "Muted Light I" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Muted Light I") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Muted Light II") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Muted Light III") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && genetics2 === "Muted Dark III") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Muted Dark III") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Muted Dark I") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Muted Dark II") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Muted Dark III") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Muted Medium III") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Muted Medium III") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Muted Medium I") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Muted Medium II") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Muted Medium III") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Muted Light III") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Muted Light III") {
    document.getElementById ("MutedMonochrome").style.display = 'block';

  }

  <!-- Muted Medium I + Muted Dark I + Warm Medium I + Warm Dark I + Monochrome Medium I + Monochrome Dark I --> 

  else if (genetics1 === "Muted Medium I" && genetics2 === "Warm Dark I") {
    document.getElementById ("MuMIMuDIWMIWDIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Muted Medium I") {
    document.getElementById ("MuMIMuDIWMIWDIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Warm Medium I") {
    document.getElementById ("MuMIMuDIWMIWDIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Muted Dark I") {
    document.getElementById ("MuMIMuDIWMIWDIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MuMIMuDIWMIWDIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MuMIMuDIWMIWDIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Warm Dark I") {
    document.getElementById ("MuMIMuDIWMIWDIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Warm Medium I") {
    document.getElementById ("MuMIMuDIWMIWDIMoMIMoDI").style.display = 'block';

  }

   <!-- Muted Medium I + Muted Medium II + Muted Dark I + Muted Dark II + Warm Medium I + Warm Medium II + Warm Dark I + Warm Dark II + Monochrome Medium I + Monochrome Medium II + Monochrome Dark I + Monochrome Dark II --> 

  else if (genetics1 === "Muted Medium I" && genetics2 === "Warm Dark II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Muted Medium I") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Warm Dark I") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Warm Dark II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Warm Medium II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Warm Medium I") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Warm Medium II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Muted Dark II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Muted Dark I") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Muted Dark II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Muted Medium II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Muted Medium I") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Muted Medium II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Warm Dark II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Warm Dark I") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Warm Dark II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Warm Medium II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Warm Medium I") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Warm Medium II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIWMIWMIIWDIWDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

   <!-- Muted Medium + Muted Dark + Warm Medium + Warm Dark + Monochrome Medium + Monochrome Dark --> 

  else if (genetics1 === "Muted Medium I" && genetics2 === "Warm Dark III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Muted Medium I") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  } 

  else if (genetics1 === "Muted Medium II" && genetics2 === "Warm Dark III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Warm Dark I") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Warm Dark II") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Warm Dark III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Warm Medium III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Warm Medium III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Warm Medium I") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Warm Medium II") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Warm Medium III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Muted Dark III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Muted Dark III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Muted Dark I") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Muted Dark II") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Muted Dark III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Muted Medium III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Muted Medium III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Muted Medium I") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Muted Medium II") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Muted Medium III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Warm Dark III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Warm Dark III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Warm Dark I") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Warm Dark II") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Warm Dark III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Warm Medium III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Warm Medium III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Warm Medium I") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Warm Medium II") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Warm Medium III") {
    document.getElementById ("MuMMuDWMWDMoMMoD").style.display = 'block';

  }

  <!-- Muted Medium I + Muted Dark I + Monochrome Medium I + Monochrome Dark I --> 

  else if (genetics1 === "Muted Medium I" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MuMIMuDIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Muted Medium I") {
    document.getElementById ("MuMIMuDIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MuMIMuDIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Muted Dark I") {
    document.getElementById ("MuMIMuDIMoMIMoDI").style.display = 'block';

  }

   <!-- Muted Medium I + Muted Medium II + Muted Dark I + Muted Dark II + Monochrome Medium I + Monochrome Medium II + Monochrome Dark I + Monochrome Dark II --> 

  else if (genetics1 === "Muted Medium I" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Muted Medium I") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Muted Medium II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Muted Dark II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Muted Dark I") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Muted Dark II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Muted Medium II") {
    document.getElementById ("MuMIMuMIIMuDIMuDIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

   <!-- Muted Medium + Muted Dark + Monochrome Medium + Monochrome Dark --> 

  else if (genetics1 === "Muted Medium I" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Muted Medium I") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Muted Medium II") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Muted Medium III") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Muted Dark III") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Muted Dark III") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Muted Dark I") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Muted Dark II") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Muted Dark III") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Muted Medium III") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Muted Medium III") {
    document.getElementById ("MuMMuDMoMMoD").style.display = 'block';

  }

  <!-- Muted Dark I + Warm Dark I + Monochrome Dark I --> 

  else if (genetics1 === "Muted Dark I" && genetics2 === "Warm Dark I") {
    document.getElementById ("MuDIWDIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Muted Dark I") {
    document.getElementById ("MuDIWDIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MuDIWDIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Warm Dark I") {
    document.getElementById ("MuDIWDIMoDI").style.display = 'block';

  }

   <!-- Muted Dark I + Muted Dark II + Warm Dark I + Warm Dark II + Monochrome Dark I + Monochrome Dark II --> 

  else if (genetics1 === "Muted Dark I" && genetics2 === "Warm Dark II") {
    document.getElementById ("MuDIMuDIIWDIWDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Muted Dark I") {
    document.getElementById ("MuDIMuDIIWDIWDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Warm Dark I") {
    document.getElementById ("MuDIMuDIIWDIWDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Warm Dark II") {
    document.getElementById ("MuDIMuDIIWDIWDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Muted Dark II") {
    document.getElementById ("MuDIMuDIIWDIWDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MuDIMuDIIWDIWDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Muted Dark I") {
    document.getElementById ("MuDIMuDIIWDIWDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Muted Dark II") {
    document.getElementById ("MuDIMuDIIWDIWDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MuDIMuDIIWDIWDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MuDIMuDIIWDIWDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Warm Dark II") {
    document.getElementById ("MuDIMuDIIWDIWDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Warm Dark I") {
    document.getElementById ("MuDIMuDIIWDIWDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Warm Dark II") {
    document.getElementById ("MuDIMuDIIWDIWDIIMoDIMoDII").style.display = 'block';

  }

   <!-- Muted Dark + Warm Dark + Monochrome Dark --> 

  else if (genetics1 === "Muted Dark I" && genetics2 === "Warm Dark III") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Muted Dark I") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Warm Dark III") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Warm Dark I") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Warm Dark II") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Warm Dark III") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Muted Dark III") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Muted Dark III") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Muted Dark I") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Muted Dark II") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Muted Dark III") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Warm Dark III") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Warm Dark III") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Warm Dark I") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Warm Dark II") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Warm Dark III") {
    document.getElementById ("MuDWDMoD").style.display = 'block';

  }

  <!-- Muted Dark I + Monochrome Dark I --> 

  else if (genetics1 === "Muted Dark I" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MuDIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Muted Dark I") {
    document.getElementById ("MuDIMoDI").style.display = 'block';

  }

   <!-- Muted Dark I + Muted Dark II + Monochrome Dark I + Monochrome Dark II --> 

  else if (genetics1 === "Muted Dark I" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MuDIMuDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Muted Dark I") {
    document.getElementById ("MuDIMuDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Muted Dark II") {
    document.getElementById ("MuDIMuDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MuDIMuDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MuDIMuDIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Muted Dark II") {
    document.getElementById ("MuDIMuDIIMoDIMoDII").style.display = 'block';

  }

   <!-- Muted Dark + Monochrome Dark --> 

  else if (genetics1 === "Muted Dark I" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MuDMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Muted Dark I") {
    document.getElementById ("MuDMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Muted Dark II") {
    document.getElementById ("MuDMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Muted Dark III") {
    document.getElementById ("MuDMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MuDMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MuDMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MuDMoD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MuDMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Muted Dark III") {
    document.getElementById ("MuDMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Muted Dark III") {
    document.getElementById ("MuDMoD").style.display = 'block';

  }


   <!-- Warm Light I -->  

  else if (genetics1 === "Warm Light I" && genetics2 === "Warm Light I") {
    document.getElementById ("WLI").style.display = 'block';

  }

   <!-- Warm Light I + Warm Light II -->  

  else if (genetics1 === "Warm Light I" && genetics2 === "Warm Light II") {
    document.getElementById ("WLIWLII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Warm Light I") {
    document.getElementById ("WLIWLII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Warm Light II") {
    document.getElementById ("WLIWLII").style.display = 'block';

  }

   <!-- Warm Light -->  

  else if (genetics1 === "Warm Light I" && genetics2 === "Warm Light III") {
    document.getElementById ("WL").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Warm Light I") {
    document.getElementById ("WL").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Warm Light III") {
    document.getElementById ("WL").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Warm Light II") {
    document.getElementById ("WL").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Warm Light III") {
    document.getElementById ("WL").style.display = 'block';

  }

   <!-- Warm Light I + Warm Medium I -->  

  else if (genetics1 === "Warm Light I" && genetics2 === "Warm Medium I") {
    document.getElementById ("WLIWMI").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Warm Light I") {
    document.getElementById ("WLIWMI").style.display = 'block';

  }

   <!-- Warm Light I + Warm Light II + Warm Medium I + Warm Medium II -->  

  else if (genetics1 === "Warm Light I" && genetics2 === "Warm Medium II") {
    document.getElementById ("WLIWLIIWMIWMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Warm Light I") {
    document.getElementById ("WLIWLIIWMIWMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Warm Medium II") {
    document.getElementById ("WLIWLIIWMIWMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Warm Medium I") {
    document.getElementById ("WLIWLIIWMIWMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Warm Light II") {
    document.getElementById ("WLIWLIIWMIWMII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Warm Light II") {
    document.getElementById ("WLIWLIIWMIWMII").style.display = 'block';

  }

   <!-- Warm Light + Warm Medium -->  

  else if (genetics1 === "Warm Light I" && genetics2 === "Warm Medium III") {
    document.getElementById ("WLWM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Warm Light I") {
    document.getElementById ("WLWM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Warm Medium III") {
    document.getElementById ("WLWM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Warm Light II") {
    document.getElementById ("WLWM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Warm Medium III") {
    document.getElementById ("WLWM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Warm Light III") {
    document.getElementById ("WLWM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Warm Medium I") {
    document.getElementById ("WLWM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Warm Medium II") {
    document.getElementById ("WLWM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Warm Light III") {
    document.getElementById ("WLWM").style.display = 'block';

  }


  else if (genetics1 === "Warm Medium II" && genetics2 === "Warm Light III") {
    document.getElementById ("WLWM").style.display = 'block';

  }

   <!-- Warm Light I + Warm Medium I + Warm Dark I -->  

  else if (genetics1 === "Warm Light I" && genetics2 === "Warm Dark I") {
    document.getElementById ("WLIWMIWDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Warm Light I") {
    document.getElementById ("WLIWMIWDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Warm Medium I") {
    document.getElementById ("WLIWMIWDI").style.display = 'block';

  }

   <!-- Warm Light I + Warm Light II + Warm Medium I + Warm Medium II + Warm Dark I + Warm Dark II -->  

  else if (genetics1 === "Warm Light I" && genetics2 === "Warm Dark II") {
    document.getElementById ("WLIWLIIWMIWMIIWDIWDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Warm Light I") {
    document.getElementById ("WLIWLIIWMIWMIIWDIWDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Warm Dark II") {
    document.getElementById ("WLIWLIIWMIWMIIWDIWDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Warm Dark I") {
    document.getElementById ("WLIWLIIWMIWMIIWDIWDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Warm Light II") {
    document.getElementById ("WLIWLIIWMIWMIIWDIWDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Warm Medium II") {
    document.getElementById ("WLIWLIIWMIWMIIWDIWDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Warm Medium I") {
    document.getElementById ("WLIWLIIWMIWMIIWDIWDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Warm Medium II") {
    document.getElementById ("WLIWLIIWMIWMIIWDIWDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Warm Light II") {
    document.getElementById ("WLIWLIIWMIWMIIWDIWDII").style.display = 'block';

  }

   <!-- All Warm -->  

  else if (genetics1 === "Warm Light I" && genetics2 === "Warm Dark III") {
    document.getElementById ("Warm").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Warm Light I") {
    document.getElementById ("Warm").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && genetics2 === "Warm Dark III") {
    document.getElementById ("Warm").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Warm Light II") {
    document.getElementById ("Warm").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Warm Dark III") {
    document.getElementById ("Warm").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Warm Light III") {
    document.getElementById ("Warm").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Warm Dark I") {
    document.getElementById ("Warm").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && genetics2 === "Warm Dark II") {
    document.getElementById ("Warm").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && genetics2 === "Warm Medium III") {
    document.getElementById ("Warm").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Warm Medium III") {
    document.getElementById ("Warm").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Warm Medium I") {
    document.getElementById ("Warm").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Warm Medium II") {
    document.getElementById ("Warm").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Warm Medium III") {
    document.getElementById ("Warm").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Warm Light III") {
    document.getElementById ("Warm").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Warm Light III") {
    document.getElementById ("Warm").style.display = 'block';

  }

   <!-- Warm Medium I + Warm Dark I -->  

  else if (genetics1 === "Warm Medium I" && genetics2 === "Warm Dark I") {
    document.getElementById ("WMIWDI").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Warm Medium I") {
    document.getElementById ("WMIWDI").style.display = 'block';

  }

   <!-- Warm Medium I + Warm Medium II + Warm Dark I + Warm Dark II -->  

  else if (genetics1 === "Warm Medium I" && genetics2 === "Warm Dark II") {
    document.getElementById ("WMIWMIIWDIWDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Warm Medium I") {
    document.getElementById ("WMIWMIIWDIWDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Warm Medium II") {
    document.getElementById ("WMIWMIIWDIWDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Warm Dark I") {
    document.getElementById ("WMIWMIIWDIWDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Warm Dark II") {
    document.getElementById ("WMIWMIIWDIWDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Warm Medium II") {
    document.getElementById ("WMIWMIIWDIWDII").style.display = 'block';

  }

   <!-- Warm Medium + Warm Dark -->  


  else if (genetics1 === "Warm Medium I" && genetics2 === "Warm Dark III") {
    document.getElementById ("WMWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Warm Medium I") {
    document.getElementById ("WMWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && genetics2 === "Warm Dark III") {
    document.getElementById ("WMWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Warm Dark I") {
    document.getElementById ("WMWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Warm Dark II") {
    document.getElementById ("WMWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && genetics2 === "Warm Dark III") {
    document.getElementById ("WMWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && genetics2 === "Warm Medium III") {
    document.getElementById ("WMWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Warm Medium III") {
    document.getElementById ("WMWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Warm Medium II") {
    document.getElementById ("WMWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Warm Medium III") {
    document.getElementById ("WMWD").style.display = 'block';

  }

   <!-- Warm Dark I -->  


  else if (genetics1 === "Warm Dark I" && genetics2 === "Warm Dark I") {
    document.getElementById ("WDI").style.display = 'block';

  }

   <!-- Warm Dark I + Warm Dark II -->  


  else if (genetics1 === "Warm Dark I" && genetics2 === "Warm Dark II") {
    document.getElementById ("WDIWDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Warm Dark I") {
    document.getElementById ("WDIWDII").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Warm Dark II") {
    document.getElementById ("WDIWDII").style.display = 'block';

  }

   <!-- Warm Dark -->  


  else if (genetics1 === "Warm Dark I" && genetics2 === "Warm Dark III") {
    document.getElementById ("WD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Warm Dark II") {
    document.getElementById ("WD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && genetics2 === "Warm Dark III") {
    document.getElementById ("WD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Warm Dark II") {
    document.getElementById ("WD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Warm Dark I") {
    document.getElementById ("WD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && genetics2 === "Warm Dark III") {
    document.getElementById ("WD").style.display = 'block';

  }

   <!-- Monochrome Light I -->  


  else if (genetics1 === "Monochrome Light I" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MoLI").style.display = 'block';

  }

   <!-- Monochrome Light I + Monochrome Light II -->  


  else if (genetics1 === "Monochrome Light I" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MoLIMoLII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MoLIMoLII").style.display = 'block';

  }

   <!-- Monochrome Light -->  


  else if (genetics1 === "Monochrome Light I" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MoL").style.display = 'block';

  }

   <!-- Monochrome Light I + Monochrome Medium I -->  


  else if (genetics1 === "Monochrome Light I" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MoLIMoMI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MoLIMoMI").style.display = 'block';

  }

   <!-- Monochrome Light I + Monochrome Light II + Monochrome Medium I + Monochrome Medium II -->  


  else if (genetics1 === "Monochrome Light I" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MoLIMoLIIMoMIMoMII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MoLIMoLIIMoMIMoMII").style.display = 'block';

  }

   <!-- Monochrome Light + Monochrome Medium -->  


  else if (genetics1 === "Monochrome Light I" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MoLMoM").style.display = 'block';

  }

   <!-- Monochrome Light I + Monochrome Medium I + Monochrome Dark I -->  


  else if (genetics1 === "Monochrome Light I" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MoLIMoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MoLIMoMIMoDI").style.display = 'block';

  }

   <!-- Monochrome Light I + Monochrome Light II + Monochrome Medium I + Monochrome Medium II + Monochrome Dark I + Monochrome Dark II -->  


  else if (genetics1 === "Monochrome Light I" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MoLIMoLIIMoMIMoMIIMoDIMoDII").style.display = 'block';

  }

   <!-- All Monochrome -->  


  else if (genetics1 === "Monochrome Light I" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("Monochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Monochrome Light I") {
    document.getElementById ("Monochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("Monochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Monochrome Light II") {
    document.getElementById ("Monochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Monochrome Light III") {
    document.getElementById ("Monochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("Monochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("Monochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("Monochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("Monochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("Monochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("Monochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("Monochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("Monochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Monochrome Light III") {
    document.getElementById ("Monochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Monochrome Light III") {
    document.getElementById ("Monochrome").style.display = 'block';

  }

   <!-- Monochrome Medium I + Monochrome Dark I -->  


  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MoMIMoDI").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MoMIMoDI").style.display = 'block';

  }

   <!-- Monochrome Medium I + Monochrome Medium II + Monochrome Dark I + Monochrome Dark II -->  


  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MoMIMoMIIMoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MoMIMoMIIMoDIMoDII").style.display = 'block';

  }

   <!-- Monochrome Medium + Monochrome Dark -->  


  else if (genetics1 === "Monochrome Medium I" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MoMMoD").style.display = 'block';

  }

   <!-- Monochrome Dark I -->  


  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MoDI").style.display = 'block';

  }

   <!-- Monochrome Dark I + Monochrome Dark II -->  


  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MoDIMoDII").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MoDIMoDII").style.display = 'block';

  }

   <!-- Monochrome Dark -->  


  else if (genetics1 === "Monochrome Dark I" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MoD").style.display = 'block';

  }

   <!-- SPECIALS -->

   <!-- Selene + Cool Light -->
  
  else if (name1 === "Selene" && genetics2 === "Cool Light I") {
    document.getElementById ("SeleneCL").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Cool Light II") {
    document.getElementById ("SeleneCL").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Cool Light III") {
    document.getElementById ("SeleneCL").style.display = 'block';

  }

  else if (genetics1 === "Cool Light I" && name2 === "Selene") {
    document.getElementById ("SeleneCL").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && name2 === "Selene") {
    document.getElementById ("SeleneCL").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && name2 === "Selene") {
    document.getElementById ("SeleneCL").style.display = 'block';

  } 

   <!-- Selene + Cool Light + Cool Medium -->
  
  else if (name1 === "Selene" && genetics2 === "Cool Medium I") {
    document.getElementById ("SeleneCLCM").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Cool Medium II") {
    document.getElementById ("SeleneCLCM").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Cool Medium III") {
    document.getElementById ("SeleneCLCM").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium I" && name2 === "Selene") {
    document.getElementById ("SeleneCLCM").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium II" && name2 === "Selene") {
    document.getElementById ("SeleneCLCM").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && name2 === "Selene") {
    document.getElementById ("SeleneCLCM").style.display = 'block';

  }

   <!-- Selene + All Cool -->
  
  else if (name1 === "Selene" && genetics2 === "Cool Dark I") {
    document.getElementById ("SeleneCool").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Cool Dark II") {
    document.getElementById ("SeleneCool").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Cool Dark III") {
    document.getElementById ("SeleneCool").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && name2 === "Selene") {
    document.getElementById ("SeleneCool").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && name2 === "Selene") {
    document.getElementById ("SeleneCool").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && name2 === "Selene") {
    document.getElementById ("SeleneCool").style.display = 'block';

  } 

   <!-- Selene + Muted Light -->
  
  else if (name1 === "Selene" && genetics2 === "Muted Light I") {
    document.getElementById ("SeleneMuL").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Muted Light II") {
    document.getElementById ("SeleneMuL").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Muted Light III") {
    document.getElementById ("SeleneMuL").style.display = 'block';

  }

  else if (genetics1 === "Muted Light I" && name2 === "Selene") {
    document.getElementById ("SeleneMuL").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && name2 === "Selene") {
    document.getElementById ("SeleneMuL").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && name2 === "Selene") {
    document.getElementById ("SeleneMuL").style.display = 'block';

  }  

   <!-- Selene + Muted Light + Muted Medium -->
  
  else if (name1 === "Selene" && genetics2 === "Muted Medium I") {
    document.getElementById ("SeleneMuLMuM").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Muted Medium II") {
    document.getElementById ("SeleneMuLMuM").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Muted Medium III") {
    document.getElementById ("SeleneMuLMuM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && name2 === "Selene") {
    document.getElementById ("SeleneMuLMuM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && name2 === "Selene") {
    document.getElementById ("SeleneMuLMuM").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && name2 === "Selene") {
    document.getElementById ("SeleneMuLMuM").style.display = 'block';

  } 

   <!-- Selene + All Muted -->
  
  else if (name1 === "Selene" && genetics2 === "Muted Dark I") {
    document.getElementById ("SeleneMuted").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Muted Dark II") {
    document.getElementById ("SeleneMuted").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Muted Dark III") {
    document.getElementById ("SeleneMuted").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && name2 === "Selene") {
    document.getElementById ("SeleneMuted").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && name2 === "Selene") {
    document.getElementById ("SeleneMuted").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && name2 === "Selene") {
    document.getElementById ("SeleneMuted").style.display = 'block';

  }

   <!-- Selene + Warm Light -->
  
  else if (name1 === "Selene" && genetics2 === "Warm Light I") {
    document.getElementById ("SeleneWL").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Warm Light II") {
    document.getElementById ("SeleneWL").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Warm Light III") {
    document.getElementById ("SeleneWL").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && name2 === "Selene") {
    document.getElementById ("SeleneWL").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && name2 === "Selene") {
    document.getElementById ("SeleneWL").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && name2 === "Selene") {
    document.getElementById ("SeleneWL").style.display = 'block';

  }  

   <!-- Selene + Warm Light + Warm Medium -->
  
  else if (name1 === "Selene" && genetics2 === "Warm Medium I") {
    document.getElementById ("SeleneWLWM").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Warm Medium II") {
    document.getElementById ("SeleneWLWM").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Warm Medium III") {
    document.getElementById ("SeleneWLWM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && name2 === "Selene") {
    document.getElementById ("SeleneWLWM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && name2 === "Selene") {
    document.getElementById ("SeleneWLWM").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && name2 === "Selene") {
    document.getElementById ("SeleneWLWM").style.display = 'block';

  } 

   <!-- Selene + All Warm -->
  
  else if (name1 === "Selene" && genetics2 === "Warm Dark I") {
    document.getElementById ("SeleneWarm").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Warm Dark II") {
    document.getElementById ("SeleneWarm").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Warm Dark III") {
    document.getElementById ("SeleneWarm").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && name2 === "Selene") {
    document.getElementById ("SeleneWarm").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && name2 === "Selene") {
    document.getElementById ("SeleneWarm").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && name2 === "Selene") {
    document.getElementById ("SeleneWarm").style.display = 'block';

  }

   <!-- Selene + Monochrome Light -->
  
  else if (name1 === "Selene" && genetics2 === "Monochrome Light I") {
    document.getElementById ("SeleneMoL").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Monochrome Light II") {
    document.getElementById ("SeleneMoL").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Monochrome Light III") {
    document.getElementById ("SeleneMoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && name2 === "Selene") {
    document.getElementById ("SeleneMoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && name2 === "Selene") {
    document.getElementById ("SeleneMoL").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && name2 === "Selene") {
    document.getElementById ("SeleneMoL").style.display = 'block';

  }  

   <!-- Selene + Monochrome Light + Monochrome Medium -->
  
  else if (name1 === "Selene" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("SeleneMoLMoM").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("SeleneMoLMoM").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("SeleneMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && name2 === "Selene") {
    document.getElementById ("SeleneMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && name2 === "Selene") {
    document.getElementById ("SeleneMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && name2 === "Selene") {
    document.getElementById ("SeleneMoLMoM").style.display = 'block';

  } 

   <!-- Selene + All Monochrome -->
  
  else if (name1 === "Selene" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("SeleneMonochrome").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("SeleneMonochrome").style.display = 'block';

  }

  else if (name1 === "Selene" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("SeleneMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && name2 === "Selene") {
    document.getElementById ("SeleneMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && name2 === "Selene") {
    document.getElementById ("SeleneMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && name2 === "Selene") {
    document.getElementById ("SeleneMonochrome").style.display = 'block';

  }

   <!-- Selene + All Light -->
  
  else if (name1 === "Selene" && name2 === "Selene") {
    document.getElementById ("SeleneLight").style.display = 'block';

  }

   <!-- Selene + Luna + All Light + All Medium -->
  
  else if (name1 === "Selene" && name2 === "Luna") {
    document.getElementById ("SeleneLunaLightMedium").style.display = 'block';

  }

  else if (name1 === "Luna" && name2 === "Selene") {
    document.getElementById ("SeleneLunaLightMedium").style.display = 'block';

  }

   <!-- Selene + Moonlight + All Light + All Medium -->
  
  else if (name1 === "Selene" && name2 === "Moonlight") {
    document.getElementById ("SeleneMoonlightLightMedium").style.display = 'block';

  }

  else if (name1 === "Moonlight" && name2 === "Selene") {
    document.getElementById ("SeleneMoonlightLightMedium").style.display = 'block';

  }

   <!-- Selene + Losna + All Bases -->
  
  else if (name1 === "Selene" && name2 === "Losna") {
    document.getElementById ("SeleneLosnaAllBases").style.display = 'block';

  }

  else if (name1 === "Losna" && name2 === "Selene") {
    document.getElementById ("SeleneLosnaAllBases").style.display = 'block';

  }

   <!-- Luna + Cool Light + Cool Medium -->
  
  else if (name1 === "Luna" && genetics2 === "Cool Light I") {
    document.getElementById ("LunaCLCM").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Cool Light II") {
    document.getElementById ("LunaCLCM").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Cool Light III") {
    document.getElementById ("LunaCLCM").style.display = 'block';

  }

  else if (genetics1 === "Cool Light I" && name2 === "Luna") {
    document.getElementById ("LunaCLCM").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && name2 === "Luna") {
    document.getElementById ("LunaCLCM").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && name2 === "Luna") {
    document.getElementById ("LunaCLCM").style.display = 'block';

  } 

   <!-- Luna + All Cool -->
  
  else if (name1 === "Luna" && genetics2 === "Cool Medium I") {
    document.getElementById ("LunaCool").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Cool Medium II") {
    document.getElementById ("LunaCool").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Cool Medium III") {
    document.getElementById ("LunaCool").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium I" && name2 === "Luna") {
    document.getElementById ("LunaCool").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium II" && name2 === "Luna") {
    document.getElementById ("LunaCool").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && name2 === "Luna") {
    document.getElementById ("LunaCool").style.display = 'block';

  }

   <!-- Luna + Cool Medium + Cool Dark -->
  
  else if (name1 === "Luna" && genetics2 === "Cool Dark I") {
    document.getElementById ("LunaCMCD").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Cool Dark II") {
    document.getElementById ("LunaCMCD").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Cool Dark III") {
    document.getElementById ("LunaCMCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && name2 === "Luna") {
    document.getElementById ("LunaCMCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && name2 === "Luna") {
    document.getElementById ("LunaCMCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && name2 === "Luna") {
    document.getElementById ("LunaCMCD").style.display = 'block';

  } 

   <!-- Luna + Muted Light + Muted Medium -->
  
  else if (name1 === "Luna" && genetics2 === "Muted Light I") {
    document.getElementById ("LunaMuLMuM").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Muted Light II") {
    document.getElementById ("LunaMuLMuM").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Muted Light III") {
    document.getElementById ("LunaMuLMuM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light I" && name2 === "Luna") {
    document.getElementById ("LunaMuLMuM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && name2 === "Luna") {
    document.getElementById ("LunaMuLMuM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && name2 === "Luna") {
    document.getElementById ("LunaMuLMuM").style.display = 'block';

  }  

   <!-- Luna + All Muted -->
  
  else if (name1 === "Luna" && genetics2 === "Muted Medium I") {
    document.getElementById ("LunaMuted").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Muted Medium II") {
    document.getElementById ("LunaMuted").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Muted Medium III") {
    document.getElementById ("LunaMuted").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && name2 === "Luna") {
    document.getElementById ("LunaMuted").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && name2 === "Luna") {
    document.getElementById ("LunaMuted").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && name2 === "Luna") {
    document.getElementById ("LunaMuted").style.display = 'block';

  } 

   <!-- Luna + Muted Medium + Muted Dark -->
  
  else if (name1 === "Luna" && genetics2 === "Muted Dark I") {
    document.getElementById ("LunaMuMMuD").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Muted Dark II") {
    document.getElementById ("LunaMuMMuD").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Muted Dark III") {
    document.getElementById ("LunaMuMMuD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && name2 === "Luna") {
    document.getElementById ("LunaMuMMuD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && name2 === "Luna") {
    document.getElementById ("LunaMuMMuD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && name2 === "Luna") {
    document.getElementById ("LunaMuMMuD").style.display = 'block';

  }

   <!-- Luna + Warm Light + Warm Medium -->
  
  else if (name1 === "Luna" && genetics2 === "Warm Light I") {
    document.getElementById ("LunaWLWM").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Warm Light II") {
    document.getElementById ("LunaWLWM").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Warm Light III") {
    document.getElementById ("LunaWLWM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && name2 === "Luna") {
    document.getElementById ("LunaWLWM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && name2 === "Luna") {
    document.getElementById ("LunaWLWM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && name2 === "Luna") {
    document.getElementById ("LunaWLWM").style.display = 'block';

  }  

   <!-- Luna + All Warm -->
  
  else if (name1 === "Luna" && genetics2 === "Warm Medium I") {
    document.getElementById ("LunaWarm").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Warm Medium II") {
    document.getElementById ("LunaWarm").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Warm Medium III") {
    document.getElementById ("LunaWarm").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && name2 === "Luna") {
    document.getElementById ("LunaWarm").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && name2 === "Luna") {
    document.getElementById ("LunaWarm").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && name2 === "Luna") {
    document.getElementById ("LunaWarm").style.display = 'block';

  } 

   <!-- Luna + Warm Medium + Warm Dark -->
  
  else if (name1 === "Luna" && genetics2 === "Warm Dark I") {
    document.getElementById ("LunaWMWD").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Warm Dark II") {
    document.getElementById ("LunaWMWD").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Warm Dark III") {
    document.getElementById ("LunaWMWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && name2 === "Luna") {
    document.getElementById ("LunaWMWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && name2 === "Luna") {
    document.getElementById ("LunaWMWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && name2 === "Luna") {
    document.getElementById ("LunaWMWD").style.display = 'block';

  }

   <!-- Luna + Monochrome Light + Monochrome Medium -->
  
  else if (name1 === "Luna" && genetics2 === "Monochrome Light I") {
    document.getElementById ("LunaMoLMoM").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Monochrome Light II") {
    document.getElementById ("LunaMoLMoM").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Monochrome Light III") {
    document.getElementById ("LunaMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && name2 === "Luna") {
    document.getElementById ("LunaMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && name2 === "Luna") {
    document.getElementById ("LunaMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && name2 === "Luna") {
    document.getElementById ("LunaMoLMoM").style.display = 'block';

  }  

   <!-- Luna + All Monochrome -->
  
  else if (name1 === "Luna" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("LunaMonochrome").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("LunaMonochrome").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("LunaMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && name2 === "Luna") {
    document.getElementById ("LunaMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && name2 === "Luna") {
    document.getElementById ("LunaMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && name2 === "Luna") {
    document.getElementById ("LunaMonochrome").style.display = 'block';

  } 

   <!-- Luna + Monochrome Medium + Monochrome Dark -->
  
  else if (name1 === "Luna" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("LunaMoMMoD").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("LunaMoMMoD").style.display = 'block';

  }

  else if (name1 === "Luna" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("LunaMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && name2 === "Luna") {
    document.getElementById ("LunaMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && name2 === "Luna") {
    document.getElementById ("LunaMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && name2 === "Luna") {
    document.getElementById ("LunaMoMMoD").style.display = 'block';

  }

   <!-- Luna + Selene + All Light + All Medium -->
  
  else if (name1 === "Luna" && name2 === "Selene") {
    document.getElementById ("LunaSeleneLightMedium").style.display = 'block';

  }

  else if (name1 === "Selene" && name2 === "Luna") {
    document.getElementById ("LunaSeleneLightMedium").style.display = 'block';

  }

   <!-- Luna + All Bases -->
  
  else if (name1 === "Luna" && name2 === "Luna") {
    document.getElementById ("LunaAllBases").style.display = 'block';

  }

   <!-- Luna + Moonlight + All Bases -->
  
  else if (name1 === "Luna" && name2 === "Moonlight") {
    document.getElementById ("LunaMoonlightAllBases").style.display = 'block';

  }

  else if (name1 === "Moonlight" && name2 === "Luna") {
    document.getElementById ("LunaMoonlightAllBases").style.display = 'block';

  }

   <!-- Luna + Losna + All Medium + All Dark -->
  
  else if (name1 === "Luna" && name2 === "Losna") {
    document.getElementById ("LunaLosnaMediumDark").style.display = 'block';

  }

  else if (name1 === "Losna" && name2 === "Luna") {
    document.getElementById ("LunaLosnaMediumDark").style.display = 'block';

  }

   <!-- Moonlight + Cool Light + Cool Medium -->
  
  else if (name1 === "Moonlight" && genetics2 === "Cool Light I") {
    document.getElementById ("MoonlightCLCM").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Cool Light II") {
    document.getElementById ("MoonlightCLCM").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Cool Light III") {
    document.getElementById ("MoonlightCLCM").style.display = 'block';

  }

  else if (genetics1 === "Cool Light I" && name2 === "Moonlight") {
    document.getElementById ("MoonlightCLCM").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && name2 === "Moonlight") {
    document.getElementById ("MoonlightCLCM").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && name2 === "Moonlight") {
    document.getElementById ("MoonlightCLCM").style.display = 'block';

  } 

   <!-- Moonlight + All Cool -->
  
  else if (name1 === "Moonlight" && genetics2 === "Cool Medium I") {
    document.getElementById ("MoonlightCool").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Cool Medium II") {
    document.getElementById ("MoonlightCool").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Cool Medium III") {
    document.getElementById ("MoonlightCool").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium I" && name2 === "Moonlight") {
    document.getElementById ("MoonlightCool").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium II" && name2 === "Moonlight") {
    document.getElementById ("MoonlightCool").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && name2 === "Moonlight") {
    document.getElementById ("MoonlightCool").style.display = 'block';

  }

   <!-- Moonlight + Cool Medium + Cool Dark -->
  
  else if (name1 === "Moonlight" && genetics2 === "Cool Dark I") {
    document.getElementById ("MoonlightCMCD").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Cool Dark II") {
    document.getElementById ("MoonlightCMCD").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Cool Dark III") {
    document.getElementById ("MoonlightCMCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && name2 === "Moonlight") {
    document.getElementById ("MoonlightCMCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && name2 === "Moonlight") {
    document.getElementById ("MoonlightCMCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && name2 === "Moonlight") {
    document.getElementById ("MoonlightCMCD").style.display = 'block';

  } 

   <!-- Moonlight + Muted Light + Muted Medium -->
  
  else if (name1 === "Moonlight" && genetics2 === "Muted Light I") {
    document.getElementById ("MoonlightMuLMuM").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Muted Light II") {
    document.getElementById ("MoonlightMuLMuM").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Muted Light III") {
    document.getElementById ("MoonlightMuLMuM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light I" && name2 === "Moonlight") {
    document.getElementById ("MoonlightMuLMuM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && name2 === "Moonlight") {
    document.getElementById ("MoonlightMuLMuM").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && name2 === "Moonlight") {
    document.getElementById ("MoonlightMuLMuM").style.display = 'block';

  }  

   <!-- Moonlight + All Muted -->
  
  else if (name1 === "Moonlight" && genetics2 === "Muted Medium I") {
    document.getElementById ("MoonlightMuted").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Muted Medium II") {
    document.getElementById ("MoonlightMuted").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Muted Medium III") {
    document.getElementById ("MoonlightMuted").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && name2 === "Moonlight") {
    document.getElementById ("MoonlightMuted").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && name2 === "Moonlight") {
    document.getElementById ("MoonlightMuted").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && name2 === "Moonlight") {
    document.getElementById ("MoonlightMuted").style.display = 'block';

  } 

   <!-- Moonlight + Muted Medium + Muted Dark -->
  
  else if (name1 === "Moonlight" && genetics2 === "Muted Dark I") {
    document.getElementById ("MoonlightMuMMuD").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Muted Dark II") {
    document.getElementById ("MoonlightMuMMuD").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Muted Dark III") {
    document.getElementById ("MoonlightMuMMuD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && name2 === "Moonlight") {
    document.getElementById ("MoonlightMuMMuD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && name2 === "Moonlight") {
    document.getElementById ("MoonlightMuMMuD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && name2 === "Moonlight") {
    document.getElementById ("MoonlightMuMMuD").style.display = 'block';

  }

   <!-- Moonlight + Warm Light + Warm Medium -->
  
  else if (name1 === "Moonlight" && genetics2 === "Warm Light I") {
    document.getElementById ("MoonlightWLWM").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Warm Light II") {
    document.getElementById ("MoonlightWLWM").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Warm Light III") {
    document.getElementById ("MoonlightWLWM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && name2 === "Moonlight") {
    document.getElementById ("MoonlightWLWM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && name2 === "Moonlight") {
    document.getElementById ("MoonlightWLWM").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && name2 === "Moonlight") {
    document.getElementById ("MoonlightWLWM").style.display = 'block';

  }  

   <!-- Moonlight + All Warm -->
  
  else if (name1 === "Moonlight" && genetics2 === "Warm Medium I") {
    document.getElementById ("MoonlightWarm").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Warm Medium II") {
    document.getElementById ("MoonlightWarm").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Warm Medium III") {
    document.getElementById ("MoonlightWarm").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && name2 === "Moonlight") {
    document.getElementById ("MoonlightWarm").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && name2 === "Moonlight") {
    document.getElementById ("MoonlightWarm").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && name2 === "Moonlight") {
    document.getElementById ("MoonlightWarm").style.display = 'block';

  } 

   <!-- Moonlight + Warm Medium + Warm Dark -->
  
  else if (name1 === "Moonlight" && genetics2 === "Warm Dark I") {
    document.getElementById ("MoonlightWMWD").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Warm Dark II") {
    document.getElementById ("MoonlightWMWD").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Warm Dark III") {
    document.getElementById ("MoonlightWMWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && name2 === "Moonlight") {
    document.getElementById ("MoonlightWMWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && name2 === "Moonlight") {
    document.getElementById ("MoonlightWMWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && name2 === "Moonlight") {
    document.getElementById ("MoonlightWMWD").style.display = 'block';

  }

   <!-- Moonlight + Monochrome Light + Monochrome Medium -->
  
  else if (name1 === "Moonlight" && genetics2 === "Monochrome Light I") {
    document.getElementById ("MoonlightMoLMoM").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Monochrome Light II") {
    document.getElementById ("MoonlightMoLMoM").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Monochrome Light III") {
    document.getElementById ("MoonlightMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && name2 === "Moonlight") {
    document.getElementById ("MoonlightMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && name2 === "Moonlight") {
    document.getElementById ("MoonlightMoLMoM").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && name2 === "Moonlight") {
    document.getElementById ("MoonlightMoLMoM").style.display = 'block';

  }  

   <!-- Moonlight + All Monochrome -->
  
  else if (name1 === "Moonlight" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("MoonlightMonochrome").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("MoonlightMonochrome").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("MoonlightMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && name2 === "Moonlight") {
    document.getElementById ("MoonlightMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && name2 === "Moonlight") {
    document.getElementById ("MoonlightMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && name2 === "Moonlight") {
    document.getElementById ("MoonlightMonochrome").style.display = 'block';

  } 

   <!-- Moonlight + Monochrome Medium + Monochrome Dark -->
  
  else if (name1 === "Moonlight" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("MoonlightMoMMoD").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("MoonlightMoMMoD").style.display = 'block';

  }

  else if (name1 === "Moonlight" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("MoonlightMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && name2 === "Moonlight") {
    document.getElementById ("MoonlightMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && name2 === "Moonlight") {
    document.getElementById ("MoonlightMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && name2 === "Moonlight") {
    document.getElementById ("MoonlightMoMMoD").style.display = 'block';

  }

   <!-- Moonlight + Selene + All Light + All Medium -->
  
  else if (name1 === "Moonlight" && name2 === "Selene") {
    document.getElementById ("MoonlightSeleneLightMedium").style.display = 'block';

  }

  else if (name1 === "Selene" && name2 === "Moonlight") {
    document.getElementById ("MoonlightSeleneLightMedium").style.display = 'block';

  }

   <!-- Moonlight + All Bases -->
  
  else if (name1 === "Moonlight" && name2 === "Moonlight") {
    document.getElementById ("MoonlightAllBases").style.display = 'block';

  }

   <!-- Moonlight + Losna + All Medium + All Dark -->
  
  else if (name1 === "Moonlight" && name2 === "Losna") {
    document.getElementById ("MoonlightLosnaMediumDark").style.display = 'block';

  }

  else if (name1 === "Losna" && name2 === "Moonlight") {
    document.getElementById ("MoonlightLosnaMediumDark").style.display = 'block';

  }

   <!-- Losna + All Cool -->
  
  else if (name1 === "Losna" && genetics2 === "Cool Light I") {
    document.getElementById ("LosnaCool").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Cool Light II") {
    document.getElementById ("LosnaCool").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Cool Light III") {
    document.getElementById ("LosnaCool").style.display = 'block';

  }

  else if (genetics1 === "Cool Light I" && name2 === "Losna") {
    document.getElementById ("LosnaCool").style.display = 'block';

  }

  else if (genetics1 === "Cool Light II" && name2 === "Losna") {
    document.getElementById ("LosnaCool").style.display = 'block';

  }

  else if (genetics1 === "Cool Light III" && name2 === "Losna") {
    document.getElementById ("LosnaCool").style.display = 'block';

  } 

   <!-- Losna + Cool Medium + Cool Dark -->
  
  else if (name1 === "Losna" && genetics2 === "Cool Medium I") {
    document.getElementById ("LosnaCMCD").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Cool Medium II") {
    document.getElementById ("LosnaCMCD").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Cool Medium III") {
    document.getElementById ("LosnaCMCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium I" && name2 === "Losna") {
    document.getElementById ("LosnaCMCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium II" && name2 === "Losna") {
    document.getElementById ("LosnaCMCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Medium III" && name2 === "Losna") {
    document.getElementById ("LosnaCMCD").style.display = 'block';

  }

   <!-- Losna + Cool Dark -->
  
  else if (name1 === "Losna" && genetics2 === "Cool Dark I") {
    document.getElementById ("LosnaCD").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Cool Dark II") {
    document.getElementById ("LosnaCD").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Cool Dark III") {
    document.getElementById ("LosnaCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark I" && name2 === "Losna") {
    document.getElementById ("LosnaCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark II" && name2 === "Losna") {
    document.getElementById ("LosnaCD").style.display = 'block';

  }

  else if (genetics1 === "Cool Dark III" && name2 === "Losna") {
    document.getElementById ("LosnaCD").style.display = 'block';

  } 

   <!-- Losna + All Muted -->
  
  else if (name1 === "Losna" && genetics2 === "Muted Light I") {
    document.getElementById ("LosnaMuted").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Muted Light II") {
    document.getElementById ("LosnaMuted").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Muted Light III") {
    document.getElementById ("LosnaMuted").style.display = 'block';

  }

  else if (genetics1 === "Muted Light I" && name2 === "Losna") {
    document.getElementById ("LosnaMuted").style.display = 'block';

  }

  else if (genetics1 === "Muted Light II" && name2 === "Losna") {
    document.getElementById ("LosnaMuted").style.display = 'block';

  }

  else if (genetics1 === "Muted Light III" && name2 === "Losna") {
    document.getElementById ("LosnaMuted").style.display = 'block';

  }  

   <!-- Losna + Muted Medium + Muted Dark -->
  
  else if (name1 === "Losna" && genetics2 === "Muted Medium I") {
    document.getElementById ("LosnaMuMMuD").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Muted Medium II") {
    document.getElementById ("LosnaMuMMuD").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Muted Medium III") {
    document.getElementById ("LosnaMuMMuD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium I" && name2 === "Losna") {
    document.getElementById ("LosnaMuMMuD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium II" && name2 === "Losna") {
    document.getElementById ("LosnaMuMMuD").style.display = 'block';

  }

  else if (genetics1 === "Muted Medium III" && name2 === "Losna") {
    document.getElementById ("LosnaMuMMuD").style.display = 'block';

  } 

   <!-- Losna + Muted Dark -->
  
  else if (name1 === "Losna" && genetics2 === "Muted Dark I") {
    document.getElementById ("LosnaMuD").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Muted Dark II") {
    document.getElementById ("LosnaMuD").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Muted Dark III") {
    document.getElementById ("LosnaMuD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark I" && name2 === "Losna") {
    document.getElementById ("LosnaMuD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark II" && name2 === "Losna") {
    document.getElementById ("LosnaMuD").style.display = 'block';

  }

  else if (genetics1 === "Muted Dark III" && name2 === "Losna") {
    document.getElementById ("LosnaMuD").style.display = 'block';

  }

   <!-- Losna + All Warm -->
  
  else if (name1 === "Losna" && genetics2 === "Warm Light I") {
    document.getElementById ("LosnaWarm").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Warm Light II") {
    document.getElementById ("LosnaWarm").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Warm Light III") {
    document.getElementById ("LosnaWarm").style.display = 'block';

  }

  else if (genetics1 === "Warm Light I" && name2 === "Losna") {
    document.getElementById ("LosnaWarm").style.display = 'block';

  }

  else if (genetics1 === "Warm Light II" && name2 === "Losna") {
    document.getElementById ("LosnaWarm").style.display = 'block';

  }

  else if (genetics1 === "Warm Light III" && name2 === "Losna") {
    document.getElementById ("LosnaWarm").style.display = 'block';

  }  

   <!-- Losna + Warm Medium + Warm Dark -->
  
  else if (name1 === "Losna" && genetics2 === "Warm Medium I") {
    document.getElementById ("LosnaWMWD").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Warm Medium II") {
    document.getElementById ("LosnaWMWD").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Warm Medium III") {
    document.getElementById ("LosnaWMWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium I" && name2 === "Losna") {
    document.getElementById ("LosnaWMWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium II" && name2 === "Losna") {
    document.getElementById ("LosnaWMWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Medium III" && name2 === "Losna") {
    document.getElementById ("LosnaWMWD").style.display = 'block';

  } 

   <!-- Losna + Warm Dark -->
  
  else if (name1 === "Losna" && genetics2 === "Warm Dark I") {
    document.getElementById ("LosnaWD").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Warm Dark II") {
    document.getElementById ("LosnaWD").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Warm Dark III") {
    document.getElementById ("LosnaWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark I" && name2 === "Losna") {
    document.getElementById ("LosnaWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark II" && name2 === "Losna") {
    document.getElementById ("LosnaWD").style.display = 'block';

  }

  else if (genetics1 === "Warm Dark III" && name2 === "Losna") {
    document.getElementById ("LosnaWD").style.display = 'block';

  }

   <!-- Losna + All Monochrome -->
  
  else if (name1 === "Losna" && genetics2 === "Monochrome Light I") {
    document.getElementById ("LosnaMonochrome").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Monochrome Light II") {
    document.getElementById ("LosnaMonochrome").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Monochrome Light III") {
    document.getElementById ("LosnaMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light I" && name2 === "Losna") {
    document.getElementById ("LosnaMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light II" && name2 === "Losna") {
    document.getElementById ("LosnaMonochrome").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Light III" && name2 === "Losna") {
    document.getElementById ("LosnaMonochrome").style.display = 'block';

  }  

   <!-- Losna + Monochrome Medium + Monochrome Dark -->
  
  else if (name1 === "Losna" && genetics2 === "Monochrome Medium I") {
    document.getElementById ("LosnaMoMMoD").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Monochrome Medium II") {
    document.getElementById ("LosnaMoMMoD").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Monochrome Medium III") {
    document.getElementById ("LosnaMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium I" && name2 === "Losna") {
    document.getElementById ("LosnaMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium II" && name2 === "Losna") {
    document.getElementById ("LosnaMoMMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Medium III" && name2 === "Losna") {
    document.getElementById ("LosnaMoMMoD").style.display = 'block';

  } 

   <!-- Losna + Monochrome Dark -->
  
  else if (name1 === "Losna" && genetics2 === "Monochrome Dark I") {
    document.getElementById ("LosnaMoD").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Monochrome Dark II") {
    document.getElementById ("LosnaMoD").style.display = 'block';

  }

  else if (name1 === "Losna" && genetics2 === "Monochrome Dark III") {
    document.getElementById ("LosnaMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark I" && name2 === "Losna") {
    document.getElementById ("LosnaMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark II" && name2 === "Losna") {
    document.getElementById ("LosnaMoD").style.display = 'block';

  }

  else if (genetics1 === "Monochrome Dark III" && name2 === "Losna") {
    document.getElementById ("LosnaMoD").style.display = 'block';

  }

   <!-- Losna + Selene + All Bases -->
  
  else if (name1 === "Losna" && name2 === "Selene") {
    document.getElementById ("LosnaSeleneAllBases").style.display = 'block';

  }

  else if (name1 === "Selene" && name2 === "Losna") {
    document.getElementById ("LosnaSeleneAllBases").style.display = 'block';

  }

   <!-- Losna + Luna + All Medium + All Dark -->
  
  else if (name1 === "Losna" && name2 === "Luna") {
    document.getElementById ("LosnaLunaMediumDark").style.display = 'block';

  }

  else if (name1 === "Luna" && name2 === "Losna") {
    document.getElementById ("LosnaLunaMediumDark").style.display = 'block';

  }

   <!-- Losna + Moonlight + All Medium + All Dark -->
  
  else if (name1 === "Losna" && name2 === "Moonlight") {
    document.getElementById ("LosnaMoonlightMediumDark").style.display = 'block';

  }

  else if (name1 === "Moonlight" && name2 === "Losna") {
    document.getElementById ("LosnaMoonlightMediumDark").style.display = 'block';

  }

   <!-- Losna + All Dark -->
  
  else if (name1 === "Losna" && name2 === "Losna") {
    
    document.getElementById ("LosnaDark").style.display = 'block';
  
  }
    

  
  
  
  
  
  }
}

function getResultsObtention() {
  var sel = document.getElementById("base1select")
  var name= sel.options[sel.selectedIndex].text;
  
var divsToHide = document.getElementsByClassName('obtentionResultConditional');
    for(var i = 0; i < divsToHide.length; i++) {
      divsToHide[i].style.display = 'none';
    }
  
  if (name === "Glaucous") {
    document.getElementById ("CLIBasicObtain").style.display = 'block';
    document.getElementById ("CoolColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Honeydew") {
    document.getElementById ("CLICustomObtain").style.display = 'block';
    document.getElementById ("CoolColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Lavender") {
    document.getElementById ("CLIIBreedObtain").style.display = 'block';
    document.getElementById ("CoolColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Pale") {
    document.getElementById ("CLIICustomObtain").style.display = 'block';
    document.getElementById ("CoolColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Sky") {
    document.getElementById ("CLIISNBWObtain").style.display = 'block';
    document.getElementById ("CoolColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
    else if (name === "Opal") {
    document.getElementById ("CLIIIBreedObtain").style.display = 'block';
    document.getElementById ("CoolColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IIIRarity").style.display = 'block';
  }
  
  else if (name === "Blue") {
    document.getElementById ("CMICustomObtain").style.display = 'block';
    document.getElementById ("CoolColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Khaki") {
    document.getElementById ("CMIBasicObtain").style.display = 'block';
    document.getElementById ("CoolColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Diorite") {
    document.getElementById ("CMIISNBWObtain").style.display = 'block';
    document.getElementById ("CoolColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Galena") {
    document.getElementById ("CMIICustomObtain").style.display = 'block';
    document.getElementById ("CoolColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Maltese") {
    document.getElementById ("CMIIBreedObtain").style.display = 'block';
    document.getElementById ("CoolColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Grulla") {
    document.getElementById ("CMIIIBreedObtain").style.display = 'block';
    document.getElementById ("CoolColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IIIRarity").style.display = 'block';
  }
  
  else if (name === "Marengo") {
    document.getElementById ("CDIBasicObtain").style.display = 'block';
    document.getElementById ("CoolColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Skarn") {
    document.getElementById ("CDICustomObtain").style.display = 'block';
    document.getElementById ("CoolColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Denim") {
    document.getElementById ("CDIIBreedObtain").style.display = 'block';
    document.getElementById ("CoolColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Lilac") {
    document.getElementById ("CDIICustomObtain").style.display = 'block';
    document.getElementById ("CoolColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Nocturne") {
    document.getElementById ("CDIISNBWObtain").style.display = 'block';
    document.getElementById ("CoolColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Serpentine") {
    document.getElementById ("CDIIIBreedObtain").style.display = 'block';
    document.getElementById ("CoolColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IIIRarity").style.display = 'block';
  }
  
  else if (name === "Apricot") {
    document.getElementById ("MuLICustomObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Beige" || name === "Cream Lighter") {
    document.getElementById ("MuLIBasicObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
 
  else if (name === "Shell") {
    document.getElementById ("MuLIBreedObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Almond" || name === "Buff") {
    document.getElementById ("MuLIICustomObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Feldspar") {
    document.getElementById ("MuLIISNBWObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Isabel" || name === "Peach") {
    document.getElementById ("MuLIIBreedObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Teardrop" || name === "Zircon") {
    document.getElementById ("MuLIIIBreedObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IIIRarity").style.display = 'block';
  }
  
  else if (name === "Honey") {
    document.getElementById ("MuMICustomObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Cream" || name === "Cream Darker") {
    document.getElementById ("MuMIBasicObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
 
  else if (name === "Willow") {
    document.getElementById ("MuMIBreedObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Sandy" || name === "Vanilla") {
    document.getElementById ("MuMIICustomObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Tuff") {
    document.getElementById ("MuMIISNBWObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Antler" || name === "Blonde") {
    document.getElementById ("MuMIIBreedObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Lily" || name === "Pearl") {
    document.getElementById ("MuMIIIBreedObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IIIRarity").style.display = 'block';
  }
  
  else if (name === "Chocolate") {
    document.getElementById ("MuDICustomObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Caramel" || name === "Dark Brown") {
    document.getElementById ("MuDIBasicObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
 
  else if (name === "Chestnut") {
    document.getElementById ("MuDIBreedObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Oroide" || name === "Pecan") {
    document.getElementById ("MuDIICustomObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Ebony") {
    document.getElementById ("MuDIISNBWObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Cocoa" || name === "Sepia") {
    document.getElementById ("MuDIIBreedObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Seal" || name === "Bronze") {
    document.getElementById ("MuDIIIBreedObtain").style.display = 'block';
    document.getElementById ("MutedColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IIIRarity").style.display = 'block';
  }
  
  else if (name === "Goldenrod" || name === "Gold Lighter") {
    document.getElementById ("WLIBasicObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Magnolia") {
    document.getElementById ("WLICustomObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Tumbleweed") {
    document.getElementById ("WLIBreedObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Arkose" || name === "Jacinthe") {
    document.getElementById ("WLIIBreedObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Calcite" || name === "Ducat") {
    document.getElementById ("WLIICustomObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Yellow") {
    document.getElementById ("WLIISNBWObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Piasa" || name === "Tombac") {
    document.getElementById ("WLIIIBreedObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IIIRarity").style.display = 'block';
  }
  
  else if (name === "Gold" || name === "Gold Darker") {
    document.getElementById ("WMIBasicObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Red") {
    document.getElementById ("WMICustomObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Brass") {
    document.getElementById ("WMIBreedObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Doubloon" || name === "Saffron") {
    document.getElementById ("WMIIBreedObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Sulphur" || name === "Tawny") {
    document.getElementById ("WMIICustomObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Rust") {
    document.getElementById ("WMIISNBWObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Mojave" || name === "Wulfenite") {
    document.getElementById ("WMIIIBreedObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IIIRarity").style.display = 'block';
  }
  
  else if (name === "Fox") {
    document.getElementById ("FoxObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IIIRarity").style.display = 'block';
  }
  
  else if (name === "Amber" || name === "Brown") {
    document.getElementById ("WDIBasicObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Liver") {
    document.getElementById ("WDICustomObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Henna") {
    document.getElementById ("WDIBreedObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Auburn" || name === "Sarder") {
    document.getElementById ("WDIIBreedObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Dinar" || name === "Russet") {
    document.getElementById ("WDIICustomObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Dravite") {
    document.getElementById ("WDIISNBWObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Pyrope" || name === "Realgar") {
    document.getElementById ("WDIIIBreedObtain").style.display = 'block';
    document.getElementById ("WarmColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IIIRarity").style.display = 'block';
  }
  
  else if (name === "Snow" || name === "White") {
    document.getElementById ("MoLIBasicObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Dust") {
    document.getElementById ("MoLICustomObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Quartz") {
    document.getElementById ("MoLIBreedObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Melchior" || name === "Rime" || name === "Titanium") {
    document.getElementById ("MoLIIBreedObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Siqoq") {
    document.getElementById ("MoLIICustomObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Nepheline") {
    document.getElementById ("MoLIISNBWObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Argent" || name === "Chromium") {
    document.getElementById ("MoLIIIBreedObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("LightShade").style.display = 'block';
    document.getElementById ("IIIRarity").style.display = 'block';
  }
  
  else if (name === "Ashen" || name === "Birch") {
    document.getElementById ("MoMIBasicObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Howlite") {
    document.getElementById ("MoMICustomObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Gray Lighter") {
    document.getElementById ("MoMIBreedObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Acanthite" || name === "Silver" || name === "Steele") {
    document.getElementById ("MoMIIBreedObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Chert") {
    document.getElementById ("MoMIICustomObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Sterling") {
    document.getElementById ("MoMIISNBWObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Flint" || name === "Striped Flint") {
    document.getElementById ("MoMIIIBreedObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("MediumShade").style.display = 'block';
    document.getElementById ("IIIRarity").style.display = 'block';
  }
  
  else if (name === "Black" || name === "Gray") {
    document.getElementById ("MoDIBasicObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Jet") {
    document.getElementById ("MoDICustomObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Gray Darker") {
    document.getElementById ("MoDIBreedObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IRarity").style.display = 'block';
  }
  
  else if (name === "Obsidian" || name === "Sphalerite") {
    document.getElementById ("MoDIIBreedObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Obsidian" || name === "Pewter") {
    document.getElementById ("MoDIICustomObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Biotite") {
    document.getElementById ("MoDIISNBWObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IIRarity").style.display = 'block';
  }
  
  else if (name === "Iridium" || name === "Slate") {
    document.getElementById ("MoDIIIBreedObtain").style.display = 'block';
    document.getElementById ("MonochromeColour").style.display = 'block';
    document.getElementById ("DarkShade").style.display = 'block';
    document.getElementById ("IIIRarity").style.display = 'block';
  }
  
  else if (name === "Selene") {
    document.getElementById ("SeleneObtain").style.display = 'block';
    document.getElementById ("SeleneColour").style.display = 'block';
    document.getElementById ("SpecialShade").style.display = 'block';
    document.getElementById ("SpecialRarity").style.display = 'block';
  }
  
  else if (name === "Luna") {
    document.getElementById ("LunaObtain").style.display = 'block';
    document.getElementById ("LunaColour").style.display = 'block';
    document.getElementById ("SpecialShade").style.display = 'block';
    document.getElementById ("SpecialRarity").style.display = 'block';
  }
  
  else if (name === "Moonlight") {
    document.getElementById ("MoonlightObtain").style.display = 'block';
    document.getElementById ("MoonlightColour").style.display = 'block';
    document.getElementById ("SpecialShade").style.display = 'block';
    document.getElementById ("SpecialRarity").style.display = 'block';
  }
  
  else if (name === "Losna") {
    document.getElementById ("LosnaObtain").style.display = 'block';
    document.getElementById ("LosnaColour").style.display = 'block';
    document.getElementById ("SpecialShade").style.display = 'block';
    document.getElementById ("SpecialRarity").style.display = 'block';
  }

}




