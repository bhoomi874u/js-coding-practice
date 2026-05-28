var digits=[1,2,3];
var count=0;
for(var i=digits.length-1;i>=0;i++){
    if(digits[i]===9){
        digits[i]=0;
        count++;

    }
    else{
        digits[i]++;
        console.log(digits);
        break;
    }

}
if(count===digits.length){
    digits.unshift(1);
    console.log(digits);
}

 