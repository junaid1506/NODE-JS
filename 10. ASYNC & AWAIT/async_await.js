function fetchData(){
    return new Promise((resovle)=>{
        setTimeout(()=>{
            resovle('fetch data')
        },2000)
    })
}

async function getData(){
    console.log("fetchingg.....")
    let data = await fetchData() // Waits for fetchData() to complete
    console.log(data)
}

getData()