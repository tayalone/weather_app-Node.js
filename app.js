const request = require('request')

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=%20chumsaeng%20nakhonsawan',
    json: true
}, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 2))
    console.log(`Address: ${body.results[0].formatted_address}`)
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
    console.log(`Longtitude: ${body.results[0].geometry.location.lng}`)
    
})
