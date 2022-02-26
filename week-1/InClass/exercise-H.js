function average(name, curse, score1, score2, score3){
    totalScore = (score1 + score2 + score3)
    return `Hello ${name}, your average in ${curse} is: ${totalScore/3}`
}
// return curse average
const promedio = average('Joao', 'Migracode', 15, 18, 13)
console.log(promedio)