var str="my name is bhoomi";
var res=str.split(" ");
var result=res.map(word=> word.charAt(0).toUpperCase()+word.slice(1)).join(" ")

console.log(result);

//another way to captlize word in uppercase
 var str2 = "i am mca student";
var result = "";

var words = str2.split(" "); 

for (var i = 0; i < words.length; i++) {
    var word = words[i];

    result += word[0].toUpperCase() + word.slice(1);

    if (i !== words.length - 1) {
        result += " ";
    }
}

console.log(result);