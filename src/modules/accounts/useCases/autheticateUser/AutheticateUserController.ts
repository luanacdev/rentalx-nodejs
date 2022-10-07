import { Request, Response } from 'express';
import { container } from "tsyringe"
import { AutheticateUserUseCase } from './AutheticateUserUseCase';

class AutheticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { password, email } = request.body;
        
        const autheticateUserUseCase = container.resolve(AutheticateUserUseCase);
        
        const token = await autheticateUserUseCase.execute({ password, email });

        return response.json(token);
    }
}

export { AutheticateUserController } 