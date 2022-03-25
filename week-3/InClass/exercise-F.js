const birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
birthYear.forEach(function(year){
    if (year>2005){
        let yearsForCanDrive = year-2005
        console.log('Born in ' + year + ', can drive in ' + yearsForCanDrive + ' years');
    }
    else {
        console.log('Born in ' + year + '. Can drive')
    }
})