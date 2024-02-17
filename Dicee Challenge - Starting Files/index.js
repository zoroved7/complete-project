var randonNumber1 = Math.floor(Math.random() * 6) + 1;
var diceNumber = "images/"+ "dice"+ randonNumber1 + ".png";
var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src" ,diceNumber );
var randonNumber2 = Math.floor(Math.random() * 6) + 1;
var diceNumber2 = "images/"+ "dice"+ randonNumber2 + ".png";
var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src" ,diceNumber2 );
if(randonNumber1 > randonNumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
    
}
else if (randonNumber2 > randonNumber1){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Tie";
}

