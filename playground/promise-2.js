
const request = require('request')
let geoCpdeAddress = (address) => {
    
    return new Promise ((resolve, reject) => {
        const encodeAddress = encodeURIComponent(` ${address}`) 
        request({
            url: 'http://maps.googleapis.com/maps/api/geocode/json?address='+encodeAddress,
            json: true
        }, (error, response, body) => {
            // console.log(JSON.stringify(error, undefined, 2))
            if(error){
                reject('unable to connect serve', null)
            }
            else if (body.status === 'ZERO_RESULTS'){
                reject('Not Found Location', null)
            }
            else if (body.status === 'OK')
            {
                const results = {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longtitude: body.results[0].geometry.location.lng
                }
                resolve(results)
                
            }
        })
    })
}

geoCpdeAddress('00000')
    .then((location) => {
        console.log(JSON.stringify(location, undefined, 2))
    })
    .catch( (error) => {
        console.log(error)
    })