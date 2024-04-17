const PORT = 8000
const express = require("express")
const cors = require('cors')
const { MongoClient } = require('mongodb')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const app = express()

app.use(cors())
app.use(express.json())

const uri = process.env.URI
//const client = new  MongoClient(uri)

const connectToMongoDB = async (client) => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        // Additional code for interacting with MongoDB can go here
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

//Sign up page
app.post('/signup', async (req, res) => {
    //await client.connect()
    const { email, password } = req.body
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)
    const generatedUsereId = uuidv4()
    
    try {  
        const client = new MongoClient(uri)
        await connectToMongoDB(client)
        const database = client.db('locofy_app_db')
        const users = database.collection("users")
        const exsistingUser = await users.findOne({ email })
        
        if (exsistingUser) {
            return res.status(409).send("User already exist!")
        }

        const sanitizedEmail = email.toLowerCase()

        const data = {
            user_id: generatedUsereId,
            email: sanitizedEmail,
            hashed_password: hashedPassword       
        }

        const insertedUser = await users.insertOne(data)

        const token = jwt.sign(insertedUser, sanitizedEmail, {
            expiresIn: 60 * 24
        })
        res.status(201).json({token,userId:generatedUsereId})
       
    } catch (error) {
        console.error(error)
    } finally {
        
    }
})

app.listen(PORT, () => console.log("App is listening to PORT", PORT))
