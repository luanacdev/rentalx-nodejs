import { AutheticateUserController } from "@modules/accounts/useCases/autheticateUser/AutheticateUserController";
import { Router } from "express"


const authenticateRoutes = Router();

const autheticateUserController = new AutheticateUserController();

authenticateRoutes.post("/sessions",  autheticateUserController.handle)

export { authenticateRoutes }

