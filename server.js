const express = require("express")
require("./config/config")
const router = require("./routers/famRouter")

const port = process.env.port

const app = express()
app.use(express.json())
app.use("/uploads", express.static("uploads"))
app.use("/api/v1/user", router)


app.listen(port, ()=> {
    console.log(`server is listening on port: ${port}`)
})