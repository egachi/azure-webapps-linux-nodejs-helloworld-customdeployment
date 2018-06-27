const express = require('express')
const app = express()
var port = process.env.port | 3000
app.get('/', function (req, res) {
    console.log(process.version)
    res.send('hello world')
  })
app.listen(port, () => console.log('Example app listening on port 3000!'))