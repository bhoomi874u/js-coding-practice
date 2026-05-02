var arr=[2,3,[5,6],[7,8]];
var maxSum=arr[0];
var curentSum=[0];
for(var i=0;i<arr.length;i++){
    curentSum=Math.max(arr[i],curentSum+arr[i]);
    maxSum=Math.max(maxSum,curentSum);
}
console.log(maxSum);