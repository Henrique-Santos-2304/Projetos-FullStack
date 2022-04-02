import { getRepository } from "typeorm";
import { Users } from "../entities/User";

export class GetUserService {
  async execute(userName: string, password: string) {
    const repo = getRepository(Users);

    const user = await repo.find({ where: { username: userName } });

    if (!user || user.length === 0) {
      return { errorMessage: "Usuario não encontrado" };
    }

    if (user[0].password !== password) {
      return { errorMessage: "Senha Inválida" };
    } else {
      return {
        user: {
          id: user[0].id,
          name: user[0].name,
          username: user[0].username,
        },
      };
    }
  }
}
