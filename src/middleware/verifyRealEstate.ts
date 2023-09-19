import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"
import { scheduleRepo as data } from "../data-source"

const verifyRealEstate = async (req: Request, res: Response, next: NextFunction) => {
    const id: number = req.body.realEstateId

    const findRealEstate = await data.findOneBy({ 
        realEstate: {
            id: id
        } 
    }) 

    if(findRealEstate) throw new AppError('Schedule to this real estate at this date and time already exists', 409)
    
    return next()
}

export default verifyRealEstate