document.getElementById("start").addEventListener("click",function(){
    makeSound();
    let p1=Math.floor(Math.random()*6)+1;  //math.floor as it will also give numbers in decimal and we don't want 0 so +1
    let p2=Math.floor(Math.random()*6)+1;
    document.getElementById("p1").src=`assets/${p1}.png`;
    document.getElementById("p2").src=`assets/${p2}.png`; 
    if (p1>p2){
        document.querySelector("h1").textContent="🎉🤾‍♀️🎲🏌️🎉 PLAYER 1 WINS 🎉🤾‍♀️🎲🏌️🎉";
    }else if (p1<p2){
        document.querySelector("h1").textContent="🎉🤾‍♀️🎲🏌️🎉 PLAYER 2 WINS 🎉🤾‍♀️🎲🏌️🎉";
    }else{
        document.querySelector("h1").textContent="😟🤾‍♀️🎲🏌️🙁 MATCH DRAW 😟🤾‍♀️🎲🏌️🙁";
    }
}) 


function makeSound(){
    let audio=new Audio("assets/b.mp3");
    audio.play();
}