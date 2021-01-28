let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList(arrNum){
    let odd = [];
    let even = [];
    let oddAndEven = [];
    
    for(i = 0; i < arrNum.length; i++){
        if(arrNum[i] % 2 !== 0){
            odd.push(arrNum[i]);
        }else if(arrNum[i] % 2 == 0){
            even.push(arrNum[i]);
        }
    }

    return oddAndEven = [].concat(odd, even);
}


console.log(mergeTwoList(list_of_numbers))
