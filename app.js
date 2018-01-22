const request = require('request')
const yargs = require('yargs')

const argv = yargs
    .options({
        a : {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv

console.log(argv.address)
// address=%20chumsaeng%20nakhonsawan

const address = encodeURIComponent(` ${argv.address}`) 



request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address='+address,
    json: true
}, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 2))
    console.log(`Address: ${body.results[0].formatted_address}`)
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
    console.log(`Longtitude: ${body.results[0].geometry.location.lng}`)
    
})
