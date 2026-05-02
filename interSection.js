var arr1=[2,4,5,6,7,8];
var arr2=[2,9,19,7,8,5];
var res=[];
for(var i=0;i<arr1.length;i++){
if(arr2.includes(arr1[i])){
    res.push(arr1[i]);
}

}
console.log(res);

//another way to find intersection of array
 var  arr3=[2,4,5,6,7,8];
var arr4=[2,9,19,7,8,5];
var result=arr3.filter(value=>arr4.includes(value))
console.log(result)