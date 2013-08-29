function startGame() {
            var data = "<table cellpadding= 3 ; cellspacing = 1>";
            for(var i=0;i<7;i++) {
                data=data+"<tr>";
                
                for(var j=0;j<7;j++){
                    data=data+"<td>";
                        if (i<2 && j>=2 && j<=4) {
                            data=data+"<a id= '"+i+j+"' href='#'><img src='Assets/images/coin.png' onclick= 'return coinClicked("+i+","+j+")'/> </a>";
                        }
                        if (i==3 && j==3) {
                            data=data+"<a id= '"+i+j+"' href='#'><img src='Assets/images/empty.png' onclick= 'return coinClicked("+i+","+j+")'/> </a>";
                        }
                        else if(i>=2 && i<=4) {
                            data=data+"<a id= '"+i+j+"' href='#'><img src='Assets/images/coin.png' onclick= 'return coinClicked("+i+","+j+")'/> </a>";
                        }
                        if (i>=5 && j>=2 && j<=4 ) {
                            data=data+"<a id= '"+i+j+"' href='#'><img src='Assets/images/coin.png' onclick= 'return coinClicked("+i+","+j+")'/> </a>";
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
        
