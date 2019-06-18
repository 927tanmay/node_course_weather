API_Key="94d6808d99507da3405bd97bcd24eb07";


var request = require("request");

var getWeather = (lat,lon,callback)=>{

    
    request( {
    url:`https://api.darksky.net/forecast/${API_Key}/${lat},${lon}`,
    json:true
},
    (error,response,body)=>{
        if(error){
            callback("Unable to connect to server");
        }else
          if(response.statusCode==400){
              callback("Unable to fetch weather");
          }
           else if(response.statusCode==200){
            callback(undefined,{
                
                temperature:body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            
            }
                
                ); 

           }
    }
);

}


module.exports= {
    getWeather
};