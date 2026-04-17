var arr=[5,9,7,12,50];

for(var i=0;i<arr.length;i++){
  for(var j=i+1;j<arr.length;j++){
    var max=arr[0];
if(arr[i]>arr[j]){
    max=arr[i];
    
  }
  else{
    max=arr[j];
    }
  }
}
console.log("Largest number in the array is: "+max);
// Another way to find the largest number in an array
var arr2=[5,9,7,12,50];
var largest=arr2.reduce((a,b)=>{
    return a>b?a:b;
})
console.log("Largest number : "+largest);