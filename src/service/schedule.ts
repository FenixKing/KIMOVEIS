import { scheduleRepo as data, realEstateRepo, userRepo } from "../data-source"
import { AppError } from "../errors"
import { TScheduleCreate } from "../interface/schedule"


export const scheduleServices = () => {

    const create = async (payload: TScheduleCreate, userId: number) => {

        const findRealEstate = await realEstateRepo.findOneBy({id: payload.realEstateId})

        if(!findRealEstate)throw new AppError('RealEstate not found', 404)

        if(parseFloat(payload.hour) > 18 || parseFloat(payload.hour) < 8){
            throw new AppError('Invalid hour, available times are 8AM to 18PM', 400)
        }

        const week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
        const parts = payload.date.split("/")
        const d = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]))
        
        if(d.getDay() == 0) throw new AppError('Invalid date, work days are monday to friday', 400)

        const findUser = await userRepo.findOneBy({id: userId})

        if(findUser){
            const query = data.create({
                ...payload,
                user: findUser,
                realEstate: findRealEstate,
            })
            return
        }        
        
    }

    const selectAll = async (id: string) => {

        const result = await realEstateRepo.findOne({
            relations:{
                address: true,
                category: true,
                schedules: {
                    user: true
                }
            },
            where: {
                id: Number(id)
            }
        })

        if(result == null){
            throw new AppError('RealEstate not found', 404)
        }
        
        return result 
    }

    return{
        create,
        selectAll
    }
}