function decodeString(s){
    let numStack=[];
    let strStack=[];
    let currentStr="";
    let currentNum=0;
    for(let ch of s){
        if(!isNaN(ch)){
            currentNum=currentNum*10+Number(ch);
        }
        else if(ch==='['){
            numStack.push(currentNum);
            strStack.push(currentStr)
            currentNum=0;
            currentStr="";
        }
        else if(ch===']'){
            let repeat =numStack.pop();
            let prevStr=strStack.pop();
            currentStr=prevStr+currentStr.repeat(repeat)
        }
        else {
            currentStr+=ch;
        }
      
    }
  return currentStr
}
console.log(decodeString ("3[a2[c]]"))
