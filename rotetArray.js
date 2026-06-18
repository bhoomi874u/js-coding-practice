let arr=[1,2,3,4,5,6,7,8];
// let unique =[];
for(let i=0;i<arr.length;i++){
let last=arr.pop();
arr.unshift(last);
console.log(last);
}
//Another way to solve the problem
let part1=[1,2,3,4];
let part2=[5,6,7,8];
console.log(...part2,...part1)
//Another way to solve the problem
function rotateArray (n,k){
k=k%n.length;
reverse(n,0,n.length-1)
reverse(n,0,k-1);
reverse(n,k,n.length-1);
return n;
}
function reverse (arr,start, end){
    while (start<end){
        [arr[start],arr[end]]==[arr[end],
    arr[start]]
    start++;
    end--
    }
}
console.log (rotateArray([1,2,3,4,5,6,7,8],3)
);