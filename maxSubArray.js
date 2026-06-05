function maxSubArray(nums){
    let currentSum=nums[0];
    let maxSum=nums[0];
    for(let i =0;i<nums.length;i++){
        currentSum=Math.max(nums[i],currentSum+nums[i])
        maxSum=Math.max(maxSum,currentSum);
    }
    return maxSum;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

let n=[0,0,4,0,5,6,7,0,8];
let index=0
for (let i=0;i<n.length;i++){
    if(n[i]!==0){
        n[ index]=n[i];//index is used to keep track of the position where the next non-zero element should be placed. When a non-zero element is found, it is assigned to n[index], and then
index++;
    }
}
     for(let i=index;i<n.length;i++){
        n[i]= 0;
     }

console.log(n);
