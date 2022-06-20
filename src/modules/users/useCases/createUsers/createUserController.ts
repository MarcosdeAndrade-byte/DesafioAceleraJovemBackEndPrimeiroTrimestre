import { Response,Request } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase){}

    static handle(request: Request, response: Response): Response{
        return response.json({message:"Olá mundo"});
    }
}

export {CreateUserController};