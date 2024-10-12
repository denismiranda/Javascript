//console.log(user)
//var user = "denis"

//hoisting
//var user 
//console.log(user)


//Global scope
var email = "denis@gmail.com"

{
    // Block scope
    console.log(email)
}


{
    var age = 18
}
console.log(age)


/*{
    //This scope will cause error because can`t access before initialization.
    console.log(year)
    let year = 2003
}*/