import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/upload";

import { CreateCarController } from "@modules/cars/UseCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/UseCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/UseCases/listAvailableCars/ListAvailableCarsController";
import { UploadCarImageController } from "@modules/cars/UseCases/uploadCarImages/UploadCarImagesController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

const upload = multer(uploadConfig.upload("./tmp/cars"));


let createCarController = new CreateCarController();
let listAvailableCarsController = new ListAvailableCarsController();
let createCarSpecificationController = new CreateCarSpecificationController();
let uploadCarImageController = new UploadCarImageController();


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

carsRoutes.post(
    "/images/:id", 
    ensureAuthenticated, 
    ensureAdmin,
    upload.array("images"),
    uploadCarImageController.handle
)


export { carsRoutes };
