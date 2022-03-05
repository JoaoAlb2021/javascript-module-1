/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
// ****** Return a new array with strings starts with 'T' ******

function startWithT (arr){
  let newArr = [];
  const longArr = arr.length;
  for (i=0 ; i<longArr ; i++){
    let firstLetter = arr[i].charAt(0);
    if (firstLetter == 'T'){
			newArr.push(arr[i]);
    }
  }
  return newArr
}
console.log(startWithT(daysOfWeek))


// ***** Show what elements start with 'T' *********

// function startWithT(array){
//   longArray=array.length
//   for (i=0; i<longArray; i++){
//     if ( array[i].charAt(0) === 'T'){
//       console.log(array[i])
//     }
//   }
// }

// console.log(startWithT(daysOfWeek))