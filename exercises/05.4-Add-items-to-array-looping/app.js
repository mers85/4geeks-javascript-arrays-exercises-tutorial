var arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop

 for(let i = 0; i < 10; i++){
    let item = Math.floor((Math.random() * 10) + 1);
    arr.push(item);
 }
//*****************

console.log(arr);