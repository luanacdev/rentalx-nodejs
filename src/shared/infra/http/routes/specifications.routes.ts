import { CreateSpecificationController } from '@modules/cars/UseCases/createSpecification/CreateSpecificationController';
import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post(
    "/", 
    ensureAuthenticated, 
    ensureAdmin,
    createSpecificationController.handle
)

export { specificationsRoutes };
