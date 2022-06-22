import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
    user_id: string;
    new_email: string;
}

class UpdateUseCase {
    constructor(private usersRepository: UsersRepository){}
    execute({user_id,new_email}:IRequest): User {
        const user = this.usersRepository.findById(user_id);

        if(!user) {
            throw new Error("Usuário não existente!");
        }

        const new_user = this.usersRepository.updateUser(user,new_email);
        return new_user;
    }
}

export { UpdateUseCase };