const express = require('express')
const bodyParser=require('body-parser')
const mongoose = require('mongoose')
const alienRouter = require('./controller/controllers') 
//const cors=require('cors')
// const url = "mongodb://localhost:27017/cbitstudent"
const url = 'mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/cbit?replicaSet=CBIT'
// const url = "mongodb+srv://dikshants12314:Dishu%40036@cluster0.lmqme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const port = 3000
const app = express()
mongoose.connect(url)
const con = mongoose.connection
con.on('open', () =>  
{
console.log('connected...')
})
//app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

app.use('/aliens',alienRouter)
app.listen(port, () =>
{
console.log('Server running at port:http://localhost:'+port)
})