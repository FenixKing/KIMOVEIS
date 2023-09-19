import { Request, Response } from "express"

import { authServices } from "../service"
import { TUsers } from "../interface"

export const authController = () => {

    const service = authServices()

    const post = async (req: Request, res: Response) => {
        const payload: TUsers.TUsersCreate = req.body
        const result = await service.auth(payload)
        return res.status(200).json(result)
    }

    return{
        post
    }
}