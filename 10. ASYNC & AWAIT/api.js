async function getData() {
    try{
        let data = await fetch('https://jsonplaceholder.typicode.com/posts')
        let post = await data.json()
        console.log(post)
    }
    catch(err){
        console.log(err)
    }
}

getData()