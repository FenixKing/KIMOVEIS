import { TAuth, TUsers } from "../interface"

import { authSchema as schema } from '../schema'
import { userRepo as user } from "../data-source"
import { compare, hash } from "bcryptjs"
import { AppError } from "../errors"
import { sign } from "jsonwebtoken"

export const authServices = () => {

    const auth = async (payload: TAuth.TAuth) => {
        
        const result = await user.findOneBy({ email: payload.email }) 

        if(!result){
            throw new AppError("Invalid credentials" , 401)
        }

        const samePwd: boolean = await compare(payload.password, result.password);

        if (!samePwd) {
            throw new AppError('Invalid credentials', 401)
        }
    
        const token: string = sign(
            { admin: result.admin },
            String(process.env.SECRET_KEY),
            { subject: result.id.toString(), expiresIn: process.env.EXPIRES_IN! }
        )
    
        return { token }
    }

    return{
        auth
    }
}