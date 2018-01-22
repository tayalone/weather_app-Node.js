
 
let somePromise = new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve(`Hey It's workd~!`)
    reject(`unable to fullfill promise`)
   }, 2000)
})

somePromise
    .then((message) => {
        console.log('Sucess: ', message)
    })
    .catch((errorMessage) => {
        console.log('Fail: ', errorMessage)
    })

let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number'){
                resolve( a + b)
            }
            else {
                reject('arg must be number')
            }
        }, 1500)
    })
}
asyncAdd('1' ,2)
    .then((res) => {
        console.log(res)
        return asyncAdd(res, 20)
    })
    .then((res) => {
        console.log('Should Be 23 ? ',res)    
    })
    .catch((msgErr) => {
        console.log(msgErr)
    })