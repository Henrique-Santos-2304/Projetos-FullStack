import {Request, Response } from "express";
import { getAllMealsServices } from '../services/GeaAllMealsSerices';

export class GetAllMealsController{
  async handle(request: Request, response: Response){
    const { id } = request.params
    const service = new getAllMealsServices();

    const result = await service.execute(id);

    if(result instanceof Error){
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result)
  }
}