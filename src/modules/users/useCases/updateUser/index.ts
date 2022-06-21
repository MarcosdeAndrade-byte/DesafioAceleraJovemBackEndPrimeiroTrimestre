
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { UpdateController } from "./updateController"
import { UpdateUseCase } from "./updateUseCase";


const usersRepository = UsersRepository.getInstance();
const updateUseCase = new UpdateUseCase(usersRepository);
const updateController = new UpdateController(updateUseCase);

export {updateController};