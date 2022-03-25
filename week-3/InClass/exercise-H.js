let arrSpanish=['Alejandro','Vanessa','Jo   ao','Javier','Camila'];

function findName(name){
    return name ==='Joao';
}

const   nameFound = arrSpanish.find(findName);
if(nameFound==='Joao'){
    console.log('Found me!');
}
else{
    console.log("Haven't found me :(");
}
