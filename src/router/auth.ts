import { Router } from "express"
import { authController } from "../controller"
import middleware from "../middleware"

const controller = authController()

const loginUser: Router = Router() 

loginUser.post('/', controller.post )
export default loginUser