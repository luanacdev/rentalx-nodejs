import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    brand?: string;
    name?: string;
    category_id?: string;
}

@injectable()
class ListCarsUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {}

    async execute({  brand, name, category_id }: IRequest): Promise<Car[]> {
        const cars = await this.carsRepository.findAvailable(brand, name, category_id);
        return cars;
    }
}

export { ListCarsUseCase };
