var arr=["a","b","b","c","d"];
 var frq={};
for(var i =0;i<arr.length;i++){
   if(frq[arr[i]]){
       frq[arr[i]]++;
   }
    else {
        frq[arr[i]]=1;
    }
  
}
for(var k in frq){
    if(frq[k]>1){
        console.log(k);
        break;
    }
}