var getuser = (id,callback)=>{
    var user = {
        id:id,
        name:"Tanmay"
    };

    setTimeout (()=>{
        callback(user);
    }, 3000);
};


getuser(31,(userObject)=>{
    console.log(userObject);
});