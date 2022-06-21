import { Response,Request } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}
    
    handle(request: Request, response: Response): Response {
        const {name,lastName,age,email} = request.body;
        const new_user = this.createUserUseCase.execute({name,lastName,age,email});
        return response.status(201).json(new_user);
    }
}

export {CreateUserController};