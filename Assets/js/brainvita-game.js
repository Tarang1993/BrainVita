

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
                    data=data+"<td>";
                        var x = coinStatus[i][j];
            
                        if (x == 1) {
                           data=data+"<a id= '"+i+j+"' href='#'><img src='Assets/images/coin.png' onclick= 'return coinClicked("+i+","+j+")'/> </a>";
                        }
                        if (x == 0) {
                            data=data+"<a id= '"+i+j+"' href='#'><img src='Assets/images/empty.png' onclick= 'return coinClicked("+i+","+j+")'/> </a>";
                        }
                        
                    data=data+"</td>";
                    }
                    data=data+"</tr>";
            }
            data+="</table>";
            document.getElementById("gameBoard").innerHTML = data;
            
        
}

function coinClicked(x,y){
    
}
        
