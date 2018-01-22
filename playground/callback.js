
let getUser = (id, callback) => {
    const user = {
        id: id,
        name: 'Tay'
    }
    setTimeout(() => {
        callback(user)
    }, 3000)
}

getUser(25, (userObj) => {
    console.log(userObj)
})

