
var selected_coin=0;
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
            
}

function loadCoins() {
            var data = "<table cellpadding= 3 ; cellspacing = 1>";
            for(var i=0;i<7;i++) {
                data=data+"<tr>";
                
                for(var j=0;j<7;j++){
                    data=data+"<td id='box'"+i+j+">";
                        var x = coinStatus[i][j];
            
                        if (x == 1) {
                           data=data+"<a id= '"+i+j+"' href='#'><img id='box"+i+j+"' src='Assets/images/coin.png'  onclick= 'return coinClicked("+i+","+j+",this)'/> </a>";
                        }
                        if (x == 0) {
                            data=data+"<a id= '"+i+j+"' href='#'><img id='box"+i+j+"' src='Assets/images/empty.png'  onclick= 'return coinClicked("+i+","+j+",this)'/> </a>";
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
                        loadCoins();
                        $('#'+new_id).css("background-color","rgb(232,232,170)");
                        selected_coin=0;
                        return;
            }
            if (x == parseInt(selected_coin[0]) && y==parseInt(selected_coin[2]) - 2 && coinStatus[x][y] == 0 && coinStatus[x][y+1]==1) {
                        coinStatus[x][y]=1;
                        coinStatus[x][y+2]=0;
                        coinStatus[x][y+1]=0;
                        var new_id = 'box'+x+y;
                        loadCoins();
                        $('#'+new_id).css("background-color","rgb(232,232,170)");
                        selected_coin=0;
                        return;
            }
            if (x == parseInt(selected_coin[0])+2 && y==parseInt(selected_coin[2]) && coinStatus[x][y] == 0 && coinStatus[x-1][y]==1) {
                        coinStatus[x][y]=1;
                        coinStatus[x-2][y]=0;
                        coinStatus[x-1][y]=0;
                        var new_id = 'box'+x+y;
                        loadCoins();
                        $('#'+new_id).css("background-color","rgb(232,232,170)");
                        selected_coin=0;
                        return;
            }
            if (x == parseInt(selected_coin[0]-2) && y==parseInt(selected_coin[2]) && coinStatus[x][y] == 0 && coinStatus[x+1][y]==1) {
                        coinStatus[x][y]=1;
                        coinStatus[x+2][y]=0;
                        coinStatus[x+1][y]=0;
                        var new_id = 'box'+x+y;
                        loadCoins();
                        $('#'+new_id).css("background-color","rgb(232,232,170)");
                        selected_coin=0;
                        return;
            }
            else{
                        selected_coin=0;
                        coinClicked(x,y,el);
                        return;
            }
            
}
        
