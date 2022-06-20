import { User } from "../../model/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository{

    // Padrão Singleton 

    private users: User[];

    private static INSTANCE: UsersRepository;

    private constructor() {
        this.users = []
    }

    public static getInstance(): UsersRepository {
        if (!UsersRepository.INSTANCE) {
          UsersRepository.INSTANCE = new UsersRepository();
        }
    
        return UsersRepository.INSTANCE;
    }

    // Métodos 
    
    create({ name, lastName, age }: ICreateUserDTO): User {
       const new_user = new User(name, lastName, age);
       UsersRepository.INSTANCE.users.push(new_user);
       return new_user;
    }

    findById(id: string): User {
        throw new Error("Method not implemented.");
    }

    deleteUser(id: string): User {
        throw new Error("Method not implemented.");
    }
    
    listUser(): User[] {
        throw new Error("Method not implemented.");
    }
}

export {UsersRepository};