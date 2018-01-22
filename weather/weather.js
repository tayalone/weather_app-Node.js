const request = require('request')

const getWeather = (lat, long, callback) => {
    
    const forcast = `https://api.darksky.net/forecast/ad3d8afd047de8e016955df585f28c2f/${lat},${long}`
    request({
        url: forcast,
        json: true
    }, (error, response, body) => {
        if (error){
            // console.log(`Unable connect`)
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