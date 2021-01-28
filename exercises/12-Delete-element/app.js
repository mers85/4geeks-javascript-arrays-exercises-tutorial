var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    let newArr = [];
    for(let i = 0; i < people.length; i++){
        if(people[i] === personName){
            continue;
        }else{
            newArr.push(people[i])
        }
    }
    return newArr
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));