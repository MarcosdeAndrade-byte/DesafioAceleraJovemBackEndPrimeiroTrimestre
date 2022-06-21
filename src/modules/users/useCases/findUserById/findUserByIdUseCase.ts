import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
    user_id: string;
}

class FindUserByIdUseCase {
    constructor(private usersRepository: UsersRepository){}
    execute({user_id}:IRequest){
        const user = this.usersRepository.findById(user_id);

        if(!user){
            throw new Error("Usuário não encontrado!");
        }

        return user;
    }
}

export {FindUserByIdUseCase};