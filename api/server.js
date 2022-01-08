const express = require ('express');
const app = express();
const userRouter = require('./routes/user.js');
const mongoose= require('mongoose')
require('dotenv').config();
const cors = require('cors');

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:3000"
    })
)
app.use(userRouter);

app.get('/',(req,res)=>{
    res.json({
        mgs:"this is home page"
    })
})

app.get('*',(req,res)=>{
    res.json({
        mgs: "wrong req"
    })
})
// database 
mongoose.connect('mongodb://localhost:27017/Blood').then(()=> console.log('Database connected'))
.catch((err)=> console.log(err))


const port = process.env.PORT || 7000;
app.listen(port,()=>{
    console.log(`The server is running at port ${port}`);
})