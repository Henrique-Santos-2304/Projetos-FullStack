import { getRepository } from 'typeorm';

import { Users } from '../entities/User';

type UsersRequest ={
  name: string;
  username: string;
  email: string;
  password: string;
};

export class CreateUserService{
  async execute({
    name, username, email, password
  }:UsersRequest){

    const repo = getRepository(Users)
    const getUsers = await repo.find();

    const isUserNameExists = getUsers.some(user => user.username === username);
    const isEmailExists = getUsers.some(user => user.email === email)

    if(isUserNameExists){
      return {
        errorMessage: "Esse username já está sendo usado "
      }
    }else if (isEmailExists){
      return { errorMessage: "Esse email já está sendo usado"}
    }else{
      const user = repo.create({
        name, username, email, password,        
  })
  await repo.save(user);
      return {user}
}
}
}