import { Response,Request } from "express";
import { CreateUserUseCase } from "./createUserUseCase";


class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}
    
    handle(request: Request, response: Response): Response {
        try {
            const {name,lastName,age,email} = request.body;
            const new_user = this.createUserUseCase.execute({name,lastName,age,email});
            return response.status(201).json(new_user);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}

export {CreateUserController};