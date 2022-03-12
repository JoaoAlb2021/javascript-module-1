let arrSpanish=['Joao','Alejandro','Vanessa','Javier','Camila'];
let arrEnglish=['Mike','Joshu','Alice','Drake','Sam'];

let concatArray= arrSpanish.concat(arrEnglish)
let sortArray = concatArray.sort();

console.log(sortArray);

function studentInClass(name){
    let upFirstLetter = name.charAt(0).toUpperCase();
    let newName = name.replace(`${name.charAt(0)}`,`${upFirstLetter}`)
    if (sortArray.includes(newName)){
        let posName = sortArrat.indexOf(newName);

        return `${newName} is at the class with ${sortArray}`
    }
    else {
       return `${newName} is not at the class with ${sortArray}`
    }

}
console.log(studentInClass('Vanessa'))
