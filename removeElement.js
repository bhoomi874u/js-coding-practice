var removeElement=[0,1,2,2,3,0,4,2];
var val=2;
var k=0;
for(var i=0;i<removeElement.length;i++){
    if(removeElement[i]!==val){
removeElement[k]=removeElement[i];
k++;

    }
  
   
}
  console.log(k)
