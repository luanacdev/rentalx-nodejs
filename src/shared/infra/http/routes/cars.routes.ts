import { Router } from "express";

import { CreateCarController } from "@modules/cars/UseCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/UseCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/UseCases/listAvailableCars/ListAvailableCarsController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

let createCarController = new CreateCarController();
let listAvailableCarsController = new ListAvailableCarsController();
let createCarSpecificationController = new CreateCarSpecificationController();

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

carsRoutes.post(
    "/specifications/:id", 
    ensureAuthenticated, 
    ensureAdmin,
    createCarSpecificationController.handle
)

export { carsRoutes };
