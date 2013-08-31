
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
                           data=data+"<span><a id= '"+i+j+"' href='#'><img class='box' id='box"+i+j+"' src='Assets/images/coin.png' style='border:none' onclick= 'return coinClicked("+i+","+j+")'/> </a></span>";
                        }
                        if (x == 0) {
                            data=data+"<a id= '"+i+j+"' href='#'><img id='box"+i+j+"' src='Assets/images/empty.png' onclick= 'return coinClicked("+i+","+j+")'/> </a>";
                        }
                        
                    data=data+"</td>";
                    }
                    data=data+"</tr>";
            }
            data+="</table>";
            document.getElementById("gameBoard").innerHTML = data;
            
        
}

$(".box").click(function(e){
   alert("hello");         
            
});

function coinClicked(x,y){
            if (selected_coin==0) {
                        selected_coin=x+"."+y;
                        var a ="box"+x+y;
                        alert(a);
                        $('#box"+x+y+"').css("border","1px solid #021a40");
                        return;
            }
            if (selected_coin!=0) {
                        jumpCoin(x,y);
            }
            
}

function jumpCoin(x,y) {
            
            if (x == parseInt(selected_coin[0]) && y==parseInt(selected_coin[2]) + 2 && coinStatus[x][y] == 0 && coinStatus[x][y-1]==1) {
                        coinStatus[x][y]=1;
                        coinStatus[x][y-2]=0;
                        coinStatus[x][y-1]=0;
                        loadCoins();
                        selected_coin=0;
                        
                        
            }
            if (x == parseInt(selected_coin[0]) && y==parseInt(selected_coin[2]) - 2 && coinStatus[x][y] == 0 && coinStatus[x][y+1]==1) {
                        coinStatus[x][y]=1;
                        coinStatus[x][y+2]=0;
                        coinStatus[x][y+1]=0;
                        loadCoins();
                        selected_coin=0;
            }
            if (x == parseInt(selected_coin[0])+2 && y==parseInt(selected_coin[2]) && coinStatus[x][y] == 0 && coinStatus[x-1][y]==1) {
                        coinStatus[x][y]=1;
                        coinStatus[x-2][y]=0;
                        coinStatus[x-1][y]=0;
                        loadCoins();
                        selected_coin=0;
            }
            if (x == parseInt(selected_coin[0]-2) && y==parseInt(selected_coin[2]) && coinStatus[x][y] == 0 && coinStatus[x+1][y]==1) {
                        coinStatus[x][y]=1;
                        coinStatus[x+2][y]=0;
                        coinStatus[x+1][y]=0;
                        loadCoins();
                        selected_coin=0;
            }
            else{
                        selected_coin=0;
                        coinClicked(x,y);
            }
            
}
        
