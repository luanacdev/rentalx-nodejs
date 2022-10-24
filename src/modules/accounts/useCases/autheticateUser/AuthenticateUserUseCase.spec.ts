import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AutheticateUserUseCase } from "./AutheticateUserUseCase";


let autheticateUserUseCase: AutheticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Autheticate User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        autheticateUserUseCase = new AutheticateUserUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory); 
    })

    it("should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            driver_license: "000123",
            email: "user@test.com",
            password: "1234",
            name: "User Test"
        };

        await createUserUseCase.execute(user);

        const result = await autheticateUserUseCase.execute({
            email: user.email,
            password: user.password
        })

        expect(result).toHaveProperty("token");
    });   
    
    it("should not be able to authenticate an nonexistent user", () => {
        expect(async () => {
            await autheticateUserUseCase.execute({
                email: "false@test.com",
                password: "33"
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to authenticate with incorrect password", () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                driver_license: "0003",
                email: "user@test.com",
                password: "1234",
                name: "User Test"
            };

            await createUserUseCase.execute(user);
            
            await autheticateUserUseCase.execute({
                email: user.email,
                password: "222"
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});