import { connect } from "mongoose"

const url: string = "mongodb://localhost:27017/gitcollab"

export const dbconfig = async () => {
    try {

        return await connect(url).then((res) => {
            console.log("database is active")
        })

    } catch (error) {
        console.log(error)
    }
}