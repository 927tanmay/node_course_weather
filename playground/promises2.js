const request =  require('request');


const API_KEY = "AIzaSyDi5rCvj3uxp8seCfwgWQDE7dwYgSSVji0";
var geocodeAddress = (address)=>{
        return new Promise((resolve,reject)=>{

        
       
        const add = encodeURIComponent(address);
    
        request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${add}&key=${API_KEY}`,
            json:true
        },(error,response,body) =>{
             if(error){
                reject("Error connecting google server");
            }
            else
                if(body.status === "ZERO_RESULTS"){
                    reject("Address enteres is invalid");
                }
                    else
                        if(body.status === "OK"){
    
                            resolve(
                                {
                                 address:body.results[0].formatted_address,
                                 latitude:body.results[0].geometry.location.lat,
                                 longitude:body.results[0].geometry.location.lng  
                                }
                                )
    
                            }
                          
            }
        );
    }
    )
};







geocodeAddress("47401500").then((location) => {
    console.log(JSON.stringify(location,undefined,2));
}).catch((error)=>{
    console.log(error);
});