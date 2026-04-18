var str="racecar";
var res=str.split("").reverse().join("");
if(str===res){
    console.warn("This string is palindrome");
}
else{
    console.warn("string is not palindrome");

}

//Second way to check whether a string is palindrome or not
var str2="madam";
var result="";
for(var i=0;i<str2.length;i++){
if(str2[i]===str2[str2.length-1-i]){
    result=true;
   
   }
   else{
    result=false;
   }
    }
  console.log(result);

  

 