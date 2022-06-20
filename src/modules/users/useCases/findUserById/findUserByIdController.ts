import { Request,Response } from "express";
import { FindUserByIdUseCase } from "./findUserByIdUseCase";


class FindUserByIdController {
    constructor(private findUserByIdUseCase: FindUserByIdUseCase){}

    handle(request: Request, response: Response): Response {
        const { user_id } = request.params;
        const user = this.findUserByIdUseCase.execute({user_id});
        return response.status(201).json({user});
    }
}

export {FindUserByIdController};