import {Request, Response } from "express";
import { GetUserService } from '../services/GetUserService';

export class GetUserController{
  async handle(request: Request, response: Response){
    const {username, password} = request.params
    const service = new GetUserService();

    const user = await service.execute(username,password);

    return response.json(user)
  }
}