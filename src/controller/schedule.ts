import { Request, Response } from "express"
import { scheduleServices } from "../service"

export const scheduleController = () => {

    const service = scheduleServices()

    const post = async (req: Request, res: Response) => {
        await service.create(res.locals.body, res.locals.decoded)
        return res.status(201).json({"message": "Schedule created"})
    }

    const get = async(req: Request, res:Response) => {
        const id = req.params.id
        const result = await service.selectAll(id) 
        return res.status(200).json(result) 
    }
    
    return{
        post,
        get
    }
}