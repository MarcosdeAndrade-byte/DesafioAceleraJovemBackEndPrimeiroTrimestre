import { User } from "../model/User";

interface ICreateUserDTO {
    name: string,
    lastName: string,
    age: number;
  }

interface IUsersRepository {
    create({name,lastName,age}: ICreateUserDTO): User;
    findById(id: string): User | undefined;
    deleteUser(id: string): User; //Atenção! Devo retornar um usuário ao deletar um Id?
    listUser(): User[];
}

export {IUsersRepository,ICreateUserDTO};