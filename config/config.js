const mongoose = require("mongoose")
require("dotenv").config()

const db = process.env.apiLink
mongoose.connect(db).then(()=> {
    console.log(`Database Connected successfully`)
}).catch((e)=>{
    console.log(e.message)
})