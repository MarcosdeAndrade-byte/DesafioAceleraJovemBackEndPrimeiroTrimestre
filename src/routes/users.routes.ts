import { Router } from "express";
import { createUserController } from "../modules/users/useCases/createUser";

const usersRoutes = Router();

// Rota para criar usuário
usersRoutes.post('/create',(request,response) => {
    createUserController.handle(request,response);
});

export {usersRoutes};