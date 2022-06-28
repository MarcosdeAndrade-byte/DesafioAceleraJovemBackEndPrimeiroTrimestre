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
    deleteUser(id: string): void;
    updateUser(id: string,body: Partial<ICreateUserDTO>): void;
    findByEmail(email: string): User | undefined;
    listUser(): User[];
}

export {IUsersRepository,ICreateUserDTO};