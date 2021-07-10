//imports
const express = require("express")

//app
const app = express()

//port
const port = 3000

app.listen(port,()=>{console.log(`running on ${port}`)})
app.use(express.static("public"))