
function lyricsGenerator(arr){
    let newString = "";
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            newString += "Boom ";
        }else if(arr[i] === 1){
            newString += "Drop the base "
            if(arr[i - 1] === 1 && arr[i - 2] === 1){
                newString += "!!!Break the base!!! ";
            }
        }
    }
    return newString;
}

// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))