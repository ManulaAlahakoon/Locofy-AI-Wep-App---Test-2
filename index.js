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

//Sign up page
app.post('/signup', async (req, res) => {
    await client.connect()
    const { email, password } = req.body
    const salt = bcript.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    
    try {        
        
    } catch (error) {
        console.error(error)
    } finally {
        
    }
})

app.listen(PORT,()=> console.log("App is listening to PORT",PORT))