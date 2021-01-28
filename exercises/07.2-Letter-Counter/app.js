let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
let lowerPar = par.toLowerCase();
for(let i = 0; i < lowerPar.length; i ++){
    
    let key = lowerPar[i]
    if(key === " "){
        continue;
    }else if(counts[key]){
        counts[key]++;  
    }else{
        counts[key] = 1;
    }
}



console.log(counts);