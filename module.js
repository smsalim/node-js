const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  fs.readFileSync('test.html')
  console.log(fs.toString())
})

server.listen(3000, () => {
  console.log(`Server running at http://${host}:${port}/`)
})