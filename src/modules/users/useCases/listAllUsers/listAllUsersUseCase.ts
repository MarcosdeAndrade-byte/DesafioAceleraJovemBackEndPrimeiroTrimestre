import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementatios/UsersRepository";



class ListAllUserUseCase {
    constructor(private usersRepository: UsersRepository){}

    execute(): User[]{
        const new_user = this.usersRepository.listUser();
        return new_user;
    }
}

export { ListAllUserUseCase };