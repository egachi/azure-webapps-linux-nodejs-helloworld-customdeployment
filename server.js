const express = require('express')
const app = express()
var port = process.env.port || 3000
app.get('/', function (req, res) {
    res.send(process.version)
  });

app.listen(port, () => console.log('Example app listening on port 3000!'))