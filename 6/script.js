function isSameUser(user1, user2) {
    return user1.email === user2.email
}

const currentUser = {
    email: 'ed@swag.now' ,
    firstName: 'Ed' ,
    level: 7,
}

const anotherUser = {
    email: 'einar@notswag.now',
    firstName: 'Einar',
    level: 10,
}

console.log(isSameUser(currentUser, anotherUser))