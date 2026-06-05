let nums=[1,2,3,4,1];
let set =new Set(nums);
if(set.size!==nums.length){
    console.log(true);
}
else{
    console.log(false);
}
//Another way to solve this problem
let n=[1,2,3,4,1];
let unique=[];

for(let i=0;i<n.length;i++){
    if(!unique.includes(n[i])){
unique.push(n[i]);
    }
    

    
           
        }
        if(unique.length!==n.length){
        console.log(true);
    }
    else{
        console.log(false);
    }


    


