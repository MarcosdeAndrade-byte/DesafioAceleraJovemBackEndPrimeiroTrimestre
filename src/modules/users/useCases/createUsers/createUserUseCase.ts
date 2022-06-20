import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementatios/UsersRepository";

interface IRequest {
    name: string
    lastName: number
    age: number
}

class CreateUserUseCase {
    constructor(private usersRepository: UsersRepository){}
    execute({name,lastName,age}:IRequest): User{
        
    }
}

export {CreateUserUseCase};