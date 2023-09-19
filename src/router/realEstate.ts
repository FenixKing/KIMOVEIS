import { Router } from "express"
import { realEstateController } from "../controller"
import middleware from "../middleware"
import { realEstateSchema as schema } from "../schema"

const controller = realEstateController()

const routerRealEstate: Router = Router() 

routerRealEstate.post('/', 
    middleware.verifyBody(schema.realEstateCreate), 
    middleware.verifyToken, middleware.verifyAdmin, controller.post 
)

routerRealEstate.get('/', middleware.pagination, controller.get )

export default routerRealEstate