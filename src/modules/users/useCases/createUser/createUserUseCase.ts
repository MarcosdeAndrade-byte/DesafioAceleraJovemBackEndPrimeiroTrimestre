import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
    name: string,
    lastName: string,
    age: number,
    email: string,
}

class CreateUserUseCase {
    constructor(private usersRepository: UsersRepository){}

    execute({name,lastName,age,email}:IRequest): User{
        const new_user = this.usersRepository.create({name,lastName,age,email});
        return new_user;
    }
}

export {CreateUserUseCase};