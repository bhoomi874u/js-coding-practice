// var arr = [10,20,30];
// //var reverse=[];
// for(var i=arr.length-1;i>=0;i--){//O(n)
//   reverse.push(arr[i]);
// }
console.log(arr);

var arr2=[40,50,60];
arr2.reverse();
console.log(arr2);

function reverseArray(arr){
    var reverse=[];
    for(var i=arr.length-1;i>=0;i--){
        reverse.push(arr[i]);
    }   
    return reverse;
}
var arr3=[70,80,90];
console.log(reverseArray(arr3));




