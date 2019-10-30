function startGame(){
    for(var i=0;i<9;i=i+1){
        clearBox(i+1);
    }
    document.turn="X";
    if(Math.random() < 0.5){
        document.turn="O";
    }
    document.winner=null;  
    setMessage(document.turn+" gets to start.");
}
function setMessage(sms){
    document.getElementById("message").innerText=sms;
}
function nextMove(square){
    if(document.winner!=null){
        setMessage(document.winner+" already won the game!");
    }
    else if(square.innerText==""){
        square.innerText=document.turn;
        switchTurn();
    }
    else{
        setMessage("Invalid move!");
    }
    
}
function clearBox(num){
    document.getElementById("s"+num).innerText="";
}
function switchTurn(){
    if(checkForWinner(document.turn)){
        setMessage("Congratulations "+document.turn+" You win!");
        document.winner=document.turn;
    }
    else if(document.turn=="X"){
        document.turn="O";
        setMessage(document.turn+"'s turn!");
    }
    else{
        document.turn="X";
        setMessage(document.turn+"'s turn!");
    }
}
function checkForWinner(move){
    var result=false;
    if(checkRow(1,2,3,move)==true ||checkRow(4,5,6,move)==true ||checkRow(7,8,9,move)==true ||checkRow(1,4,7,move)==true||checkRow(2,5,8,move)==true || checkRow(3,6,9,move)==true || checkRow(1,5,9,move)==true || checkRow(3,5,7,move)==true){
        result=true;
    }
    return result;
}
function checkRow(a,b,c,move){
    var result=false;
    if(getBox(a)==move && getBox(b)==move && getBox(c)==move){
        result =true;
    }
    return result;
}
function getBox(boxnum){
    return document.getElementById("s"+boxnum).innerText;
}