var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let arrTypes = [];

for(let i = 0; i < mix.length; i++){
   let type = typeof mix[i];
   arrTypes.push(type);
}

console.log(arrTypes);