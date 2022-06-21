import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
    user_id: string;
}

class DeleteUserUseCase {
    constructor(private usersRepository: UsersRepository){}
    execute({user_id}:IRequest){
        const user = this.usersRepository.deleteUser(user_id);
        return user;
    }
}

export {DeleteUserUseCase};