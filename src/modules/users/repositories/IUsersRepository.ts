import { User } from "../model/User";

interface ICreateUserDTO {
    name: string,
    lastName: string,
    age: number,
    email: string,
  }

interface IUsersRepository {
    create({name,lastName,age,email}: ICreateUserDTO): User;
    findById(id: string): User | undefined;
    deleteUser(id: string): User[] | undefined;
    updateUser(user: User,new_email: string): User;
    findByEmail(email: string): User | undefined;
    listUser(): User[];
}

export {IUsersRepository,ICreateUserDTO};