import { getRepository } from 'typeorm';
import { Meals } from '../entities/Meals';

export class DeleteMealsService{
  async execute(id: string){

    const repo = getRepository(Meals);
    if(!(await repo.findOne(id))){
      return new Error("Refeição não encontrada")
    }

    await repo.delete(id)
    return "Deletado com sucesso"
  }
}