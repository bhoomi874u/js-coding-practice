var num=[2,7,11,15];
var target=9;
for(var i=0;i<num.length;i++){
    for(var j=i+1;j<num.length;j++){
        if(num[i]+num[j]===target){
            console.log(i,j);

        }
        
           
        
    }

}
 console.log("No such pair exists");
