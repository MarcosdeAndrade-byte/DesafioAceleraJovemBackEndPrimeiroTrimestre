import {Request,Response} from "express";
import { ListAllUserUseCase } from "./listAllUsersUseCase";

class ListAllUsersController {

    constructor(private listAllUserUseCase: ListAllUserUseCase) {}
    handle(request: Request, response: Response): Response {
        try{
            const listAllUsers = this.listAllUserUseCase.execute();
            return response.status(201).json({listAllUsers});
        }catch(error){
            return response.status(400).json({error: error.message});
        }
    }
}

export { ListAllUsersController };