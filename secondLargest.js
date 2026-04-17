var arr=[3, 34, 5, 9 ,29];
var max=-Infinity;
var secondMax=-Infinity;
for(var i=0;i<arr.length;i++){
    if(arr[i]>max){
        secondMax=max;
        max=arr[i];
        
    }
    else if(arr[i]>secondMax && arr[i] !==max){
        secondMax=arr[i];
        
    }
     }
console.log("Second largest number in the array is: "+secondMax);

