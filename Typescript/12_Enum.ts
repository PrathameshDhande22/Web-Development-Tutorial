// ? Enum in Typescript

/* 
# Enums allows us to select one value from multiple values
Syntax : enum Name{
    key=value,
    key2=value
}
*/

// $ Creating the enum
enum Roles {
    Admin = "admin",
    User = "user"
}

// $ Creating the type which will take the enum
type LoginDetails = {
    uname: string,
    password: string,
    role: Roles
}

// Implementing
const u1: LoginDetails = {
    password: "1223",
    uname: "Prathamesh",
    role: Roles.User,
}
const u2: LoginDetails = {
    password: "1223",
    uname: "Prashant",
    role: Roles.Admin,
}

// Check whether who is admin or who is user
const check = (userd: LoginDetails): void => {
    if (userd.role == "user") {
        console.log(`${userd.uname} is the User`)
    }
    else {
        console.log(`${userd.uname} is Admin`)
    }
}
check(u1)
check(u2)