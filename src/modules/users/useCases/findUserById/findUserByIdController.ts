import { Request,Response } from "express";
import { FindUserByIdUseCase } from "./findUserByIdUseCase";


class FindUserByIdController {
    constructor(private findUserByIdUseCase: FindUserByIdUseCase){}

    handle(request: Request, response: Response): Response {
        try{
            const { user_id } = request.params;
            const user = this.findUserByIdUseCase.execute({user_id});
            return response.status(200).json(user);
        }catch(error){
            return response.status(400).json({error: error.message});
        }
    }
}

export {FindUserByIdController};