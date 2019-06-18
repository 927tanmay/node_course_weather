

const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
.option('address',{
    alias: 'a',
    demand:true,
    describe:"Adress to be fetched",
    string:true
})
.help()
.argv;
//console.log(argv.address);

geocode.geocodeAddress(argv.address,(errormessage,results)=>{
        if(errormessage){
            console.log(errormessage);
        }
         else{
            
             const lat= results.latitude;
             const lon=results.longitude; 
             weather.getWeather(lat,lon,(error,weatherresults)=>{
                if(error){
                 console.log(error);
                 }
                 else{
                    console.log(JSON.stringify(results,undefined,2)); 
                    console.log(JSON.stringify(weatherresults,undefined,2));
                 }

                });

    }

}
);

