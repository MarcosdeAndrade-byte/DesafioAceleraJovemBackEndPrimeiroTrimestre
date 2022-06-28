import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
    user_id: string;
}

class DeleteUserUseCase {
    constructor(private usersRepository: UsersRepository){}
    execute({user_id}:IRequest): void {
        const existingUser = this.usersRepository.findById(user_id);

        if(!existingUser){
            throw new Error("Usuário não encontrado!");
        }
        
        this.usersRepository.deleteUser(user_id);
    }
}

export {DeleteUserUseCase};