let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let newArray = theBools.map(function(element){
    if(element === 0){
        return element = "woko";
    }else if( element === 1){
        return element = "wiki";
    }
});

console.log(newArray)