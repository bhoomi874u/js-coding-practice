var word="listen";
var anagram ="silent";
if(word.length!==anagram.length){
    return false;
}
var sort1=word.split("").sort().join("");
var sort2=anagram.split("").sort().join("");
if(sort1===sort2){
    console.log("Anagram");
}
else{
    console.log("Not Anagram");
}
//Time complexity is O(nlogn) because of sorting.

//Another approach is to use frequency counting which has time complexity of O(n).
var word2="listen"
var anagram2="silent";
if(word2.length!==anagram2.length){
    return false;
}
var frq={};
for(var i=0;i<word2.length;i++){
    var ch=word2[i];
    if(frq[ch]){
        frq[ch]++;

    }
    else{
        frq[ch]=1;
    }
}
var isAnagram=true;
for(var i=0;i<anagram2.length;i++){
    var ch=anagram2[i];
    if(!frq[ch]){
        isAnagram=false;
        break;
}
else{
    frq[ch]--;
}

}
if(isAnagram){
    console.log("Anagram");
}
else{    
    console.log("Not Anagram");
}