import {getRepository} from "typeorm"
import { Meals } from '../entities/Meals'


export class getAllMealsServices{
  async execute(id: string ){
    const repo = getRepository(Meals);

  const meals = await repo.find({
    where: {user_id: id}
  });

  return meals;
  }
  
}
