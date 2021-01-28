let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

//declare your function here
function filterByName1(arr, str){
    let string = str.toLowerCase();
    let newArray = arr.filter(element => element.includes(string));
    return newArray
};

function filterByName(arr, str){
    let string = str.toLowerCase();
    let newArray = []
    for(let i = 0; i < arr.length; i++){
        if (arr[i].includes(string)){
            newArray.push(arr[i]);
        }
    }
    return newArray
};

console.log(filterByName(names, 'am'));