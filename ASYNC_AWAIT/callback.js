function verifyUser(name,callback){
    let data;

    setTimeout(()=>{
        data={id:1,name:name};
        callback(data);
},5000);
}

function processdata(data){
    console.log("data recieved:",data);
}

let data=verifyUser("BCA",processdata);
console.log(data);

