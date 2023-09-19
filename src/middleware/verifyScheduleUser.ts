import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"
import { scheduleRepo as data } from "../data-source"

const verifyScheduleUser= async (req: Request, res: Response, next: NextFunction) => {
    const findUser = await data.findOneBy({ 
        user: {
            id: res.locals.decoded.sub
        } 
    })
    if(findUser){
        throw new AppError('User schedule to this real estate at this date and time already exists', 409)
    } 
    return next()
}

export default verifyScheduleUser