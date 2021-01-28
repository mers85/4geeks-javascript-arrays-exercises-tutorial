// Code goes here
function matrixBuilder(integer){
    let matrix = [];
    let row = [];
    for(let i = 0; i < integer; i++){
        matrix.push(row);
    }
    for(let e = 0; e < integer; e++){
            row[e] = 1;
    }
    return matrix;
}


// do not change anything from this line down
console.log(matrixBuilder(5));