function myAge(yearBorn) {
    return 2022 - yearBorn;
  }
  
  function greeting(name, yearBorn) {
    const currentAge = myAge(yearBorn);
    const message =
      "My Name is " + name + " and I am " + currentAge + " years old!";
    return message;
  }

  console.log(greeting('Joao', 1994));