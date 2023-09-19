import { Request, Response } from "express"

import { realEstateServices } from "../service"

export const realEstateController = () => {

    const service = realEstateServices()

    const post = async (req: Request, res: Response) => {
        const result = await service.create(res.locals.body)
        return res.status(201).json(result)
    }

    const get = async(req: Request, res:Response) => {
        const result = await service.selectAll(res.locals.pagination) 
        return res.status(200).json(result) 
    }
    
    return{
        post,
        get
    }
}