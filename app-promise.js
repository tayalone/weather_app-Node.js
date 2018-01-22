const yargs = require('yargs')
const axios = require('axios')

const Key =require('./config/key')

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

const encodeAddress = encodeURIComponent(` ${argv.address}`)
const geocodeUrl = 'http://maps.googleapis.com/maps/api/geocode/json?address='+encodeAddress 

axios.get(geocodeUrl)
    .then((response) => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to finde address')
        }
        const address = response.data.results[0].formatted_address
        const lat = response.data.results[0].geometry.location.lat
        const lng = response.data.results[0].geometry.location.lng
        console.log(address)
        const forcast = `https://api.darksky.net/forecast/${Key.foreCastKey}/${lat},${lng}`
        return axios.get(forcast)
    })
    .then((response) => {
        const tempurature = response.data.currently.temperature
        const apparentTemperature= response.data.currently.apparentTemperature
        console.log(`It's currently ${tempurature} but it feel like ${apparentTemperature}`)
    })
    .catch((e) => {
        if (e.code === 'ENOTFOUND') {
            console.log('Unable to connect google maps')
        } else {
            console.log(e.message)
        }
    })
