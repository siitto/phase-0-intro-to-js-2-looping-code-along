
function writeCards(names, string){

let newArray = [];    
for (let i = 0; i < names.length; i++){
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${string} gift!`);

}
return newArray;
}


 
let int = 10;
function countDown(int){
for (int = 10; int >= 0; --int){
  console.log(int);
}
    return int;
}

console.log(countDown());