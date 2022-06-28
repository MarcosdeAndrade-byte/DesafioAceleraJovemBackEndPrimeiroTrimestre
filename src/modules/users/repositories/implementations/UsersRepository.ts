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

    deleteUser(id: string): void {
        const userPosition = UsersRepository.INSTANCE.users.findIndex(find => find.id === id);
        UsersRepository.INSTANCE.users.splice(userPosition,1);
    }

    updateUser(id: string, body: Partial<ICreateUserDTO>): void{
        const indexOfUserToUpdate =  UsersRepository.INSTANCE.users.findIndex(find => find.id === id);
        Object.keys(body).forEach((key) => { // name
            (UsersRepository.INSTANCE.users[indexOfUserToUpdate] as any)[key] = (body as any)[key] // Carlos Silva
        })
    }
    
    listUser(): User[] {
        return this.users;
    }
}

export {UsersRepository};