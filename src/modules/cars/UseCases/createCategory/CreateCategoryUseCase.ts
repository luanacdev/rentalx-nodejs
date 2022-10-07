import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../erros/AppError";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) {}

    async execute({ description, name } : IRequest): Promise<void> {
        const categoryAlredyExists = await this.categoriesRepository.findByName(name);

        if (categoryAlredyExists) {
            throw new AppError("Category Alredy exists!")
        }
    
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase }