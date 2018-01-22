const request = require('request')
const Key =require('../config/key')

const getWeather = (lat, long, callback) => {
    const forcast = `https://api.darksky.net/forecast/${Key.foreCastKey}/${lat},${long}`
    //console.log(forcast)
    request({
        url: forcast,
        json: true
    }, (error, response, body) => {
        if (error){
            //console.log(`Unable connect`)
            callback(`Unable connect`)
        } 
        else if (response.statusCode  === 400) {
            //console.log(`Unable fetch data`)
            callback(`Unable fetch data`)
        }
        else if (!error && response.statusCode === 200) {
            //console.log(body.currently.temperature)
            callback(null ,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        }
    })
}

module.exports.getWeather = getWeather