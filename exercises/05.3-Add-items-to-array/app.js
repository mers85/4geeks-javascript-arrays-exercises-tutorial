var arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.

let item = Math.floor((Math.random() * 10) + 1);

for(let i = 0; i < 2; i++){
    arr.push(item);
}

console.log(arr);