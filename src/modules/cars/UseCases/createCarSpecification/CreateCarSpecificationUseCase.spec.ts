import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";



let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car Specification", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(carsRepositoryInMemory);
    })

    it("should not be able to add a new specification to a now-existent car", async () => {
        expect(async () => {
            const car_id = "123";
            const specifications_id = ["123"];

            await createCarSpecificationUseCase.execute({ car_id, specifications_id })
        }).rejects.toBeInstanceOf(AppError)
    })

    it("should be able to add a new specification to the car", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Name Car",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "ABV-222",
            fine_amount: 100,
            brand: "Ban",
            category_id: "categories"
        })
        
        const specifications_id = ["123"];

        await createCarSpecificationUseCase.execute({ car_id: car.id, specifications_id });
    }) 
})