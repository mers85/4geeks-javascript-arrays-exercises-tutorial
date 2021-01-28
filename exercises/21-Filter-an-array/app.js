let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here

let resultingNames = allNames.filter(function(str){
    
    if(str[0] === 'R'){
        return str;
    }
});

console.log(resultingNames);