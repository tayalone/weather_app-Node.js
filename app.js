const request = require('request')
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

