const PORT = 8000
const express = require("express")
const cors = require('cors')
const { MongoClient } = require('mongodb')
require('dotenv').config()
const app = express()

app.use(cors())
app.use(express.json())

const uri = process.env.URI

const client = new  MongoClient(uri)


app.listen(PORT,()=> console.log("App is listening to PORT",PORT))