function mostWater(height ){
let left=0;
let right=height.length-1;
let maxWater=0;
while(left<right){
    
    let h=Math.min(height[left],height[right])
    let width=right-left;
     maxWater=Math.max(maxWater , width*h);
    if(height[left]<height[right]){
        left++;
    }
    else{
        right--;
    }
}

return maxWater

}
console.log(mostWater([1,8,6,2,5,4,8,3,7]));