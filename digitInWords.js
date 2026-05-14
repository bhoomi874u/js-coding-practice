let a="1234";
for(let i=0;i<a.length;i++){
    switch(a[i]){
        case '0':
            console.log("one");
            break;
            case '1':
                console.log("two");
                break;
                case '2':
                    console.log("three");   
                    break;
                    case '3':
                        console.log("four");
                        default:
                            console.log("invalid");
    }

   
    }
    //Another way to do this by using array
     let b="1234";
     var words=["zero","one","two","three","four"]
     for(let digit of b){
        console.log(words[digit]);
     }
