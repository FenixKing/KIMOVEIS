import { TUsers } from "../interface"

import { userSchema as schema } from '../schema'
import { userRepo as user } from "../data-source"
import User from "../entities/users"
import { PaginationParams } from "../interface/pagination"
import { hash } from "bcryptjs"
import { AppError } from "../errors"

export const userServices = () => {

    const create = async (payload: TUsers.TUsersCreate) => {
        const newPass = await hash(payload.password, 10)
        payload.password = newPass

        const validated: TUsers.TUsersCreate = schema.usersCreate.parse(payload)
        const result:User = await user.save(validated)  
            
        return schema.usersNotPass.parse(result)

    }

    const selectAll = async (params: PaginationParams) => {
        const [result, count]: [User[], number] = await user.findAndCount({
            order: { [params.sort]: params.order },
            skip: params.page,
            take: params.perPage,
        })

        return schema.usersRead.parse(result)
    }

    const update = async (payload: TUsers.TUsersUpdate, users:User, data: {admin: string, sub: number}) => {
        delete payload.admin
        if(!data.admin && data.sub != users.id){
            throw new AppError("Insufficient permission" , 403)
        }
        const result = await user.save({ ...users, ...payload })
        return  schema.usersNotPass.parse(result)
        
    }
    
    const deleteM = async (users: User, data: {admin: string, sub: number}) => {
        if(!data.admin){
            throw new AppError("Insufficient permission" , 403)
        }
        return await user.softRemove(users)
    }

    return{
        create,
        selectAll,
        update,
        deleteM
    }
}