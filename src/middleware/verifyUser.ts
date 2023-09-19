import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"
import { userRepo as user } from "../data-source"

const verifyUsers = async (req: Request, res: Response, next: NextFunction) => {

    const payload = req.body

    if(payload.email ){
        const result = await user.findOneBy({ email: payload.email }) 

        if(result){
            throw new AppError("Email already exists" , 409)
        }
        
    }
    return next()
}

export default verifyUsers