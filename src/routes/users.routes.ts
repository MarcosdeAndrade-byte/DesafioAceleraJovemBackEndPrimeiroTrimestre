import { request, response, Router } from "express";
import { createUserController } from "../modules/users/useCases/createUser";
import { findUserByIdController } from "../modules/users/useCases/findUserById";
import { listAllUsersController } from "../modules/users/useCases/listAllUsers";
import { deleteUserController } from "../modules/users/useCases/deleteUser/index";
import { updateController } from "../modules/users/useCases/updateUser/index";



const usersRoutes = Router();

// Rota para criar usuário
usersRoutes.post('/',(request,response) => {
    createUserController.handle(request,response);
});

usersRoutes.get("/",(request,response) => {
    listAllUsersController.handle(request,response);
});

usersRoutes.get("/:user_id",(request,response) => {
    findUserByIdController.handle(request,response);
});

usersRoutes.delete("/:user_id",(request,response) => {
    deleteUserController.handle(request,response);
});

usersRoutes.put("/:user_id",(request,response) => {
    updateController.handle(request,response);
});

export {usersRoutes};