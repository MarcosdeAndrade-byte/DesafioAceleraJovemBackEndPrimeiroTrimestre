import {Request,Response} from "express";
import { UpdateUseCase } from "./updateUseCase";

class UpdateController {
    constructor(private updateUseCase: UpdateUseCase) {}
    handle(request: Request, response: Response): Response {
        try{
            const { user_id,new_email } = request.params;
            const update_user = this.updateUseCase.execute({user_id,new_email});
            return response.status(201).json({update_user});
        }catch(error){
            return response.status(400).json({error: error.message});
        }
    }
}

export { UpdateController };