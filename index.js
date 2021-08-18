const http = require('http');

//const host = '127.0.0.1'
const port = 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader = ('Content-Type', 'text/plain')
    res.end("Uygulama başladı...")
})

server.listen(port, () => {
    console.log(`http://localhost:${port} adresinden gelen istekler dinleniyor.`)
})