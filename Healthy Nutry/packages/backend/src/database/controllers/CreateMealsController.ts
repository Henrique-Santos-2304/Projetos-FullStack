import {Request, Response} from "express";
import { CreateMealsService, MealsRequest } from '../services/CreateMealsServices'

export class CreateMelasController{
  async handle(request: Request, response: Response){
    const {
      name,protein,quantityProtein,carbohydrate,
      quantityCarbohydrate,vegetable,quantityVegetable, user_id
     }: MealsRequest = request.body

    

     const service = new CreateMealsService();
     
     const result = await service.execute({
      name,protein,quantityProtein,carbohydrate,
      quantityCarbohydrate,vegetable,quantityVegetable, user_id
     })
     
     if(result instanceof Error){
      return response.status(400).json(result.message)
    }

     return  response.status(200).json(result);
  }
}