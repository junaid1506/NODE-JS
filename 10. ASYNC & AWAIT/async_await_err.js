function fetchData(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(user){
                resolve("User is online")
            }
            else{
                reject("user is oflline")
            }
        },2000)
    })
}

async function getData(){
    console.log("fetchingg......")
    try{
        let data = await fetchData(true)
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}

getData()