import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
    user_id: string;
}

class DeleteUserUseCase {
    constructor(private usersRepository: UsersRepository){}
    execute({user_id}:IRequest){
        const existingUser = this.usersRepository.findById(user_id);

        if(!existingUser){
            throw new Error("Usuário não encontrado!");
        }
        
        const user = this.usersRepository.deleteUser(user_id);
        return user;
    }
}

export {DeleteUserUseCase};