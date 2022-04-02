import {Request, Response } from "express";
import { DeleteMealsService } from '../services/DeleteMealsService';

export class DeleteMealsController{
  async handle(request: Request, response: Response){
    const { id } = request.params
    const service = new DeleteMealsService();

    const result = await service.execute(id);

    if(result instanceof Error){
      return response.status(400).json(result.message);
    }

    return response.status(200).end()
  }
}