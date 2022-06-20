import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUsers/CreateUserController";

const usersRoutes = Router();

// Rota para criar usuário
usersRoutes.get('/createuser',(request,response) => {
    CreateUserController.handle(request,response)
});

export {usersRoutes};