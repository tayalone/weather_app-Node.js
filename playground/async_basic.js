console.log('Start App')

setTimeout( () => {
    console.log('inside callback function')
}, 2000)

setTimeout( () => {
    console.log('Second timeout')
}, 0)

console.log('End App')