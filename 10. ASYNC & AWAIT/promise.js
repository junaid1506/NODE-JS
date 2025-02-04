const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let sucsess = true;
        if(sucsess){
            resolve("Your Promise Is Resolved")
        }
        else{
            reject("Your Promise is reject")
        }
    },2000)
})
myPromise
.then((msg)=>{console.log(msg)})
.catch((err)=>{console.log(err)})