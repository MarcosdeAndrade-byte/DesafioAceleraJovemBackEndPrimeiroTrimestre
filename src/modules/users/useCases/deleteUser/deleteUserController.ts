import { DeleteUserUseCase } from "./deleteUserUseCase";
import {Request,Response} from "express";

class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase){}

    handle(request: Request, response: Response): Response {
        const { user_id } = request.params;
        const delete_user = this.deleteUserUseCase.execute({user_id});
        return response.status(201).json({delete_user});
    }
}

export {DeleteUserController};