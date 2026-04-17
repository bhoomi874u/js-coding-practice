let num=[2,3,4,77,55,5,9,11,17,19 ,10,8]
for(let i=0;i<num.length;i++){
    if(num[i]%1 ===0 && num[i]%num[i]===0 && num[i]%2!==0){
        console.log("Prime number is :"+num[i]);
    }
    else{
        console.log("Not a prime number: "+num[i]);
    }
}

// Another way to find prime numbers in an array
let num2 = [2,3,4,77,55,5,9,11,17,19 ,10,8];
let primeNum= num2.filter(n=> n%1===0 && n%n===0 && n%2!==0)
console.log("Prime numbers in the array are: " + primeNum);

// thired way to find prime numbers in an array

function isPrime(n){
     let count=0;
    if(n<=1){
        return false;
    }
    for(i=2;i<n;i++){
         count++;
        if(n%i===0 && n%n===0 ){
          
 console.log( "Iteration :"+count);
            return false;
        }

    }
     console.log("Iterations:", count);
    return true;
}
 console.log(isPrime(9));
