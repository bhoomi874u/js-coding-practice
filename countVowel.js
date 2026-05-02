var str="Bhoomi";
var count=0;
 str=str.toLowerCase();
for(let i=0;i<str.length;i++){
    if("aeiou".includes(str[i])){
        count++;
    }
}
console.log(count);
//another way count the vowels
 function vowels(str2){
str2=str2.toUpperCase()
count=0;
for(let char of str2){
    if ("AEIOU".includes(char)){
        count++;
    }

}
return count;

 }
 console.log(vowels("PSIT"));