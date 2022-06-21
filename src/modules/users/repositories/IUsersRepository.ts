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
    deleteUser(id: string): User[] | undefined; //Atenção! Devo retornar um usuário ao deletar um Id?
    listUser(): User[];
}

export {IUsersRepository,ICreateUserDTO};