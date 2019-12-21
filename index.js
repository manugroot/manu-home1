
const express = require('express')
const app = express()
const port = process.env.PORT||3000
app.get('/', (req, res) => res.sendFile(__dirname + '/public/htmls/index.html'))

var obj={}
obj.name = "Being Zero";
obj.college = "CMRCET";
obj.regno = "111111ABC";

app.get('/data', (req, res) => res.json(obj))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))







