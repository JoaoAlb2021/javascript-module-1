function checkUsername (username, typeUser){
    if (typeUser === 'admin' || typeUser === 'manager'){
        return 'Username valid'
    }
    else if (username.charAt(0) === username.charAt(0).toUpperCase() && username.length >= 5 && username.length <= 10){
        return 'Username valid'

    }
    else {
        return 'Username invalid'
    }
}

console.log(checkUsername('Javier', 'admin'));