import { getRepository } from "typeorm";
import { Meals } from "../entities/Meals";
import { Users } from "../entities/User";

export type MealsRequest = {
  name: string;
  protein: string | null;
  quantityProtein: string | null;
  carbohydrate: string | null;
  quantityCarbohydrate: string | null;
  vegetable: string | null;
  quantityVegetable: string | null;
  user_id: string;
};

export class CreateMealsService {
  async execute({
    name,
    protein,
    quantityProtein,
    carbohydrate,
    quantityCarbohydrate,
    vegetable,
    quantityVegetable,
    user_id,
  }: MealsRequest): Promise<Meals | Error> {
    const repo = getRepository(Meals);
    const repoUser = getRepository(Users);

    if (!(await repoUser.findOne(user_id))) {
      return new Error("User does not exists");
    }

    const meals = repo.create({
      name,
      protein: protein ? protein : "",
      quantity_proteins: quantityProtein ? quantityProtein : "",
      carbohydrate: carbohydrate ? carbohydrate : "",
      quantity_carbohydrate: quantityCarbohydrate ? quantityCarbohydrate : "",
      vegetable: vegetable ? vegetable : "",
      quantity_vegetable: quantityVegetable ? quantityVegetable : "",
      created_at: new Date(),
      user_id,
    });

    await repo.save(meals);

    return meals;
  }
}
