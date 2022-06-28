import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ICreateUserDTO } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
    body: Partial<ICreateUserDTO>;
}

class UpdateUseCase {
    constructor(private usersRepository: UsersRepository){}
    execute({user_id,body}:IRequest): void {
        const user = this.usersRepository.findById(user_id);

        if(!user) {
            throw new Error("Usuário não existente!");
        }

        this.usersRepository.updateUser(user_id,body);
    }
}

export { UpdateUseCase };