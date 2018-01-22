const yargs = require('yargs')

const geocode = require('./geocode/geocode')

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

geocode.geoAddress(argv.address, (error, results) => {
    if (error) {
        console.log(error)
    } else {
        console.log(JSON.stringify(results, undefined, 2))
    }
})

const request = require('request')
const forcast = `https://api.darksky.net/forecast/ad3d8afd047de8e016955df585f28c2f/37.8267,-122.423`

request({
    url: forcast,
    json: true
}, (error, response, body) => {
    if (error){
        console.log(`Unable connect`)
    } 
    else if (response.statusCode  === 400) {
        console.log(`Unable fetch data`)
    }
    else if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature)
    }
})