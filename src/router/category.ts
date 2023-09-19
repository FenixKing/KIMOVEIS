import { Router } from "express"
import { categoryController } from "../controller"
import middleware from "../middleware"
import { categorySchema as schema } from "../schema"

const controller = categoryController()

const routerCategory: Router = Router() 

routerCategory.post('/', 
    middleware.verifyBody(schema.categoryCreate), 
    middleware.verifyToken, middleware.verifyAdmin, controller.post 
)

routerCategory.get('/', middleware.pagination, controller.get )
routerCategory.get('/:id/realEstate', controller.getByState )




export default routerCategory