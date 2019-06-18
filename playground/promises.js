// import { resolve } from "url";
// import { rejects } from "assert";

//import { resolve } from "dns";
//import { rejects } from "assert";

// var prom= new Promise((resolve,reject)=>{
    
//     setTimeout(()=>{
//         resolve("Tanmay");
//     },2000 ); 
// });

// prom.then( (msg,error)=>{
//     console.log("Success: ",msg);}
//     ,(error)=>{
//      console.log("Error: ",error);
//  }
// );
var add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof(a)==='number' && typeof(b)==='number'){
                resolve(a+b);
            }else
              {
                 reject("Error Message"); 
              }
        
        },2000);

    });

}


add(20, 19).then((ans)=>{
    console.log("Result1: ",ans);
    return add(13,ans);} 
).then((res)=>{
    console.log("Result2: ",res);
}).catch( (error)=>{
    console.log(error);
}




);





