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
    
    create({ name, lastName, age, email}: ICreateUserDTO): User {
       const new_user = new User(name, lastName, age, email);
       UsersRepository.INSTANCE.users.push(new_user);
       return new_user;
    }

    findById(id: string): User | undefined {
        return UsersRepository.INSTANCE.users.find(find => find.id === id);
    }

    findByEmail(email: string): User | undefined {
        return UsersRepository.INSTANCE.users.find(find => find.email === email);
    }

    deleteUser(id: string): User[] | undefined {
        const userPosition = UsersRepository.INSTANCE.users.findIndex(find => find.id === id);
        const new_list = UsersRepository.INSTANCE.users.splice(userPosition,1);
        return new_list;        
    }

    updateUser(user: User, new_email: string): User{
        user.email = new_email;
        return user;
    }
    
    listUser(): User[] {
        return this.users;
    }
}

export {UsersRepository};