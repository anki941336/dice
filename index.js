

var randomno1 = Math.floor(Math.random()*6)+1;
var randomdiceimage = "i"+randomno1+".jfif";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdiceimage);

var randomno2 = Math.floor(Math.random()*6)+1;
var randomdiceimage ="i"+randomno2+".jfif";
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",randomdiceimage);

if(randomno1 > randomno2) {
  document.querySelector("h3").innerHTML = "PLAYER 1 WINS";
}
else if (randomno1 < randomno2) {
  document.querySelector("h3").innerHTML = "PLAYER 2 WINS";
}
else {
  document.querySelector("h3").innerHTML = "DRAWS";
}
