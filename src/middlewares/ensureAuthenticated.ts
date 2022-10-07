import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../erros/AppError';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401)
    }
    
    const [, token] = authHeader.split(" ")

    try {
        const { sub: user_id } = verify(
            token, 
            "d15c41472c0a6774e2ac20c90beb5ac0"
        ) as IPayload;

        const usersRepository = new UsersRepository();
        
        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("User does not exists", 401);
        }

        next();
    } catch {
        throw new AppError("Invalid token!", 401)
    }
}