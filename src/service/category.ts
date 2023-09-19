import { categorySchema as schema } from '../schema'
import { categoryRepo as data, realEstateRepo } from "../data-source"
import { PaginationParams } from "../interface/pagination"
import { AppError } from "../errors"
import { TCategory } from '../interface'
import { Category, RealEstate } from '../entities'

export const categoryServices = () => {

    const create = async (payload: TCategory.TCategoryCreate) => {
        
        const validated: TCategory.TCategoryCreate = schema.categoryCreate.parse(payload)
        const findCategory = await data.findOneBy({ name: payload.name }) 

        if(findCategory){
            throw new AppError('Category already exists', 409)
        }
        
        const result:Category = await data.save(validated)  
        
        return result
        

    }

   const selectAll = async () => {
        const result = await data.find()
        
        return result
    }

    const selectByState = async (id: string) => {
        const result = await data.findOneBy({ id: parseInt(id) }) 

        if(!result){
            throw new AppError("Category not found" , 404)
        }

        const query = await data.findOne({
            relations: {
                realEstate: true
            },
            where: {
                id: Number(id)
            }
        })
        return query
     }

    return{
        create,
        selectAll,
        selectByState 
    }
}