import { UsersRepository } from "../../repositories/implementatios/UsersRepository";

interface IRequest {
    user_id: string;
}

class FindUserByIdUseCase {
    constructor(private usersRepository: UsersRepository){}
    execute({user_id}:IRequest){
        const user = this.usersRepository.findById(user_id);
        return user;
    }
}

export {FindUserByIdUseCase};