import { Request, Response } from "express"

import { categoryServices } from "../service"
import { TCategory } from "../interface"

export const categoryController = () => {

    const service = categoryServices()

    const post = async (req: Request, res: Response) => {
        const payload: TCategory.TCategoryCreate = req.body
        const result = await service.create(payload)
        return res.status(201).json(result)
    }

    const get = async(req: Request, res:Response) => {
        const result = await service.selectAll() 
        return res.status(200).json(result) 
    }

    const getByState = async(req: Request, res:Response) => {
        const result = await service.selectByState(req.params.id) 
        return res.status(200).json(result) 
    }

    return{
        post,
        get,
        getByState
    }
}