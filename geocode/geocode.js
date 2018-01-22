const request = require('request')


const geolocation = (address, callback) => {
const encodeAddress = encodeURIComponent(` ${address}`) 

    request({
        url: 'http://maps.googleapis.com/maps/api/geocode/json?address='+encodeAddress,
        json: true
    }, (error, response, body) => {
        // console.log(JSON.stringify(error, undefined, 2))
        if(error){
            //console.log('unable to connect serve')
            callback('unable to connect serve', null)
        }
        else if (body.status === 'ZERO_RESULTS'){
            //console.log('Not Found Location')
            callback('Not Found Location', null)
        }
        else if (body.status === 'OK')
        {
            // console.log(`Address: ${body.results[0].formatted_address}`)
            // console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
            // console.log(`Longtitude: ${body.results[0].geometry.location.lng}`)
            const results = {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longtitude: body.results[0].geometry.location.lng
            }
            callback(null, results)
            
        }
    })
}

module.exports.geoAddress = geolocation