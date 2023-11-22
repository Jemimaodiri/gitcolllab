import { Request, Response } from "express";


const CreateTask = async (req: Request, res: Response) => {
    try {
        const { taskName, Deadline, done } = req.body

        const taskModel = await Taskmodel.create({
            taskName, Deadline, done

        })
        return res.status(200).json({
            message: "task created",
            data: taskModel
        })



    } catch (error) {

        return res.status(404).json({
            message: "error"
        })
    }
}