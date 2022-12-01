import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
    })

    it("should be able to list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Audi",
            description: "Carro com espaco",
            daily_rate: 110.00,
            license_plate: "DEF-122",
            fine_amount: 50,
            brand: "Car_brand",
            category_id: "dbd7ae42-9356-4fc0-ab03-c52c7c0be2e8"
        })

        const cars = await listCarsUseCase.execute({});
        
        expect(cars).toEqual([car]);
    })

    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Audi",
            description: "Carro com espaco",
            daily_rate: 110.00,
            license_plate: "DEF-122",
            fine_amount: 50,
            brand: "Car_brand",
            category_id: "dbd7ae42-9356-4fc0-ab03-c52c7c0be2e8"
        })

        const cars = await listCarsUseCase.execute({
            brand: "Car_brand"
        });
        
        expect(cars).toEqual([car]);
    })
})