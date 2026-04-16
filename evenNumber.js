let num = [2,10,40,55,67,80];
for(let i=0;i<num.length;i++){
if (num[i] % 2 === 0) {
    
    console.log(num[i] + " is an even number");
} else {
    console.log(num [i]+ " is not an even number");
}
}
let num2 = [1,2,3,4,5,6,7,8,9,10];
let evenNum= num2.filter(n=> n%2===0)


console.log("Even numbers in the array are: " + evenNum);