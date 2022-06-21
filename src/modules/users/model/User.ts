import { v4 as uuidV4 } from "uuid";

class User{
    id?: string;
    name: string;
    lastName: string;
    email: string;
    age: number;

    constructor(name: string,lastName: string,age: number,email: string){
        if(!this.id){
            this.id = uuidV4()
        }
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
}

export {User};