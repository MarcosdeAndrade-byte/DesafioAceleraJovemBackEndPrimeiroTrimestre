import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { FindUserByIdController } from "./findUserByIdController";
import { FindUserByIdUseCase } from "./findUserByIdUseCase";

const usersRepository = UsersRepository.getInstance();
const findUserByIdUseCase = new FindUserByIdUseCase(usersRepository);
const findUserByIdController = new FindUserByIdController(findUserByIdUseCase);

export {findUserByIdController};