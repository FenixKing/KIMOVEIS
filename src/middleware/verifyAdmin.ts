import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"

const verifyAdmin = async (req: Request, res: Response, next: NextFunction) => {

    if(!res.locals.decoded.admin){
        throw new AppError("Insufficient permission" , 403)
    }
    
    return next()
}

export default verifyAdmin