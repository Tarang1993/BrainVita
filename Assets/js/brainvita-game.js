var coinsLeft=32;
var moves=0;
var selected_coin=0;
var status_message="";
var sound = new buzz.sound("Assets/sounds/coin.wav");
var error = new buzz.sound("Assets/sounds/error.wav");
var select = new buzz.sound("Assets/sounds/select.wav");
sound.setVolume(100);
var coinStatus = new Array(
                           new Array(-1,-1,1,1,1,-1,-1),
                           new Array(-1,-1,1,1,1,-1,-1),
                           new Array(1,1,1,1,1,1,1),
                           new Array(1,1,1,0,1,1,1),
                           new Array(1,1,1,1,1,1,1),
                           new Array(-1,-1,1,1,1,-1,-1),
                           new Array(-1,-1,1,1,1,-1,-1)
                          );
              


function startGame() {
            loadCoins();
            var coins = "Coins Left: 32";
            document.getElementById("coins_left").innerHTML = coins;
            var move = "Moves: 0";
            document.getElementById("moves").innerHTML = move;
}

function loadCoins() {
            var data = "<table cellpadding= 3 ; cellspacing = 1>";
            for(var i=0;i<7;i++) {
                data=data+"<tr>";
                
                for(var j=0;j<7;j++){
                    data=data+"<td id='box'"+i+j+">";
                        var x = coinStatus[i][j];
            
                        if (x == 1) {
                           data=data+"<a id= '"+i+j+"' href='#'><img id='box"+i+j+"' src='Assets/images/coin.png' onmouseover='return highlightBox("+i+","+j+")' onmouseout='return deselectBox("+i+","+j+")'onclick= 'return coinClicked("+i+","+j+",this)'/> </a>";
                        }
                        if (x == 0) {
                            data=data+"<a id= '"+i+j+"' href='#'><img id='box"+i+j+"' src='Assets/images/empty.png' onmouseover='return highlightBox("+i+","+j+")' onmouseout='return deselectBox("+i+","+j+")' onclick= 'return coinClicked("+i+","+j+",this)'/> </a>";
                        }
                        
                    data=data+"</td>";
                    }
                    data=data+"</tr>";
            }
            data+="</table>";
            document.getElementById("gameBoard").innerHTML = data;
            
        
}



function coinClicked(x,y,el){
            var id = $(el).attr("id");
            if (selected_coin==0) {
                        selected_coin=x+"."+y;
                        $('#'+id).css("background-color","green");
                        if (status_message!="Invalid move! Try again!") {
                                    status_message="Selecting a coin.";
                                    select.play();
                                    $("#status_message").css("color","green");
                                    document.getElementById("status_message").innerHTML=status_message;
                        }
                        return;
            }
            if (selected_coin!=0) {
                        var i = selected_coin[0];
                        var j = selected_coin[2];
                        var old_id = 'box'+i+j;
                        $('#'+old_id).css("background-color","rgb(232,232,170)");
                        jumpCoin(x,y,el);
            }
            
}

function jumpCoin(x,y,el) {
            
            if (x == parseInt(selected_coin[0]) && y==parseInt(selected_coin[2]) + 2 && coinStatus[x][y] == 0 && coinStatus[x][y-1]==1) {
                        coinStatus[x][y]=1;
                        coinStatus[x][y-2]=0;
                        coinStatus[x][y-1]=0;
                        var new_id = 'box'+x+y;
                        sound.play();
                        loadCoins();
                        $('#'+new_id).css("background-color","rgb(232,232,170)");
                        selected_coin=0;
                        coinsLeft--;
                        moves++;
                        var coin = "Coins Left: "+coinsLeft;
                        var move = "Moves :"+moves;
                        document.getElementById("coins_left").innerHTML= coin;
                        document.getElementById("moves").innerHTML= move;
                        status_message="Valid move! Coin removed.";
                        $("status_message").css("color","green");
                        document.getElementById("status_message").innerHTML=status_message;
                        return;
            }
            if (x == parseInt(selected_coin[0]) && y==parseInt(selected_coin[2]) - 2 && coinStatus[x][y] == 0 && coinStatus[x][y+1]==1) {
                        coinStatus[x][y]=1;
                        coinStatus[x][y+2]=0;
                        coinStatus[x][y+1]=0;
                        var new_id = 'box'+x+y;
                        sound.play();
                        loadCoins();
                        $('#'+new_id).css("background-color","rgb(232,232,170)");
                        selected_coin=0;
                        coinsLeft--;
                        moves++;
                        var coin = "Coins Left: "+coinsLeft;
                        var move = "Moves :"+moves;
                        document.getElementById("coins_left").innerHTML= coin;
                        document.getElementById("moves").innerHTML= move;
                        status_message="Valid move! Coin removed.";
                        $("status_message").css("color","green");
                        document.getElementById("status_message").innerHTML=status_message;
                        return;
            }
            if (x == parseInt(selected_coin[0])+2 && y==parseInt(selected_coin[2]) && coinStatus[x][y] == 0 && coinStatus[x-1][y]==1) {
                        coinStatus[x][y]=1;
                        coinStatus[x-2][y]=0;
                        coinStatus[x-1][y]=0;
                        var new_id = 'box'+x+y;
                        sound.play();
                        loadCoins();
                        $('#'+new_id).css("background-color","rgb(232,232,170)");
                        selected_coin=0;
                        coinsLeft--;
                        moves++;
                        var coin = "Coins Left: "+coinsLeft;
                        var move = "Moves :"+moves;
                        document.getElementById("coins_left").innerHTML= coin;
                        document.getElementById("moves").innerHTML= move;
                        status_message="Valid move! Coin removed.";
                        $("status_message").css("color","green");
                        document.getElementById("status_message").innerHTML=status_message;
                        return;
            }
            if (x == parseInt(selected_coin[0]-2) && y==parseInt(selected_coin[2]) && coinStatus[x][y] == 0 && coinStatus[x+1][y]==1) {
                        coinStatus[x][y]=1;
                        coinStatus[x+2][y]=0;
                        coinStatus[x+1][y]=0;
                        var new_id = 'box'+x+y;
                        sound.play();
                        loadCoins();
                        $('#'+new_id).css("background-color","rgb(232,232,170)");
                        selected_coin=0;
                        coinsLeft--;
                        moves++;
                        var coin = "Coins Left: "+coinsLeft;
                        var move = "Moves :"+moves;
                        document.getElementById("coins_left").innerHTML= coin;
                        document.getElementById("moves").innerHTML= move;
                        status_message="Valid move! Coin removed.";
                        $("status_message").css("color","green");
                        document.getElementById("status_message").innerHTML=status_message;
                        return;
            }
            else{
                        selected_coin=0;
                        if (coinStatus[x][y]==0) {
                                    status_message="Invalid move! Try again!";
                                    error.play();
                                    moves++;
                                    document.getElementById("moves").innerHTML = "Moves: "+moves;
                                    $("status_message").css("color","red");
                                    document.getElementById("status_message").innerHTML=status_message;
                        }
                        else{
                                    status_message="Selecting a coin.."
                                    $("status_message").css("color","green");
                        }
                        coinClicked(x,y,el);
                        return;
            }
            
}

$("#header").mouseover(function() {
            $("#header").css("text-shadow","0 0 10px green");     
});

$("#header").mouseout(function() {
            $("#header").css("text-shadow","none");     
});

function highlightBox(x,y) {
            var id = 'box'+x+y;
            $('#'+id).css("background-color","#999900");
}
function deselectBox(x,y) {
            var id = 'box'+x+y;
            if(selected_coin!=x+"."+y){
            $('#'+id).css("background-color","rgb(232,232,170)");
            }
            
}

function resetGame(){
            coinsLeft=32;
            moves=0;
            status_message="";
            document.getElementById("coins_left").innerHTML= "Coins Left: "+coinsLeft;
            document.getElementById("moves").innerHTML= "Moves: "+moves;
            document.getElementById("status_message").innerHTML=status_message;
            coinStatus = new Array(
                           new Array(-1,-1,1,1,1,-1,-1),
                           new Array(-1,-1,1,1,1,-1,-1),
                           new Array(1,1,1,1,1,1,1),
                           new Array(1,1,1,0,1,1,1),
                           new Array(1,1,1,1,1,1,1),
                           new Array(-1,-1,1,1,1,-1,-1),
                           new Array(-1,-1,1,1,1,-1,-1)
                          );
            loadCoins();
}
$(document).ready(function(e){
            if (coinsLeft==0) {
                        status_message="Congratulation! You have won the game";
                        document.getElementById("status_message").innerHTML=status_message;
            }
});


