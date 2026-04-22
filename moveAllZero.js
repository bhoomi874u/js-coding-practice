var arr=[2,3,1,0,0,6,0,5];
var index=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]!==0){
   arr[index]=arr[i];
   index++;

    }
}
    for(var i=index;i<arr.length;i++){
        arr[i]=0;
    }

console.log(arr);
// console.log(arr[index]);
//Another way to move all zero at the end
var arr=[1,4,6,3,0, 0, 3,5];
var res=arr.reduce((acc,cur)=>{
    
})