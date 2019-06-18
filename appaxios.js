const yargs = require('yargs');
const axios = require('axios');
const request =  require('request');

const argv = yargs
.option('address',{
    alias: 'a',
    //demand : true,
    describe:"Address to be fetched",
    string : true,
    default:"474015"
})
.help()
.argv;


const geocodeAPI_KEY = "AIzaSyDi5rCvj3uxp8seCfwgWQDE7dwYgSSVji0";
const weatherAPI_Key="94d6808d99507da3405bd97bcd24eb07";
const geocodeurl = `https://maps.googleapis.com/maps/api/geocode/json?address=${argv.address}&key=${geocodeAPI_KEY}`;

axios.get(geocodeurl).then((response)=>{
  
   
    if(response.data.status == 'ZERO_RESULTS'){
        throw new Error('Unable to find that address');
    }
    var lat= response.data.results[0].geometry.location.lat;
    var lon= response.data.results[0].geometry.location.lng;
    console.log("Address: ",response.data.results[0].formatted_address);

    var weatherurl = `https://api.darksky.net/forecast/${weatherAPI_Key}/${lat},${lon}`    
    return axios.get(weatherurl);

 }).then((result)=>{
    //console.log(result.data);
    console.log("The temperature is: ",result.data.currently.temperature);
    console.log("The temperature seems to be: ",result.data.currently.apparentTemperature);
    console.log("The probablity of precipitation is : ",result.data.currently.precipProbability)
 })
 .catch((e)=>{
    if(e.code==='ENOTFOUND'){
        console.log("Enable to find api");
    }else{
    console.log(e.message);
    }

 });
 
 
 
 






