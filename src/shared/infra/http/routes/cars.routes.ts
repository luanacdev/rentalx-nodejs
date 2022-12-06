import { Router } from "express";

import { CreateCarController } from "@modules/cars/UseCases/createCar/CreateCarController";
import { ListAvailableCarsController } from "@modules/cars/UseCases/listAvailableCars/ListAvailableCarsController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

let createCarController = new CreateCarController();
let listAvailableCarsController = new ListAvailableCarsController();


carsRoutes.post(
    "/", 
    ensureAuthenticated, 
    ensureAdmin, 
    createCarController.handle
)

carsRoutes.get(
    "/available", 
    listAvailableCarsController.handle
)

export { carsRoutes };
