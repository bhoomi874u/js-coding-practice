var num1=[1,2,3,0,0,0];
var num2=[2,4,5];
for(var i=0;i<num1.length;i++){
    if(num1.includes(0)|| num2.includes(0)){
        num1.pop();
        num2.pop();

    }
}
    var merge=num1.concat(num2);
    //var merge=[...num1,...num2]
    //console.log(merge);

for(var k=0;k<merge.length;k++){
    for(var l=k+1;l<merge.length;l++){
    if(merge[k]>merge[l]){
var temp=merge[k];
merge[k]=merge[l];
merge[l]=temp;

    }

}
}
console.log(merge);
