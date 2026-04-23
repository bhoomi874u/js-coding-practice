var arr=[1,2,34,5];
var sum=0;
for(var i=0;i<arr.length;i++){
sum=arr[i]+sum;

}
console.log(sum);

//Another way to calculate sum of array element 
var arr1 = [1,2,34,5];
var s = 0;

arr1.forEach((n) => {
    s += n + n;
});

console.log(s);

//Thired way to calculate sum of array

var arr3=[1,2,34,5];
var res=arr3.map(n=>n+n);

console.log(res)
