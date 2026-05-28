var nums=[1,3,5,6];
var tar=5;
for(var i=0;i<nums.length;i++){
    if(nums[i]===tar){
        console.log("Target found at index: "+i);
        break;
    }
    else if(nums[i]>tar){
        console.log("Target not found, but can be inserted at index: "+i);
        break;
    }
}