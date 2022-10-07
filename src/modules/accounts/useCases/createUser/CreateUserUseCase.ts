import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../erros/AppError";
@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({
        name, 
        email, 
        driver_license, 
        password
    }: ICreateUserDTO): Promise<void> {
        const userAlredyExists = await this.usersRepository.findByEmail(email);

        const passwordHash = await hash(password, 8);

        if (userAlredyExists) {
            throw new AppError('User already exists');
        }

        await this.usersRepository.create({
            name, 
            email, 
            driver_license, 
            password: passwordHash
        });
    }
}

export { CreateUserUseCase }