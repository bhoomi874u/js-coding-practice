// function  integerRoman(num){
// let val=[1000,900,500,400,100,90,50,40,10,9,5,4,1]
// let sym=[ "M", "CM", "D", "CD",
//         "C", "XC", "L", "XL",
//         "X", "IX", "V", "IV", "I"];
// let res=" ";
// for(let i=0;i<num.length;i++){
// while (num>= val[i]){
// num=num-val[i];
// res=res + sym[i];

// }


// }
// return res;
// }
// console.log(integerRoman(234));

function intToRoman(num) {

    const values = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];

    const symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];

    let result = "";

    for (let i = 0; i < values.length; i++) {

        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }

    return result;
}

console.log(intToRoman(1994)); // MCMXCIV