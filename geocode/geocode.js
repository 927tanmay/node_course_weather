// format = https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

const request =  require('request');


const API_KEY = "AIzaSyDi5rCvj3uxp8seCfwgWQDE7dwYgSSVji0";

var geocodeAddress = (address,callback)=>{
    
    const add = encodeURIComponent(address);
    console.log(add);
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${add}&key=${API_KEY}`,
        json:true
    },(error,response,body) =>{
         if(error){
            callback("Error connecting google server");
        }
        else
            if(body.status === "ZERO_RESULTS"){
                callback("Address enteres is invalid");
            }
                else
                    if(body.status === "OK"){

                        callback(undefined,
                            {
                             address:body.results[0].formatted_address,
                             latitude:body.results[0].geometry.location.lat,
                             longitude:body.results[0].geometry.location.lng  
                            }
                            )

                        //console.log(`Address: ${body.results[0].formatted_address}`);
                        //console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
                        //console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
                        }
                        // else{
                        //     console.log("error");
                        // }   
        }
    );
}




module.exports={
    geocodeAddress
};