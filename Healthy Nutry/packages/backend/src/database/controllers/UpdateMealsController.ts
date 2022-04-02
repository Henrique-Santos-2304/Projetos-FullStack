import {Request, Response } from "express";
import { UpdateMealsService } from '../services/UpdateMealsServices';

export class UpdateMealsController{
  async handle(request: Request, response: Response){
    const { id } = request.params
    const service = new UpdateMealsService();
    const {
      name, protein,quantityProtein,carbohydrate,
    quantityCarbohydrate,vegetable,quantityVegetable
    } = request.body

    const result = await service.execute(
      {
        id, name, protein,quantityProtein,carbohydrate,
      quantityCarbohydrate,vegetable,quantityVegetable
    }
    );

    if(result instanceof Error){
      return response.status(400).json(result.message);
    }

    return response.json(result)
  }
}