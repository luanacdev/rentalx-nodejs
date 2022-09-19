import { isConstructorDeclaration } from "typescript";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {

    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({ description, name } : IRequest): void {
        const categoryAlredyExists = this.categoriesRepository.findByName(name);

        if (categoryAlredyExists) {
            throw new Error("Category Alredy exists!")
        }
    
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService }