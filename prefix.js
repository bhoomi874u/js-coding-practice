let str=["flower","flow","flight"];
let prefix="";
for(let i=0;i<str[0].length;i++){
    for(let j=1;j<str.length;j++){
        if(str[0][i]===str[j][i]){
             if(j===str.length-1){
                prefix+=str[0][i];
                console.log(prefix);
             }
        }
        else{
            console.log("No common prefix exists");
            break;
        }
    }
}
 