function getParkingLotState(matrix){
    let newObj = {
        totalSlots: 0,
        availableSlots: 0,
        occupiedSlots: 0
    };
    for(let i = 0; i < matrix.length; i++){
        for(let e = 0; e < matrix[i].length; e++){
            if(matrix[i][e] === 1){
                newObj.occupiedSlots += 1;
                newObj.totalSlots += 1;

            }else if(matrix[i][e] === 2){
                newObj.availableSlots += 1;
                newObj.totalSlots += 1;
            }
        }
    }

    return newObj
}

let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
console.log(getParkingLotState(parking_state))