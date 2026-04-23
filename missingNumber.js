var arr=[1,2,3,4,5];
var actualSum=0;
for(var i=0;i<arr.length;i++){
    var n=5;
  var expectedSum=(n*(n+1))/2;
    actualSum=arr[i]+actualSum;
    var total= expectedSum- actualSum;
     console.log(total);
     

}