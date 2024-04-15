const PORT = 8000
const express = require("express")
const cors = require('cors')
const app = express()

app.use(cors())

app.listen(PORT,()=> console.log("App is listening to PORT",PORT))