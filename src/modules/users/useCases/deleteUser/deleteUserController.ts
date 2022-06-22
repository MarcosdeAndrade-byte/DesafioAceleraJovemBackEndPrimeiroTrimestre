import { DeleteUserUseCase } from "./deleteUserUseCase";
import {Request,Response} from "express";

class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase){}

    handle(request: Request, response: Response): Response {
        try{
            const { user_id } = request.params;
            this.deleteUserUseCase.execute({user_id});
            return response.status(201).json({message: "Usuário deletado com sucesso"});
        }catch(error) {
            return response.status(400).json({error: error.message});
        }
    }
}

export {DeleteUserController};