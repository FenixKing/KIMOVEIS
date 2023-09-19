import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"
import { userRepo as user } from "../data-source"

const verifyId = async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params

    const result = await user.findOneBy({ id: parseInt(id) }) 

    if(!result){
        throw new AppError("User not found" , 404)
    }

    res.locals = { ...res.locals, result }
    
    return next()
}

export default verifyId