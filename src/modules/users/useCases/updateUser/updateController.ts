import {Request,Response} from "express";
import { UpdateUseCase } from "./updateUseCase";

class UpdateController {
    constructor(private updateUseCase: UpdateUseCase) {}
    handle(request: Request, response: Response): Response {
        try{
            const { user_id } = request.params;
            const { body } = request;
            this.updateUseCase.execute({user_id,body});
            console.log('chegou1')
            return response.status(204).end();
        }catch(error){
            return response.status(400).json({error: error.message});
        }
    }
}

export { UpdateController };