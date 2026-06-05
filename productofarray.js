
function productOfArray(n){
    if(n.length===0)
        return 1;
   
    let result=[]
    for(let i=0;i<n.length;i++){
         var product=1;
        for(let j=0;j<n.length;j++){
            if(i!==j){
                product=product*n[j];

            }
           
        }
         result.push(product);


    }
    return result;
}
console.log(productOfArray([1,2,3,4]));