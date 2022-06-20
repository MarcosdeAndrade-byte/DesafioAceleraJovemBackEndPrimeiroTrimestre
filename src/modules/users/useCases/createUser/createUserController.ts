import { Response,Request } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}
    
    handle(request: Request, response: Response): Response {
        const {name,lastName,age} = request.body;
        const new_user = this.createUserUseCase.execute({name,lastName,age});
        return response.status(201).json(new_user);
    }
}

export {CreateUserController};