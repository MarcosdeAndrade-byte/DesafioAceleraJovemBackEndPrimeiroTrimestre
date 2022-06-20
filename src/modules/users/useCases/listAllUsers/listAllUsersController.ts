import {Request,Response} from "express";
import { ListAllUserUseCase } from "./listAllUsersUseCase";

class ListAllUsersController {

    constructor(private listAllUserUseCase: ListAllUserUseCase) {}
    handle(request: Request, response: Response): Response {
        const listAllUsers = this.listAllUserUseCase.execute()
        return response.status(201).json({listAllUsers});
    }
}

export { ListAllUsersController };