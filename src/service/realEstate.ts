import { addressRepo, categoryRepo, realEstateRepo as data } from "../data-source"
import { PaginationParams } from "../interface/pagination"
import { AppError } from "../errors"
import { TRealEstateCreate, TRealEstateRead } from "../interface/realEstate"
import { TCategoryCreate, TCategoryRead } from "../interface/category"
import { realEstateSchema as schema } from "../schema"
import { RealEstate } from "../entities"
import { realEstateReturn } from "../schema/realEstate"
import { TAddressCreate } from "../interface/address"

export const realEstateServices = () => {

    const create = async (payload: TRealEstateCreate) => {
        
        const findAddress = await addressRepo.findOneBy({ zipCode: payload.address.zipCode }) 
        if(findAddress) throw new AppError('Address already exists', 409)
        
        const category = await categoryRepo.findOneBy({id: payload.categoryId})

        const address = await addressRepo.save(payload.address)
           
        if(category){
            const query: RealEstate = data.create({
                ...payload, 
                address: address, 
                category: category
            })
            const result = await data.save(query) 
            return realEstateReturn.parse(result)
           
        }
        
        
    }//3,13

    const selectAll = async (params: PaginationParams) => {
        const result = await data.find({
            relations: {
                address: true,
                category: false
            }
        })
            return result
    }

    return{
        create,
        selectAll
    }
}