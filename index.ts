import express, { Application } from "express"
import { dbconfig } from "./util/dbconfig"




const port: number = 4444


const app: Application = express()
app.use(express.json())





app.listen(port, () => {
    console.log("server is active")
    dbconfig()
})