import { Router } from "express";
import { createUserController } from "../modules/users/useCases/createUser";
import { listAllUsersController } from "../modules/users/useCases/listAllUsers";

const usersRoutes = Router();

// Rota para criar usuário
usersRoutes.post('/create',(request,response) => {
    createUserController.handle(request,response);
});

usersRoutes.get("/list",(request,response) => {
    listAllUsersController.handle(request,response);
});

export {usersRoutes};