import { Request, Response } from "express"
import { userServices } from "../service"
import { TUsers } from "../interface"
import { User } from "../entities"

export const userController = () => {

    const service = userServices()

    const post = async (req: Request, res: Response) => {
        const payload: TUsers.TUsersCreate = req.body
        const result = await service.create(payload)
        return res.status(201).json(result)
    }

    const get = async(req: Request, res:Response) => {
        const result = await service.selectAll(res.locals.pagination) 
        return res.status(200).json(result) 
    }

    const patch = async(req: Request, res:Response) => {
        const payload: TUsers.TUsersUpdate = req.body
        const foundUser: User = res.locals.result
        const result = await service.update(payload, foundUser, res.locals.decoded)
        return res.status(200).json(result)
    }

    const deleteM = async(req: Request, res:Response) => {
        const foundMovie: User = res.locals.result
        await service.deleteM(foundMovie, res.locals.decoded)
        return res.status(204).json()
    }
    
    return{
        post,
        get,
        patch,
        deleteM
    }
}