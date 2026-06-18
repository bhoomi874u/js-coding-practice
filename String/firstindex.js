let haystack="sadbutsad";
let needle="sad";
let count=0;
for(let i=0;i< haystack.length -needle.length;i++){
    let j=0;
    while (j<needle.length && haystack[i+j]===needle[j])
 
    {
        j++;
    }
    count++;
    if(j===needle.length){
        console.log(i)
         console.log(count)
        break;
    }
   
}

