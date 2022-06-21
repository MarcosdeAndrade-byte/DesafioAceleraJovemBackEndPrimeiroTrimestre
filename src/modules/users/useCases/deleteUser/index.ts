import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { DeleteUserController } from "./deleteUserController";
import { DeleteUserUseCase } from "./deleteUserUseCase";

const usersRepository = UsersRepository.getInstance();
const deleteUserUseCase = new DeleteUserUseCase(usersRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

export {deleteUserController};