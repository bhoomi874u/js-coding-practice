var arr=["a", "b", "a","c", "a","b","d","c"];
var frq={};
for(var i=0;i<arr.length;i++){
if(frq[arr[i]]){
    frq[arr[i]]++;
}
else{
    frq[arr[i]]=1
}

}
console.log(frq);