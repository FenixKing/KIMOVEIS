import { Router } from "express"
import { userController } from "../controller"
import middleware from "../middleware"
import { userSchema as schema } from "../schema"

const controller = userController()

const routerUser: Router = Router() 

routerUser.post('/', 
    middleware.verifyBody(schema.usersCreate), 
    middleware.verifyUsers, controller.post 
)

routerUser.get('/', middleware.verifyToken, middleware.verifyAdmin, middleware.pagination, controller.get )

routerUser.use("/:id", middleware.verifyId)

routerUser.patch('/:id', 
    middleware.verifyBody(schema.usersUpdate),
    middleware.verifyUsers, middleware.verifyToken, controller.patch 
)

routerUser.delete('/:id',  middleware.verifyToken, controller.deleteM )

export default routerUser