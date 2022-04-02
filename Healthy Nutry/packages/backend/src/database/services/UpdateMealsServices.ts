import { getRepository } from 'typeorm';
import { Meals } from '../entities/Meals';

type UpdateMealsRequest ={
  id: string;
  name: string;
  protein: string | null ;
  quantityProtein: string | null ;
  carbohydrate: string | null;
  quantityCarbohydrate: string | null;
  vegetable: string | null;
  quantityVegetable: string | null;

};
export class UpdateMealsService{
  async execute({
    id,name, protein,quantityProtein,carbohydrate,
    quantityCarbohydrate,vegetable,quantityVegetable
  }: UpdateMealsRequest){
    const repo = getRepository(Meals);

    const meals = await repo.findOne(id)

    if(!meals){
      return new Error("Meals does not exists")
    }

    meals.name = name ? name : meals.name
    meals.user_id = meals.user_id
    meals.protein =protein ? protein : meals.protein
    meals.quantity_proteins = quantityProtein ? quantityProtein : meals.quantity_proteins
    meals.carbohydrate = carbohydrate ? carbohydrate : meals.carbohydrate
    meals.quantity_carbohydrate = quantityCarbohydrate ? quantityCarbohydrate : meals.quantity_carbohydrate
    meals.vegetable = vegetable ? vegetable : meals.vegetable
    meals.quantity_vegetable = quantityVegetable ? quantityVegetable : meals.quantity_vegetable
    meals.created_at = new Date(),


    await repo.save(meals)

    return meals;
  }
}