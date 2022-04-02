import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserServices";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, username, email, password } = request.body;

    const service = new CreateUserService();

    const result = await service.execute({
      name,
      username,
      email,
      password,
    });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(201).json(result);
  }
}
