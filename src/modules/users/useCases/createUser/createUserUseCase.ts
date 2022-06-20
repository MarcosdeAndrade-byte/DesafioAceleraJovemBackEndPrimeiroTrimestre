import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementatios/UsersRepository";

interface IRequest {
    name: string
    lastName: string
    age: number
}

class CreateUserUseCase {
    constructor(private usersRepository: UsersRepository){}

    execute({name,lastName,age}:IRequest): User{
        const new_user = this.usersRepository.create({name,lastName,age});
        return new_user;
    }
}

export {CreateUserUseCase};