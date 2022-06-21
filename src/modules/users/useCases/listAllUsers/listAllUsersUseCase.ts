import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";



class ListAllUserUseCase {
    constructor(private usersRepository: UsersRepository){}

    execute(): User[]{
        const listAllUsers = this.usersRepository.listUser();

        if(listAllUsers.length === 0){
            throw new Error("A lista de usuários está vazia!");
        }

        return listAllUsers;
    }
}

export { ListAllUserUseCase };