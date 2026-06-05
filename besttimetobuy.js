let price=[7,1,5,3,6,4]
let maxProfit=0;
let minPrice=price[0];
for (let prices of price){ //O[n]

    if(prices<minPrice){
        minPrice=prices;
    }
let profit=prices-minPrice;
if(profit>maxProfit){
    maxProfit=profit;

}



    }
    console.log(maxProfit);
    //Another way to solve this problem
    let price1=[7,1,5,3,6,4]
    let maxProfit1=0;
    let minPrice1=price1[0];
    for(let b=0;b<price1.length;b++){
        for(let s=0;s<price1.length;s++){

            if(price1<minPrice1){
                minPrice1=price1;
                let profit1=price1-minPrice1
                if(profit1>maxProfit1){
                    maxProfit1=profit1;

                }

        }
    }



    }    console.log(maxProfit1);
