var arr=[1,2,2,4,5,6,6];
var uniqueArr=[];
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]&&uniqueArr.indexOf(arr[i])===-1){
            uniqueArr.push(arr[i]);
           

        }
    }
}
console.log("unique array is: "+uniqueArr);

//Second way to remove duplicates from an array
var arr2=[1,2,2,4,5,6,6];
var unique= new Set(arr2);
console.log("unique array is:"+[...unique])
//Thired method to remove duplicates from an array
 var arr3=[1,2,2,4,5,6,6];
 var uniqueArr3=arr3.filter((item,index)=>{
    return arr3.indexOf(item)===index;
 })
console.log("unique array is: "+uniqueArr3);