function fetchUserData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({id:"123",name:"John"})
        },2000)
    })
}

async function getUser(){
    try{
    console.log("fetching user data...");
    const user=await fetchUserData();
    console.log("user data:",user);
    }
    catch(error){
        console.error("error fetching user data:",error);
    }
}

getUser();