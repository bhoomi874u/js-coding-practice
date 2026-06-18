// let str="LVIII";
// var result=0;
// var map={I:1,V:5,X:10,L:50,C:100,D:500 ,M:1000};
// for(let i=0;i<str.length;i++){
//     if (map[str[i]]>map[str[i+1]]){
//       result= result-map[str[i]]
      

//     }
//     else if(map[str[i]]<map[str[i+1]]){
//         result= result+map[str[i]]
//     }

// }
// console.log(result)

function romanInteger(str){
    var map={I:1,V:5,X:10,L:50,C:100,D:500 ,M:1000};
    let result=0;
    for(let i=0;i<str.length;i++){
        if (map[str[i]]<map[str[i+1]]){
      result=  result-map[str[i]]
      

    }
    else {
        result= result+map[str[i]]
    }

    }
        return result;
}
console.log (romanInteger ("MCMXCIV"));