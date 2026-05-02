//sort the array without using sort function 
var arr=[5,7,18,20,8,2];
for(var i=0;i<arr.length;i++){
    for(var  j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            var temp=arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
console.warn(arr);
        }
    }
}

var arr=[5,7,18,20,8,2];
var res= arr.sort(function(a,b){
    return a-b;
})