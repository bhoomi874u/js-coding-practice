var str="Bhoomi";
var res=str.split("").reverse().join("");
console.log(res);

//Second way to reverse a string
var str2="Hello World";
for(var i= str2.length-1;i>=0;i--){
    console.log(str2[i]);
}

//Third way to reverse a string
var str3="javaScript";
var res="";
for(var i=0;i<str3.length;i++){
    res=str3[i]+res;


}
console.log(res);