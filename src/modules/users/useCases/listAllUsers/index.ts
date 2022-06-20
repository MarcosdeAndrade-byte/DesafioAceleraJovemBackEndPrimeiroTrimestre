import { UsersRepository } from "../../repositories/implementatios/UsersRepository";
import { ListAllUsersController } from "./listAllUsersController";
import { ListAllUserUseCase } from "./listAllUsersUseCase";


const usersRepository = UsersRepository.getInstance();
const listAllUserUseCase = new ListAllUserUseCase(usersRepository);
const listAllUsersController = new ListAllUsersController(listAllUserUseCase);

export {listAllUsersController};