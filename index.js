
const express = require('express')
const app = express()
const port = process.env.PORT||3000
app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/public/htmls/index.html'))

var obj={}
obj.name = "R.Manish Reddy";
obj.clg = "CMRCET";
obj.rengno = "17h51a04g6";

app.get('/data', (req, res) => res.json(obj))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))







