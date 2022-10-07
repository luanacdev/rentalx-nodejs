import { Router } from "express"
import { AutheticateUserController } from "../modules/accounts/useCases/autheticateUser/AutheticateUserController";


const authenticateRoutes = Router();

const autheticateUserController = new AutheticateUserController();

authenticateRoutes.post("/sessions",  autheticateUserController.handle)

export { authenticateRoutes }

