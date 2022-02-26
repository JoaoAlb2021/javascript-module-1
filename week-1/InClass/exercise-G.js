const numberOfStudents = 15;
const numberOfMentors = 8;

const totalOfPersons = numberOfMentors + numberOfStudents;

const percentageStudents = numberOfStudents/totalOfPersons;
const roughtStudents = Math.round(percentageStudents*100);

const percentageMentors = numberOfMentors/totalOfPersons;
const roughtMentors = Math.round(percentageMentors*100);

console.log('Percentage of students: ' + roughtStudents + '%')
console.log('Percentage of mentors: ' + roughtMentors + '%')