var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here
    //let newArray = [].concat(firstArray, secondArray);
    for(let i = 0; i < firstArray.length; i++){
        newArray.push(firstArray[i]);
    }
    for(let i = 0; i < secondArray.length; i++){
         newArray.push(secondArray[i])
    }
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));