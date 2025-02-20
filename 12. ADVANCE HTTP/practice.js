const http = require("http")
const fs = require("fs")

const myServer = http.createServer((req, res) => {
    const log = `${Date()} : "${req.url}" is new entry\n`
    fs.appendFile('newLog.txt', log, (err, data) => {
        switch (req.url) {
            case '/':
                res.writeHead(200, { "Content-type": "text/html" })
                let data1 = fs.readFileSync("template.html", "utf-8")
                res.end(data1)
                break;
            case "/card1":
                res.writeHead(200, { "Content-type": "text/html" })
                const name = "Junaid"
                const email = "junaid@gmail.com"
                let data2 = fs.readFileSync("card.html", "utf-8")
                data2 = data2.replace("{{name}}", name)
                data2 = data2.replace("{{email}}", email)
                res.end(data2)
                break;
            case "/card2":
                res.writeHead(200, { "content-type": "text/html" })
                const name2 = "yugal"
                const email2 = "yugal@gmail.com"
                let data3 = fs.readFileSync("card2.html", "utf-8")
                data3 = data3.replace("{{name}}", name2)
                data3 = data3.replace("{{email}}", email2)
                res.end(data3)
                break;
            case "/card3":
                res.writeHead(200, { "content-type": "text/html" })
                const name3 = "deepanshu"
                const email3 = "deepanshu@gmail.com"
                let data4 = fs.readFileSync("card2.html", "utf-8")
                data4 = data4.replace("{{name}}", name3)
                data4 = data4.replace("{{email}}", email3)
                res.end(data4)
                break;
            case "/card4":
                res.writeHead(200, { "content-type": "text/html" })
                const name4 = "suhail"
                const email4 = "suhail@gmail.com"
                let data5 = fs.readFileSync("card2.html", "utf-8")
                data5 = data5.replace("{{name}}", name4)
                data5 = data5.replace("{{email}}", email4)
                res.end(data5)
                break;
            default:
                res.writeHead(200, { "content-type": "text/html" })
                res.end("<h1>Error 404</h1>")
                break;
        }
    })
})

myServer.listen(5000, () => { console.log("Server is running") })