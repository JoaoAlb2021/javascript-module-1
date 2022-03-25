const birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919]

function licenceDive(yearBorn){
    return yearBorn <= 2005
}

const canDrive = birthYear.filter(licenceDive);

console.log(canDrive);