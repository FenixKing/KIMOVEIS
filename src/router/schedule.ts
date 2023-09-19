import { Router } from "express"
import { scheduleController } from "../controller"
import middleware from "../middleware"
import { scheduleSchema as schema } from "../schema"

const controller = scheduleController()

const routerSchedules: Router = Router() 

routerSchedules.post('/', 
    middleware.verifyToken, middleware.verifyRealEstate, 
    middleware.verifyScheduleUser, 
    middleware.verifyBody(schema.scheduleCreate), 
    controller.post 
)

routerSchedules.get('/realEstate/:id', 
    middleware.verifyToken, 
    middleware.pagination, 
    middleware.verifyAdmin, controller.get 
)

export default routerSchedules