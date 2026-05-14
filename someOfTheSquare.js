var  x=3;
var sum=0;
var squ=0; 
var powerSum=0; 
var diff=0;
for(var i=1;i<=x;i++){
   
        sum=sum+i;

    }


  console.log(sum);
  squ=sum*sum
 console.log(squ);
for(let i=0;i<=x;i++){
  powerSum=powerSum+Math.pow(i,2);
 }
 console.log(powerSum);

 diff=squ-powerSum;
 console.log(diff);