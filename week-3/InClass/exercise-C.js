function magician(yourFunc) {
console.log(
    "I am magician! Watch as I mutate an array of strings to your heart's content!"
);
const namesArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
];

const magicOutput = yourFunc(namesArray);

return magicOutput;
}

function nameUpper (name){
    return name.toUpperCase();
}

function fixName (array){
    let result =[];
    result = array.map(nameUpper);
    return result
}

console.log(magician(fixName));